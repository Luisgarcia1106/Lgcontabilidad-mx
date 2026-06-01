# LG Contabilidad MX - Sistema Integral de Contabilidad Mexicana

Sistema completo de contabilidad que cumple con todas las normativas fiscales mexicanas (SAT, CFDI, ISR, IVA, etc.)

## 🎯 Características Principales

### Módulo Fiscal
- ✅ Generación de Comprobantes Fiscales Digitales por Internet (CFDI)
- ✅ Integración con SAT (Servicio de Administración Tributaria)
- ✅ Cálculo automático de ISR (Impuesto Sobre la Renta)
- ✅ Cálculo automático de IVA (Impuesto al Valor Agregado)
- ✅ Retenciones y traslados de impuestos
- ✅ Declaración de estímulos fiscales

### Gestión Contable
- ✅ Plan de cuentas configurable
- ✅ Registro de asientos contables
- ✅ Diario y Mayor
- ✅ Balance de comprobación
- ✅ Estados financieros (Balance General, Estado de Resultados)
- ✅ Análisis de variaciones

### Operaciones Comerciales
- ✅ Gestión de clientes y proveedores
- ✅ Emisión de facturas
- ✅ Control de recibos
- ✅ Gestión de nómina
- ✅ Inventario y almacén
- ✅ Órdenes de compra y venta

### Reportes y Análisis
- ✅ Reportes fiscales (Anexo 20, Anexo 16)
- ✅ Análisis de rentabilidad
- ✅ Flujo de caja proyectado
- ✅ Indicadores financieros
- ✅ Auditoría de cambios

### Seguridad y Cumplimiento
- ✅ Autenticación multifactor
- ✅ Control de acceso basado en roles
- ✅ Registro de auditoría
- ✅ Cifrado de datos sensibles
- ✅ Cumplimiento RGPD y normativas mexicanas

## 📋 Requisitos Legales Mexicanos Implementados

1. **NIF (Número de Identificación Fiscal)**
2. **RFC (Registro Federal de Contribuyentes)**
3. **CFDI 4.0** - Comprobante Fiscal Digital por Internet
4. **Ley del ISR** - Impuesto Sobre la Renta
5. **Ley del IVA** - Impuesto al Valor Agregado
6. **Ley de Ingresos Mercantiles**
7. **NOM (Normas Oficiales Mexicanas)** de contabilidad
8. **Retenciones del ISR y IVA**
9. **Deducciones autorizadas**
10. **Regímenes fiscales** (Personas Físicas y Morales)

## 🏗️ Arquitectura del Proyecto

```
Lgcontabilidad-mx/
├── backend/                    # API REST (Node.js/Express)
│   ├── src/
│   │   ├── models/            # Modelos de datos
│   │   ├── controllers/       # Controladores
│   │   ├── routes/            # Rutas API
│   │   ├── services/          # Lógica de negocio
│   │   ├── middleware/        # Autenticación, validación
│   │   ├── utils/             # Utilidades (cálculos, validaciones)
│   │   └── config/            # Configuración
│   ├── tests/                 # Pruebas unitarias
│   └── package.json
├── frontend/                  # Aplicación React
│   ├── src/
│   │   ├── components/        # Componentes React
│   │   ├── pages/             # Páginas
│   │   ├── services/          # Servicios API
│   │   ├── utils/             # Utilidades
│   │   ├── styles/            # Estilos
│   │   └── App.tsx
│   └── package.json
├── database/                  # Esquema y migraciones
│   ├── migrations/
│   ├── seeds/
│   └── schema.sql
├── docs/                      # Documentación
│   ├── SETUP.md
│   ├── API.md
│   ├── NORMATIVAS.md
│   └── GUIAS/
├── docker-compose.yml         # Orquestación de contenedores
├── .env.example
└── package.json
```

## 🚀 Inicio Rápido

### Prerequisitos
- Node.js 18+
- PostgreSQL 14+
- Docker (opcional)

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/Luisgarcia1106/Lgcontabilidad-mx.git
cd Lgcontabilidad-mx

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Ejecutar migraciones de base de datos
npm run db:migrate

# Iniciar servidor de desarrollo
npm run dev
```

## 🔐 Seguridad

- Autenticación JWT
- Encriptación de contraseñas (bcrypt)
- Validación de entrada en toda la aplicación
- Protección CSRF
- Rate limiting
- Logs de auditoría completos

## 📊 Tecnologías Utilizadas

### Backend
- Node.js + Express.js
- PostgreSQL
- Sequelize ORM
- JWT para autenticación
- Joi para validación

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Redux para estado global
- Axios para HTTP

### DevOps
- Docker
- Docker Compose
- GitHub Actions CI/CD

## 📝 Licencia

Licencia MIT - Libre para uso comercial

## 👤 Autor

Luis García - Lgcontabilidad-mx

## 📞 Soporte

Para reportar bugs o sugerir características, por favor crea un issue en el repositorio.

---

**Último actualizado:** Junio 2026
