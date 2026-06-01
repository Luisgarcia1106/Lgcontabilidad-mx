const express = require('express');
const router = express.Router();
const { authenticateToken, authorize } = require('../middleware/auth');
const { logger } = require('../middleware/logger');

// Registrar empleado
router.post('/empleados', authenticateToken, authorize(['admin', 'rh']), (req, res) => {
  try {
    const { nombre, apellido, rfc, curp, puesto, salario } = req.body;

    if (!nombre || !apellido || !rfc || !curp || !puesto || !salario) {
      return res.status(400).json({ error: 'Campos requeridos incompletos' });
    }

    const empleado = {
      id: Date.now(),
      nombre,
      apellido,
      rfc,
      curp,
      puesto,
      salario,
      fechaIngreso: new Date(),
      estado: 'activo'
    };

    logger.info(`Empleado registrado: ${nombre} ${apellido}`);
    res.status(201).json({ message: 'Empleado registrado exitosamente', empleado });
  } catch (error) {
    logger.error('Error al registrar empleado:', error);
    res.status(500).json({ error: 'Error al registrar empleado' });
  }
});

// Calcular nómina quincenal
router.post('/calcular-nomina', authenticateToken, authorize(['admin', 'rh', 'contador']), (req, res) => {
  try {
    const { empleadoId, dias_laborados, horas_extras } = req.body;

    if (!empleadoId || !dias_laborados) {
      return res.status(400).json({ error: 'Datos incompletos' });
    }

    // Simulación de cálculo
    const salarioBase = 15000; // Ejemplo
    const salarioProporcional = (salarioBase / 15) * dias_laborados;
    const pagoPorHorasExtras = (horas_extras || 0) * (salarioBase / 240) * 1.5; // 50% extra
    const totalBruto = salarioProporcional + pagoPorHorasExtras;

    // Deducciones
    const isrDeducible = totalBruto * 0.10; // Aproximado
    const afiliacionIMSS = totalBruto * 0.0625; // 6.25%
    const totalDeducciones = isrDeducible + afiliacionIMSS;
    const totalNeto = totalBruto - totalDeducciones;

    const nomina = {
      id: `NOM-${Date.now()}`,
      empleadoId,
      periodo: new Date().toISOString().split('T')[0],
      conceptos: {
        salario_proporcional: salarioProporcional,
        horas_extras: pagoPorHorasExtras,
        total_bruto: totalBruto
      },
      deducciones: {
        isr: isrDeducible,
        imss: afiliacionIMSS,
        total_deducciones: totalDeducciones
      },
      total_neto: totalNeto,
      estado: 'calculada'
    };

    logger.info(`Nómina calculada: ${nomina.id}`);
    res.json({ message: 'Nómina calculada exitosamente', nomina });
  } catch (error) {
    logger.error('Error al calcular nómina:', error);
    res.status(500).json({ error: 'Error al calcular nómina' });
  }
});

// Registrar asistencia
router.post('/asistencia', authenticateToken, authorize(['admin', 'rh']), (req, res) => {
  try {
    const { empleadoId, fecha, entrada, salida } = req.body;

    if (!empleadoId || !fecha || !entrada) {
      return res.status(400).json({ error: 'Datos incompletos' });
    }

    const registro = {
      id: Date.now(),
      empleadoId,
      fecha,
      entrada,
      salida: salida || null,
      horas_laboradas: salida ? ((new Date(salida) - new Date(entrada)) / 3600000) : null
    };

    logger.info(`Asistencia registrada para empleado ${empleadoId}`);
    res.status(201).json({ message: 'Asistencia registrada', registro });
  } catch (error) {
    logger.error('Error al registrar asistencia:', error);
    res.status(500).json({ error: 'Error al registrar asistencia' });
  }
});

module.exports = router;
