# 🔐 Configuración de Variables de Entorno

Este proyecto utiliza **variables de entorno** para centralizar información sensible y configuraciones. Las variables están definidas en archivos `.env` y son accesibles mediante `import.meta.env.VITE_*` (formato de Vite).

## 📋 Variables Disponibles

### **Información de Contacto**
| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `VITE_COMPANY_NAME` | Nombre de la empresa | `RS Autoelevadores` |
| `VITE_CONTACT_PHONE` | Teléfono formateado para mostrar | `+54 911 1234-5678` |
| `VITE_CONTACT_PHONE_FORMATTED` | Igual que CONTACT_PHONE | `+54 911 1234-5678` |
| `VITE_CONTACT_PHONE_RAW` | Número sin formato (para links tel:) | `5491112345678` |
| `VITE_CONTACT_EMAIL` | Correo electrónico de contacto | `info@rsautoelevadores.com` |

### **Dirección**
| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `VITE_ADDRESS_STREET` | Calle principal | `Ruta 8, El Jacaranda` |
| `VITE_ADDRESS_CITY` | Ciudad y provincia | `B1669 Pilar, Buenos Aires` |
| `VITE_ADDRESS_FULL` | Dirección completa | `Ruta 8, El Jacaranda, B1669 Pilar, Buenos Aires` |
| `VITE_ADDRESS_SHORT` | Dirección corta para cards | `Ruta 8, El Jacaranda, Pilar` |

### **Google Maps**
| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `VITE_GOOGLE_MAPS_EMBED_URL` | URL del iframe embed de Google Maps | `https://www.google.com/maps/embed?pb=...` |
| `VITE_GOOGLE_MAPS_SEARCH_URL` | URL de búsqueda de Google Maps | `https://maps.google.com/?q=...` |

### **WhatsApp**
| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `VITE_WHATSAPP_NUMBER` | Número de WhatsApp (sin espacios) | `5491112345678` |
| `VITE_WHATSAPP_URL` | URL completa de WhatsApp | `https://wa.me/5491112345678` |
| `VITE_WHATSAPP_DEFAULT_MESSAGE` | Mensaje predeterminado | `¡Hola! Me gustaría obtener más información...` |

### **Redes Sociales (Opcional)**
| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `VITE_FACEBOOK_URL` | URL de Facebook | `https://facebook.com/rsautoelevadores` |
| `VITE_INSTAGRAM_URL` | URL de Instagram | `https://instagram.com/rsautoelevadores` |
| `VITE_LINKEDIN_URL` | URL de LinkedIn | `https://linkedin.com/company/rsautoelevadores` |

### **Configuración de la App**
| Variable | Descripción | Valores |
|----------|-------------|---------|
| `VITE_APP_ENV` | Entorno de ejecución | `development`, `production` |

---

## 🚀 Uso en Desarrollo

### **1. Configuración Inicial**

```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar con tus datos reales
notepad .env  # Windows
nano .env     # Linux/Mac
```

### **2. Valores de Desarrollo**

El archivo `.env` ya contiene valores de ejemplo para desarrollo local. Personalizalos según tus necesidades.

### **3. Reiniciar el servidor de desarrollo**

⚠️ **Importante:** Después de modificar el archivo `.env`, debes **reiniciar el servidor de Vite**:

```bash
# Detener el servidor (Ctrl+C)
# Volver a iniciarlo
npm run dev
```

---

## 📦 Uso en Producción

### **Opción 1: Archivo `.env.production`**

Crea un archivo `.env.production` con los valores de producción:

```bash
# .env.production
VITE_CONTACT_PHONE=+54 911 XXXX-XXXX
VITE_WHATSAPP_NUMBER=549XXXXXXXXXX
VITE_CONTACT_EMAIL=contacto@tudominio.com
# ... resto de variables
```

Luego ejecuta el build:

```bash
npm run build
```

### **Opción 2: Variables de Entorno del Sistema**

En servidores o plataformas de hosting (Vercel, Netlify, etc.), configura las variables en el panel de control:

**Vercel:**
1. Project Settings → Environment Variables
2. Agregar cada variable (`VITE_CONTACT_PHONE`, etc.)
3. Redeploy

**Netlify:**
1. Site Settings → Build & deploy → Environment
2. Agregar variables
3. Trigger deploy

---

## 🔍 Uso en Componentes

### **Ejemplo 1: Contact.jsx**

```jsx
const phoneNumber = import.meta.env.VITE_CONTACT_PHONE || '+54 911 1234-5678';
const email = import.meta.env.VITE_CONTACT_EMAIL || 'info@rsautoelevadores.com';
```

### **Ejemplo 2: WhatsAppButton.jsx**

```jsx
const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5491112345678';
const whatsappURL = import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/5491112345678';
```

### **Ejemplo 3: Footer.jsx**

```jsx
<Typography variant="h6">
  {import.meta.env.VITE_COMPANY_NAME || 'RS Autoelevadores'}
</Typography>
```

---

## ✅ Fallbacks

Todas las variables tienen **valores por defecto** (fallbacks) que se usan si la variable no está definida:

```jsx
import.meta.env.VITE_CONTACT_PHONE || '+54 911 1234-5678'
```

Esto garantiza que la app funcione incluso si falta alguna variable.

---

## 🛡️ Seguridad

### **¿Qué incluir en `.gitignore`?**

```gitignore
# Environment variables
.env
.env.local
.env.production
```

✅ **COMMIT:** `.env.example` (sin datos reales)  
❌ **NO COMMIT:** `.env`, `.env.production` (con datos reales)

### **Buenas Prácticas**

1. ✅ Nunca commitear archivos `.env` con datos reales
2. ✅ Usar `.env.example` como template
3. ✅ Documentar cada variable nueva en este archivo
4. ✅ Validar que todas las variables existan antes del deploy
5. ✅ Usar fallbacks para prevenir errores

---

## 🧪 Verificar Variables

Puedes crear un script para verificar que todas las variables estén configuradas:

```jsx
// src/utils/checkEnv.js
export const checkEnvVars = () => {
  const requiredVars = [
    'VITE_CONTACT_PHONE',
    'VITE_CONTACT_EMAIL',
    'VITE_WHATSAPP_NUMBER',
  ];

  const missing = requiredVars.filter(
    varName => !import.meta.env[varName]
  );

  if (missing.length > 0) {
    console.warn('⚠️ Variables de entorno faltantes:', missing);
  }
};
```

---

## 📞 Soporte

Si tenés dudas sobre cómo configurar las variables de entorno, revisá la [documentación de Vite](https://vitejs.dev/guide/env-and-mode.html).
