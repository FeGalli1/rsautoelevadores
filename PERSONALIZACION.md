# Guía de Personalización - RS Autoelevadores

Esta guía te ayudará a personalizar el sitio web con la información real de tu empresa.

## 📞 Actualizar Información de Contacto

### 1. Número de WhatsApp

Busca y reemplaza `5491112345678` en los siguientes archivos:

- `src/components/Footer.jsx` (línea ~58)
- `src/pages/Contact.jsx` (línea ~112)
- `src/components/ProductCard.jsx` (línea ~14)

Formato: Sin espacios ni guiones, incluye código de país.
Ejemplo: `5491155667788` para +54 9 11 5566-7788

### 2. Teléfono de Contacto

Actualiza en:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

### 3. Email

Reemplaza `info@rsautoelevadores.com` en:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

### 4. Dirección

Actualiza la dirección completa en:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

## 🖼️ Reemplazar Imágenes

### Imágenes de Máquinas

Ubicación: `src/pages/Machines.jsx` y `src/pages/Home.jsx`

Reemplaza las URLs de Unsplash con rutas a tus imágenes:

```javascript
// Antes:
image: 'https://images.unsplash.com/photo-...',

// Después (si las guardas en public/images):
image: '/images/autoelevador-diesel-35.jpg',
```

Coloca tus imágenes en: `public/images/`

### Imágenes del Catálogo

Ubicación: `src/pages/Catalog.jsx`

Sigue el mismo proceso que para las máquinas.

### Imagen del Hero (Página Principal)

Ubicación: `src/pages/Home.jsx` (línea ~68)

Reemplaza la URL de fondo en el Hero Section.

## 🏷️ Personalizar Marcas

Ubicación: `src/pages/Home.jsx` (línea ~37)

Actualiza el array de marcas con las que trabajan:

```javascript
const brands = [
  'Toyota', 'Caterpillar', 'Hyster', 'Yale', 'Crown', 'Komatsu'
];
```

## 🎨 Cambiar Colores Corporativos

Ubicación: `src/theme.js`

```javascript
palette: {
  primary: {
    main: '#1976d2', // Azul principal
  },
  secondary: {
    main: '#fdd835', // Amarillo de acento
  },
},
```

Cambia estos valores hexadecimales por los colores de tu marca.

## 📝 Actualizar Contenido de Texto

### Descripción de la Empresa

Ubicación: `src/pages/Home.jsx` (línea ~137)

### Servicios

Ubicación: `src/pages/Home.jsx` (línea ~19-31)

Edita el array `services` con tus servicios reales.

### Información de Máquinas

Ubicación: `src/pages/Machines.jsx` (línea ~7)

Edita el array `machines` con:
- Nombre del modelo
- Marca
- Descripción
- Características técnicas
- Imagen

### Información de Productos

Ubicación: `src/pages/Catalog.jsx` (línea ~17)

Edita el array `products` con:
- Nombre del producto
- Categoría
- Descripción
- Especificaciones técnicas
- Imagen

## 🌐 Redes Sociales

Ubicación: `src/components/Footer.jsx` (línea ~48-69)

Actualiza los enlaces de redes sociales:

```javascript
<IconButton href="https://facebook.com/tupagina" ...>
<IconButton href="https://instagram.com/tupagina" ...>
<IconButton href="https://linkedin.com/company/tupagina" ...>
```

## 📧 Configurar Envío de Formulario

Ubicación: `src/pages/Contact.jsx` (línea ~60)

El formulario actualmente solo muestra un mensaje de éxito en consola.

Para integrarlo con un backend:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (validateForm()) {
    try {
      // Enviar a tu API
      const response = await fetch('https://tu-api.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setOpenSnackbar(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
};
```

Alternativas sin backend:
- **Formspree**: https://formspree.io/
- **EmailJS**: https://www.emailjs.com/
- **Web3Forms**: https://web3forms.com/

## 🗺️ Agregar Google Maps

Ubicación: `src/pages/Contact.jsx` (línea ~249)

1. Obtén una API Key de Google Maps
2. Instala el paquete:
```bash
npm install @react-google-maps/api
```

3. Reemplaza el Paper gris con:
```javascript
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

<LoadScript googleMapsApiKey="TU_API_KEY">
  <GoogleMap
    mapContainerStyle={{ width: '100%', height: '400px' }}
    center={{ lat: -34.603722, lng: -58.381592 }}
    zoom={15}
  >
    <Marker position={{ lat: -34.603722, lng: -58.381592 }} />
  </GoogleMap>
</LoadScript>
```

## 🔍 SEO Avanzado

### 1. Actualizar Metaetiquetas

Ubicación: `index.html`

Edita las metaetiquetas con tu información real.

### 2. Agregar Favicon

1. Crea un favicon (16x16, 32x32, 64x64 px)
2. Guárdalo en `public/favicon.ico`
3. Actualiza en `index.html`:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

### 3. Sitemap y robots.txt

Crea `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://tudominio.com/sitemap.xml
```

## 📱 Personalizar Categorías de Productos

Ubicación: `src/pages/Catalog.jsx` (línea ~142)

Edita el array `categories` según tus categorías reales de productos.

## 🚀 Deploy (Producción)

### Opción 1: Vercel (Recomendado)
1. Crea cuenta en https://vercel.com
2. Conecta tu repositorio de GitHub
3. Deploy automático

### Opción 2: Netlify
1. Crea cuenta en https://netlify.com
2. Arrastra la carpeta `dist` después de hacer `npm run build`

### Opción 3: Hosting Tradicional
1. Ejecuta `npm run build`
2. Sube la carpeta `dist` a tu servidor

## 📞 Soporte

Si necesitas ayuda con la personalización, contacta al desarrollador.

---

¡Buena suerte con tu sitio web!
