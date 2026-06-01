const xml2js = require('xml2js');
const crypto = require('crypto');

/**
 * Genera un CFDI (Comprobante Fiscal Digital por Internet)
 * Versión 4.0 del SAT
 */
class GeneradorCFDI {
  constructor(datosEmisor, datosReceptor, conceptos) {
    this.datosEmisor = datosEmisor;
    this.datosReceptor = datosReceptor;
    this.conceptos = conceptos;
    this.folio = this.generarFolio();
    this.fecha = new Date().toISOString();
  }

  generarFolio() {
    return 'CFDI-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }

  calcularSubtotal() {
    return this.conceptos.reduce((sum, c) => sum + (c.cantidad * c.valorUnitario), 0);
  }

  calcularImpuestos() {
    const subtotal = this.calcularSubtotal();
    const ivaTraslado = subtotal * 0.16; // 16% IVA
    return {
      subtotal: Math.round(subtotal * 100) / 100,
      ivaTraslado: Math.round(ivaTraslado * 100) / 100,
      total: Math.round((subtotal + ivaTraslado) * 100) / 100
    };
  }

  generarXML() {
    const impuestos = this.calcularImpuestos();
    const uuid = crypto.randomUUID();

    const cfdi = {
      'cfdi:Comprobante': {
        $: {
          'xmlns:cfdi': 'http://www.sat.gob.mx/cfd/4',
          'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
          'xsi:schemaLocation': 'http://www.sat.gob.mx/cfd/4 http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd',
          'Version': '4.0',
          'Serie': 'CFDI',
          'Folio': this.folio,
          'Fecha': this.fecha,
          'Sello': 'SELLO_DIGITAL',
          'FormaPago': '99', // Otros
          'NoCertificado': 'CERTIFICADO_SAT',
          'Certificado': 'CERT_BASE64',
          'SubTotal': impuestos.subtotal,
          'Total': impuestos.total,
          'TipoDeComprobante': 'I', // Ingreso
          'Moneda': 'MXN'
        },
        'cfdi:Emisor': [{
          $: {
            'Rfc': this.datosEmisor.rfc,
            'Nombre': this.datosEmisor.nombre,
            'RegimenFiscal': '601' // Régimen General
          }
        }],
        'cfdi:Receptor': [{
          $: {
            'Rfc': this.datosReceptor.rfc,
            'Nombre': this.datosReceptor.nombre,
            'UsoCFDI': 'G01' // Adquisición de mercancías
          }
        }],
        'cfdi:Conceptos': [{
          'cfdi:Concepto': this.conceptos.map(c => ({
            $: {
              'ClaveProdu': c.clave || 'NO_IDENTIFICADO',
              'Cantidad': c.cantidad,
              'ClaveUnidad': 'H87',
              'Descripcion': c.descripcion,
              'ValorUnitario': c.valorUnitario,
              'Importe': c.cantidad * c.valorUnitario,
              'ObjetoImp': '02' // Sí objet impuesto
            }
          }))
        }],
        'cfdi:Impuestos': [{
          $: {
            'TotalImpuestosTrasladados': impuestos.ivaTraslado
          },
          'cfdi:Traslados': [{
            'cfdi:Traslado': [{
              $: {
                'Base': impuestos.subtotal,
                'Impuesto': '002', // IVA
                'TipoFactor': 'Tasa',
                'TasaOCuota': '0.16',
                'Importe': impuestos.ivaTraslado
              }
            }]
          }]
        }]
      }
    };

    const builder = new xml2js.Builder();
    return builder.buildObject(cfdi);
  }

  generarJSON() {
    const impuestos = this.calcularImpuestos();
    return {
      version: '4.0',
      folio: this.folio,
      fecha: this.fecha,
      uuid: crypto.randomUUID(),
      emisor: this.datosEmisor,
      receptor: this.datosReceptor,
      conceptos: this.conceptos,
      impuestos,
      estado: 'generado'
    };
  }
}

module.exports = { GeneradorCFDI };
