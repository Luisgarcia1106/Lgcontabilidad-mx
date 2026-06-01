# 🚀 GUÍA DE INICIO RÁPIDO - LG Contabilidad MX

## **Paso 1: Descargar el Proyecto (2 minutos)**

### En Windows:
1. Abre **PowerShell** o **Cmd**
2. Copia y pega esto:
```bash
git clone https://github.com/Luisgarcia1106/Lgcontabilidad-mx.git
cd Lgcontabilidad-mx
```

### En Mac/Linux:
1. Abre **Terminal**
2. Ejecuta:
```bash
git clone https://github.com/Luisgarcia1106/Lgcontabilidad-mx.git
cd Lgcontabilidad-mx
```

---

## **Paso 2: Configurar Variables de Entorno (1 minuto)**

### Windows (PowerShell):
```bash
Copy-Item .env.example .env
```

### Mac/Linux:
```bash
cp .env.example .env
```

**Tu archivo `.env` se vería así:**
```
NODE_ENV=development
PORT=3001
DB_HOST=localhost
DB_PORT=5432
DB_NAME=lgcontabilidad_db
DB_USER=postgres
DB_PASSWORD=postgres
JWT_SECRET=tu_clave_super_secreta_123
```

---

## **Paso 3: OPCIÓN A - Iniciar con Docker (Recomendado) - 3 minutos**

### **Requisitos previos:**
- Descargar e instalar **Docker Desktop** desde: https://www.docker.com/products/docker-desktop
- Después de instalar, abre Docker Desktop y espera a que inicie

### **Comandos:**
```bash
# Desde la carpeta Lgcontabilidad-mx
docker-compose up -d
```

**Espera 30-60 segundos mientras se descargan las imágenes...**

✅ **¡Listo!** Tu aplicación está corriendo:
- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:3001/api/health
- **Base de Datos:** PostgreSQL en localhost:5432

---

## **Paso 3: OPCIÓN B - Sin Docker (Manual) - 10 minutos**

### **Requisitos previos:**
1. **Node.js 18+** - Descarga desde: https://nodejs.org/
2. **PostgreSQL** - Descarga desde: https://www.postgresql.org/download/
3. Abre 2 terminales

### **Terminal 1 - Backend:**
```bash
cd backend
npm install
npm run dev
```

**Debe decir:** `🚀 Backend Server corriendo en puerto 3001`

### **Terminal 2 - Frontend:**
```bash
cd frontend
npm install
npm start
```

**Se abrirá automáticamente:** http://localhost:3000

---

## **Paso 4: Crear tu Primera Cuenta (2 minutos)**

### Abre en tu navegador:
```
http://localhost:3000
```

### Verás la pantalla de Login. Haz clic en **"Registrarse"**

### Rellena así:
```
Email:       admin@empresa.com
Contraseña:  Contraseña123
Nombre:      Luis
Apellido:    García
RFC:         GARL890101ABC
```

✅ **¡Cuenta creada!**

---

## **Paso 5: Inicia Sesión**

### Ahora usa:
```
Email:    admin@empresa.com
Password: Contraseña123
```

✅ **¡Dentro de la aplicación!**

---

## **Paso 6: Prueba la Funcionalidad (5 minutos)**

### **6.1 Crear un Asiento Contable:**
1. Haz clic en **"Contabilidad"** → **"Asientos"**
2. Rellena:
   - Fecha: (hoy)
   - Descripción: "Compra de equipo"
   - Cuenta Débito: "1001" (Bancos) - Monto: $5,000
   - Cuenta Crédito: "5001" (Activos) - Monto: $5,000
3. Click **"Guardar"**

✅ **Asiento creado!**

### **6.2 Ver Balanza de Comprobación:**
1. Haz clic en **"Reportes"** → **"Balanza de Comprobación"**
2. Verás todas tus cuentas balanceadas

### **6.3 Calcular Impuestos:**
1. Haz clic en **"SAT"** → **"Calcular ISR"**
2. Ingresa monto: $100,000
3. Verás el cálculo automático del ISR

### **6.4 Emitir Factura:**
1. Haz clic en **"Contabilidad"** → **"Emitir Factura"**
2. Rellena datos del cliente y productos
3. Se genera automáticamente con CFDI 4.0

---

## **Paso 7: Ver tu Base de Datos (Opcional)**

### Si usas Docker:
```bash
# Conectar a PostgreSQL
docker exec -it lgcontabilidad_postgres psql -U postgres -d lgcontabilidad_db
```

### Si instalaste PostgreSQL localmente:
```bash
psql -U postgres -d lgcontabilidad_db
```

---

## **Troubleshooting - Solucionar Problemas**

### **❌ Puerto 3000 o 3001 ya en uso:**

**Windows:**
```bash
netstat -ano | findstr :3001
taskkill /PID <NUMERO> /F
```

**Mac/Linux:**
```bash
lsof -i :3001
kill -9 <PID>
```

### **❌ Docker no inicia:**
```bash
# Detener e iniciar de nuevo
docker-compose down
docker-compose up -d
```

### **❌ Error de base de datos:**
```bash
# Ver logs de PostgreSQL
docker logs lgcontabilidad_postgres
```

### **❌ npm install falla:**
```bash
# Limpiar cache
npm cache clean --force
npm install
```

---

## **Comandos Útiles**

### **Ver qué está corriendo:**
```bash
# Con Docker
docker ps

# Sin Docker - en otra terminal
npm list
```

### **Detener la aplicación:**
```bash
# Con Docker
docker-compose down

# Sin Docker - presiona Ctrl + C en ambas terminales
```

### **Ver logs del backend:**
```bash
# Con Docker
docker logs -f lgcontabilidad_backend

# Sin Docker - verás en la terminal donde ejecutaste npm run dev
```

### **Entrar a la base de datos:**
```bash
# Con Docker
docker exec -it lgcontabilidad_postgres psql -U postgres

# Sin Docker
psql -U postgres
```

---

## **API Endpoints para Probar**

### Puedes probar con **Postman** o **Insomnia**

Descarga gratis: https://www.postman.com/downloads/

### **1. Registrarse:**
```
POST http://localhost:3001/api/auth/register

Body (JSON):
{
  "email": "contador@empresa.com",
  "password": "Segura123",
  "nombre": "Juan",
  "apellido": "Pérez",
  "rfc": "PERJ890101ABC"
}
```

### **2. Login:**
```
POST http://localhost:3001/api/auth/login

Body (JSON):
{
  "email": "contador@empresa.com",
  "password": "Segura123"
}

Respuesta:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### **3. Ver tu Perfil:**
```
GET http://localhost:3001/api/auth/profile

Headers:
Authorization: Bearer <TU_TOKEN_AQUI>
```

### **4. Calcular ISR:**
```
POST http://localhost:3001/api/sat/calcular-isr

Headers:
Authorization: Bearer <TU_TOKEN>

Body (JSON):
{
  "ingresoGravable": 500000,
  "tipoContribuyente": "PF"
}
```

### **5. Calcular IVA:**
```
POST http://localhost:3001/api/sat/calcular-iva

Headers:
Authorization: Bearer <TU_TOKEN>

Body (JSON):
{
  "monto": 10000,
  "tipo": "normal"
}
```

### **6. Ver Balanza de Comprobación:**
```
GET http://localhost:3001/api/contabilidad/balanza

Headers:
Authorization: Bearer <TU_TOKEN>
```

### **7. Ver Estado de Resultados:**
```
GET http://localhost:3001/api/contabilidad/estado-resultados

Headers:
Authorization: Bearer <TU_TOKEN>
```

---

## **Checklist de Verificación**

- [ ] Descargué el proyecto
- [ ] Configuré el .env
- [ ] Inicié Docker o Node/PostgreSQL
- [ ] Accedí a http://localhost:3000
- [ ] Creé mi cuenta
- [ ] Inicié sesión
- [ ] Probé crear un asiento contable
- [ ] Vi la balanza de comprobación
- [ ] Calculé un impuesto (ISR/IVA)

✅ **¡Felicidades! Ya estás usando LG Contabilidad MX**

---

## **Próximos Pasos**

1. **Explora los módulos:** Ventas, Nómina, Reportes
2. **Leer documentación:** `/docs/NORMATIVAS.md`
3. **Agregar más empresas/usuarios**
4. **Integrar con SAT** (requiere credenciales)
5. **Personalizar** según tus necesidades

---

## **¿Necesitas Ayuda?**

- **Documentación:** Ver `/docs` en el proyecto
- **Issues:** Crea un issue en GitHub
- **API Docs:** Completa en `/docs/API.md`

¡**¡Bienvenido a LG Contabilidad MX!**🎉
