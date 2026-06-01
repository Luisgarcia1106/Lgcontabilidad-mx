// Cálculos de impuestos mexicanos según normativa SAT

/**
 * Calcula ISR (Impuesto Sobre la Renta)
 * @param {number} ingresoGravable - Ingreso gravable
 * @param {string} tipoContribuyente - 'PF' (Persona Física) o 'PM' (Persona Moral)
 * @returns {object} - Detalles del cálculo de ISR
 */
function calcularISR(ingresoGravable, tipoContribuyente = 'PF') {
  // Tabla 2024 ISR Personas Físicas (aproximada)
  const tablasISR = {
    PF: [
      { hasta: 248756, tasa: 0.01920, cuota: 0 },
      { hasta: 373628, tasa: 0.06400, cuota: 4767 },
      { hasta: 623862, tasa: 0.10880, cuota: 18839 },
      { hasta: 873692, tasa: 0.16000, cuota: 48299 },
      { hasta: 1096618, tasa: 0.17600, cuota: 80360 },
      { hasta: 1310233, tasa: 0.22000, cuota: 115833 },
      { hasta: 1737614, tasa: 0.24000, cuota: 166140 },
      { hasta: 2573973, tasa: 0.30000, cuota: 276254 },
      { hasta: Infinity, tasa: 0.35000, cuota: 522099 }
    ],
    PM: [
      { tasa: 0.30 } // Personas Morales: 30% uniforme
    ]
  };

  let isr = 0;
  if (tipoContribuyente === 'PF') {
    const tabla = tablasISR.PF;
    for (let bracket of tabla) {
      if (ingresoGravable <= bracket.hasta) {
        isr = (ingresoGravable * bracket.tasa) - bracket.cuota;
        break;
      }
    }
  } else {
    isr = ingresoGravable * 0.30;
  }

  return {
    tipoImpuesto: 'ISR',
    ingresoGravable,
    tipoContribuyente,
    impuesto: Math.round(isr * 100) / 100,
    porcentaje: tipoContribuyente === 'PF' ? 'Progresivo' : '30%'
  };
}

/**
 * Calcula IVA (Impuesto al Valor Agregado)
 * @param {number} monto - Monto base
 * @param {string} tipo - 'normal', 'exento', 'cero'
 * @returns {object} - Detalles del cálculo de IVA
 */
function calcularIVA(monto, tipo = 'normal') {
  const tasas = {
    normal: 0.16, // 16%
    exento: 0,
    cero: 0
  };

  const tasa = tasas[tipo] || 0;
  const iva = monto * tasa;

  return {
    tipoImpuesto: 'IVA',
    monto,
    tasa: tasa * 100,
    tipo,
    impuesto: Math.round(iva * 100) / 100,
    total: Math.round((monto + iva) * 100) / 100
  };
}

/**
 * Calcula retenciones (ISR e IVA)
 * @param {number} monto - Monto de la operación
 * @param {string} tipoRetencion - 'isr', 'iva', 'ambas'
 * @returns {object} - Detalles de retenciones
 */
function calcularRetenciones(monto, tipoRetencion = 'isr') {
  const retenciones = {};

  if (tipoRetencion === 'isr' || tipoRetencion === 'ambas') {
    retenciones.retencionISR = monto * 0.10; // 10% por defecto
  }

  if (tipoRetencion === 'iva' || tipoRetencion === 'ambas') {
    retenciones.retencionIVA = monto * 0.16 * 0.33; // 1/3 del IVA
  }

  const totalRetenciones = Object.values(retenciones).reduce((a, b) => a + b, 0);

  return {
    monto,
    tipoRetencion,
    retenciones: {
      ...retenciones,
      total: Math.round(totalRetenciones * 100) / 100
    },
    montoNeto: Math.round((monto - totalRetenciones) * 100) / 100
  };
}

/**
 * Valida RFC (Registro Federal de Contribuyentes)
 * @param {string} rfc - RFC a validar
 * @returns {boolean}
 */
function validarRFC(rfc) {
  const regexRFC = /^[A-ZÑ&]{3,4}\d{6}(?:[A-V0-9]){3}[A-Z0-9]?$/;
  return regexRFC.test(rfc.toUpperCase());
}

/**
 * Valida CURP
 * @param {string} curp - CURP a validar
 * @returns {boolean}
 */
function validarCURP(curp) {
  const regexCURP = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/;
  return regexCURP.test(curp.toUpperCase());
}

module.exports = {
  calcularISR,
  calcularIVA,
  calcularRetenciones,
  validarRFC,
  validarCURP
};
