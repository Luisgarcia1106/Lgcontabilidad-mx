# Guía de Instalación y Configuración - LG Contabilidad MX

## 🚀 Inicio Rápido con Docker

### Prerequisitos
- Docker
- Docker Compose
- Git

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Luisgarcia1106/Lgcontabilidad-mx.git
cd Lgcontabilidad-mx
```

2. **Configurar variables de entorno**
```bash
cp .env.example .env
```

Editar `.env` con tus datos:
```
DB_PASSWORD=tu_contraseña_postgres
JWT_SECRET=tu_clave_secreta_jwt
SAT_API_KEY=tu_clave_sat
```

3. **Iniciar contenedores**
```bash
docker-compose up -d
```

4. **Verificar que todo está funcionando**
```bash
# Backend
curl http://localhost:3001/api/health

# Frontend
Abrir en navegador: http://localhost:3000
```

## 📚 Instalación Manual (Sin Docker)

### Backend

```bash
cd backend
npm install

# Crear archivo .env local
cat > .env << EOF
NODE_ENV=development
PORT=3001
DB_HOST=localhost
DB_PORT=5432
DB_NAME=lgcontabilidad_db
DB_USER=postgres
DB_PASSWORD=tu_contraseña
JWT_SECRET=tu_clave_secreta
EOF

# Iniciar servidor
npm run dev
```

### Frontend

```bash
cd frontend
npm install

# Crear archivo .env local
cat > .env << EOF
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_ENV=development
EOF

# Iniciar desarrollo
npm start
```

## 🔐 Seguridad en Producción

### Variables de entorno críticas:
```
JWT_SECRET=generar_valor_aleatorio_fuerte
DB_PASSWORD=contraseña_segura
SAT_API_KEY=obtener_del_sat
CORS_ORIGIN=https://tu-dominio.com
```

### SSL/TLS
```bash
# Usar certificados válidos en producción
# Recomendar Let's Encrypt
```

## 🗄️ Base de Datos

### Conexión PostgreSQL
```bash
# Local
psql -U postgres -d lgcontabilidad_db

# Desde Docker
docker exec -it lgcontabilidad_postgres psql -U postgres -d lgcontabilidad_db
```

### Backup
```bash
docker exec lgcontabilidad_postgres pg_dump -U postgres lgcontabilidad_db > backup.sql
```

### Restaurar
```bash
docker exec -i lgcontabilidad_postgres psql -U postgres -d lgcontabilidad_db < backup.sql
```

## 📋 API Endpoints Principales

### Autenticación
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión
- `GET /api/auth/profile` - Obtener perfil

### Contabilidad
- `POST /api/contabilidad/asientos` - Crear asiento
- `POST /api/contabilidad/facturas` - Emitir factura
- `GET /api/contabilidad/balanza` - Balanza de comprobación
- `GET /api/contabilidad/estado-resultados` - Estado de resultados

### SAT
- `GET /api/sat/obligaciones/:rfc` - Obligaciones fiscales
- `POST /api/sat/calcular-isr` - Calcular ISR
- `POST /api/sat/calcular-iva` - Calcular IVA
- `GET /api/sat/anexo20` - Generar Anexo 20

### Reportes
- `GET /api/reportes/fiscales/:tipo` - Reportes fiscales
- `GET /api/reportes/exportar/:formato/:tipo` - Exportar reportes
- `GET /api/reportes/auditoria` - Auditoría de cambios

### Ventas
- `POST /api/ventas/clientes` - Registrar cliente
- `POST /api/ventas/ordenes` - Crear orden
- `GET /api/ventas/estado-cuenta/:clienteId` - Estado de cuenta

### Nómina
- `POST /api/nomina/empleados` - Registrar empleado
- `POST /api/nomina/calcular-nomina` - Calcular nómina
- `POST /api/nomina/asistencia` - Registrar asistencia

## 🧪 Testing

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

## 🐛 Troubleshooting

### Puerto ya en uso
```bash
# Ver proceso usando puerto
lsof -i :3001
# Matar proceso
kill -9 <PID>
```

### Conexión a base de datos fallida
```bash
# Verificar servicios de Docker
docker ps

# Ver logs
docker logs lgcontabilidad_postgres
```

### Token expirado
- Hacer login nuevamente
- El token expira en 24 horas por defecto

## 📞 Soporte

Para más información, consulta la documentación en `/docs` o crea un issue en el repositorio.
