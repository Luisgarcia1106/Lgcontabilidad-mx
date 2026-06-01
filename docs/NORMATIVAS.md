# Normativas Fiscales Mexicanas Implementadas

## 📋 Cumplimiento SAT

Este sistema implementa todas las normativas fiscales principales exigidas por el Servicio de Administración Tributaria (SAT) mexicano.

## 1. CFDI - Comprobante Fiscal Digital por Internet

**Versión:** 4.0 (Vigente desde 2024)

**Características:**
- ✅ Generación automática de comprobantes
- ✅ Sello digital y certificado
- ✅ UUID único para cada comprobante
- ✅ Folio secuencial
- ✅ Timbre fiscal digital (requiere integración con SAT)
- ✅ Validación de emisor y receptor
- ✅ Desglose de impuestos

**Ubicación:** `backend/src/utils/cfdi.js`

## 2. ISR - Impuesto Sobre la Renta

**Decreto vigente:** Ley del ISR 2024

**Implementación:**
```javascript
// Personas Físicas: Tablas de tarifa progresiva
// Personas Morales: 30% uniforme
// Retenciones: 10% en servicios, 1% en honorarios
// Deducciones autorizadas
```

**Características:**
- ✅ Cálculo por tramos de ingreso (PF)
- ✅ Retenciones ISR en nómina (19.5%)
- ✅ Retenciones ISR en servicios (10%)
- ✅ Deducciones personales y empresariales
- ✅ Estimativa y declaración anual
- ✅ Acreditamiento de impuestos anticipados

**Ubicación:** `backend/src/utils/impuestos.js`

## 3. IVA - Impuesto al Valor Agregado

**Tasa vigente:** 16% general (también 0% y exento)

**Implementación:**
- ✅ IVA trasladado (16%)
- ✅ IVA retenido (1/3)
- ✅ Operaciones con tasa 0%
- ✅ Operaciones exentas
- ✅ Acreditamiento de IVA pagado

## 4. Retenciones e ISR Nómina

**Según Ley de ISR:**
- ✅ Retención del 10% para servicios independientes
- ✅ Retención del 1% para pagos de arrendamiento
- ✅ Retención en nómina según tabla progresiva
- ✅ Aportaciones IMSS (6.25% patrón)
- ✅ Fondo de ahorro y otros descuentos

**Ubicación:** `backend/src/routes/nomina.routes.js`

## 5. RFC y CURP

**Validaciones implementadas:**
- ✅ Formato RFC (13 caracteres para PF, 12 para PM)
- ✅ Homoclave correcta
- ✅ Validación CURP (18 caracteres)
- ✅ Cálculo de dígito verificador

**Ubicación:** `backend/src/utils/impuestos.js`

## 6. Comprobantes Fiscales

**Documentos Soportados:**
- ✅ Facturas (tipo de comprobante I)
- ✅ Notas de crédito (tipo CN)
- ✅ Notas de débito (tipo ND)
- ✅ Recibos de nómina (tipo N)
- ✅ Complementos de pago (tipo P)

## 7. Estados Financieros

**Reportes Generados:**
- ✅ Balance General (Estado de Posición Financiera)
- ✅ Estado de Resultados (Estado de Ganancias y Pérdidas)
- ✅ Flujo de Caja
- ✅ Análisis de Ratios Financieros
- ✅ Mayor General
- ✅ Diario General

**Ubicación:** `backend/src/routes/reportes.routes.js`

## 8. Declaraciones Ante SAT

**Anexos Implementados:**
- ✅ **Anexo 20:** Resumen Anual de Ingresos
  - Total de ingresos
  - Ingresos gravados y exentos
  - Deducciones autorizadas
  - Neto gravable

- ✅ **Anexo 16:** Comprobantes por Terceros
  - Validación de comprobantes recibidos
  - Identificación de emisor y receptor
  - Montos y monedas

## 9. Requisitos Contables Básicos

Según normas de contabilidad mexicanas (NOM):

- ✅ **Libro Mayor:** Registro por cuenta
- ✅ **Libro Diario:** Asientos cronológicos
- ✅ **Balanza de Comprobación:** Verificación de balance
- ✅ **Catálogo de Cuentas:** Clasificación contable
- ✅ **Pólizas:** Respaldo documental
- ✅ **Auditoría:** Trazabilidad de cambios

**Ubicación:** `backend/src/routes/contabilidad.routes.js`

## 10. Datos Fiscales Obligatorios

**Campos Requeridos en Comprobantes:**
```
✅ RFC del Emisor
✅ Nombre o Razón Social
✅ Régimen Fiscal
✅ RFC del Receptor
✅ Uso del CFDI
✅ Concepto (Clave de Producto/Servicio)
✅ Cantidad y Unidad
✅ Descripción
✅ Valor Unitario
✅ Base de IVA
✅ Tasa de IVA aplicable
✅ Importe del IVA
✅ Forma y condiciones de pago
```

## 11. Retención de IVA

**Requisitos:**
- ✅ Comprobante de retención
- ✅ RFC de quién retiene
- ✅ RFC de quién recibe la retención
- ✅ Período de retención
- ✅ Monto retenido (1/3 del IVA)
- ✅ RFC del tercero relacionado (si aplica)

## 12. Regímenes Fiscales Soportados

```
✅ 601 - Régimen General de Ley
✅ 602 - Personas Físicas con Actividad Empresarial
✅ 603 - Personas Físicas Arrendadores
✅ 605 - Personas con Ingresos por Dividendos
✅ 606 - Personas Físicas - Transparencia
✅ 607 - Personas Físicas - Enajenación
✅ 608 - Corporativos
✅ 610 - Residentes en el Extranjero
✅ 614 - Sucesiones y Asociaciones
✅ 615 - Sociedades Cooperativas
✅ 616 - Sociedades de Inversión
✅ 620 - Sociedades Financieras
✅ 621 - Instituciones de Crédito
✅ 622 - Organizaciones Auxiliares
✅ 623 - Sociedades y Asociaciones Civiles
```

## 13. Validaciones de Cumplimiento

**Sistema de Validaciones:**
- ✅ Validación de fechas
- ✅ Validación de moneda (MXN/USD/EUR)
- ✅ Validación de serie y folio
- ✅ Validación de RFC
- ✅ Validación de tarifa de impuesto
- ✅ Balance de débitos/créditos
- ✅ Cronograma de pagos

## 14. Integración SAT

**Capacidades de Integración:**
- ✅ Conexión a servicios del SAT
- ✅ Validación de CFDI en tiempo real
- ✅ Consulta de obligaciones
- ✅ Descarga de comprobantes del buzón
- ✅ Cancelación de comprobantes
- ✅ Acuses de recibo

**Nota:** Requiere credenciales de fiel/firma digital

## 15. Seguridad y Auditoría

**Controles Implementados:**
- ✅ Autenticación JWT
- ✅ Encriptación de datos sensibles
- ✅ Logs de auditoría de cambios
- ✅ Trazabilidad de operaciones
- ✅ Control de acceso basado en roles
- ✅ Firmas digitales
- ✅ Sellado de comprobantes

## 📅 Cronograma de Obligaciones

El sistema ayuda a cumplir con:

| Obligación | Frecuencia | Plazo |
|-----------|-----------|-------|
| Facturas | Mensual | 15 del mes siguiente |
| ISR | Mensual | 17 del mes siguiente |
| IVA | Mensual | 20 del mes siguiente |
| Pagos Provisionales | Trimestral | 17 del mes siguiente |
| Declaración Anual | Anual | 15 abril |
| Informes de Terceros | Anual | 28 feb |
| Nómina | Quincenal | 5 días posteriores |

## 🔐 Recomendaciones

1. **Mantener actualizado** el sistema con cambios del SAT
2. **Respaldar datos** regularmente
3. **Validar comprobantes** antes de envío
4. **Usar firma digital** para comprobantes fiscales
5. **Consultar SAT** para aclaraciones

## 📞 Referencias Oficiales

- **SAT:** www.sat.gob.mx
- **Resolución Miscelánea Fiscal:** Cambios anuales
- **Ley del ISR:** Publicada en DOF
- **Ley del IVA:** Publicada en DOF
- **RTC:** Requisitos de comprobantes

---

**Nota:** Este documento es informativo. Para garantizar cumplimiento total, consulta con un contador o asesor fiscal certificado.
