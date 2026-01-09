# 🚀 Guía Rápida de SEO - RS Autoelevadores

## ✅ Lo que se implementó

### **1. Sistema de SEO Nativo**
- ✅ Gestión de metadatos sin dependencias externas
- ✅ Compatible con React 19
- ✅ Actualización dinámica del DOM

### **2. Archivos Creados**

```
src/
├── utils/
│   └── seo.js              # 🔧 Utilidades SEO (updateTitle, updateDescription, etc.)
├── config/
│   └── seoConfig.js        # 📝 Configuraciones SEO por página
└── hooks/
    └── useSEO.js           # 🎣 Hook personalizado para aplicar SEO

public/
├── robots.txt              # 🤖 Directivas para crawlers
└── sitemap.xml             # 🗺️ Mapa del sitio
```

### **3. Páginas Optimizadas**

| Página | SEO | Schema | Breadcrumbs |
|--------|-----|--------|-------------|
| Home | ✅ | ✅ LocalBusiness | - |
| Machines | ✅ | ✅ + BreadcrumbList | ✅ |
| MachineDetail | ✅ (dinámico) | ✅ + BreadcrumbList | ✅ |
| Catalog | ✅ | ✅ + BreadcrumbList | ✅ |
| Contact | ✅ | ✅ + BreadcrumbList | ✅ |

---

## 🎯 Cómo Usar

### **Opción 1: Página Estática (Recomendado)**

```jsx
import { useSEOWithOrganization } from '../hooks/useSEO';
import { homeSEO } from '../config/seoConfig';

const MiPagina = () => {
  // Aplicar SEO automáticamente
  useSEOWithOrganization(homeSEO);

  return (
    <Box>
      {/* Tu contenido */}
    </Box>
  );
};
```

### **Opción 2: Página Dinámica**

```jsx
import { useSEOWithOrganization } from '../hooks/useSEO';
import { getMachineSEO } from '../config/seoConfig';
import { schemas } from '../utils/seo';

const MaquinaDetalle = () => {
  const maquina = getMaquinaData(); // Tus datos
  
  // Generar SEO dinámico
  const seo = getMachineSEO(maquina);
  
  // Breadcrumb dinámico
  const breadcrumb = schemas.breadcrumb([
    { name: 'Inicio', url: '/' },
    { name: 'Máquinas', url: '/machines' },
    { name: maquina.name, url: `/machines/${maquina.id}` },
  ]);
  
  useSEOWithOrganization(seo, breadcrumb);

  return <Box>{/* Contenido */}</Box>;
};
```

---

## 📋 Agregar Nueva Página

### **Paso 1: Configurar SEO**

Edita `src/config/seoConfig.js`:

```js
export const miNuevaPaginaSEO = {
  title: 'Título optimizado (50-60 caracteres)',
  description: 'Descripción clara y atractiva (140-160 caracteres)',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  canonical: `${BASE_URL}/mi-nueva-pagina`,
  image: `${BASE_URL}/og-mi-nueva-pagina.jpg`,
  ogType: 'website',
};
```

### **Paso 2: Implementar en Componente**

```jsx
import { useSEOWithOrganization } from '../hooks/useSEO';
import { miNuevaPaginaSEO } from '../config/seoConfig';

const MiNuevaPagina = () => {
  useSEOWithOrganization(miNuevaPaginaSEO);
  
  return <Box>{/* Contenido */}</Box>;
};
```

### **Paso 3: Actualizar Sitemap**

Edita `public/sitemap.xml`:

```xml
<url>
  <loc>https://rsautoelevadores.com/mi-nueva-pagina</loc>
  <lastmod>2025-12-19</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## 🔍 Metadatos que se Actualizan

Cada página actualiza automáticamente:

✅ `<title>` - Título de la página  
✅ `<meta name="description">` - Descripción  
✅ `<meta name="keywords">` - Keywords  
✅ `<link rel="canonical">` - URL canónica  
✅ `<meta property="og:*">` - Open Graph (Facebook)  
✅ `<meta name="twitter:*">` - Twitter Cards  
✅ `<script type="application/ld+json">` - Schema.org  

---

## 🌟 Rich Snippets Incluidos

### **LocalBusiness** (Todas las páginas)

Muestra en Google:
- 📍 Dirección
- 📞 Teléfono
- ✉️ Email
- 🕒 Horarios
- 📌 Ubicación en mapa

### **BreadcrumbList** (Páginas internas)

Muestra navegación:
```
Inicio > Máquinas > Autoelevador Diésel 3.5 Ton
```

### **Product** (Opcional para catálogo)

Muestra:
- 🏷️ Nombre del producto
- 💰 Precio
- ✅ Disponibilidad
- 🏢 Marca

---

## 📊 Keywords Principales

### **Por Tipo de Página:**

**Home:**
- alquiler de autoelevadores
- mantenimiento de autoelevadores
- repuestos autoelevadores
- Pilar, Buenos Aires

**Machines:**
- alquiler autoelevadores diesel
- alquiler autoelevadores eléctricos
- autoelevadores 2.5 toneladas
- Nissan/Toyota/Yale forklift

**Catalog:**
- repuestos para autoelevadores
- piezas autoelevadores
- repuestos Nissan/Toyota/Yale
- filtros/aceites/llantas

**Contact:**
- contacto RS Autoelevadores
- cotización autoelevadores
- presupuesto alquiler
- Pilar Buenos Aires

---

## 🛠️ Funciones Disponibles

### En `src/utils/seo.js`:

```js
updateTitle(title)              // Actualizar título
updateDescription(desc)         // Actualizar descripción
updateKeywords(keywords)        // Actualizar keywords
updateCanonical(url)           // Actualizar URL canónica
updateImage(imageUrl)          // Actualizar imagen OG
updatePageSEO(config)          // Actualizar todo de una vez
addJSONLD(schema)              // Agregar schema JSON-LD
```

### Schemas disponibles:

```js
schemas.organization           // LocalBusiness
schemas.breadcrumb(items)      // BreadcrumbList
schemas.product(data)          // Product
schemas.service(data)          // Service
```

---

## 📈 Monitoreo Post-Deploy

### **Google Search Console**

1. Verificar propiedad del sitio
2. Enviar sitemap.xml
3. Monitorear indexación
4. Revisar errores de rastreo
5. Analizar consultas de búsqueda

### **Google Analytics**

1. Instalar código de seguimiento
2. Configurar objetivos
3. Monitorear tráfico orgánico
4. Analizar comportamiento

### **Tools Recomendadas**

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [Meta Tags Inspector](https://metatags.io/)

---

## ⚠️ Importante

### **Antes de Deploy:**

1. ✅ Reemplazar URLs en `seoConfig.js` con dominio real
2. ✅ Crear imágenes Open Graph (1200x630px):
   - og-home.jpg
   - og-machines.jpg
   - og-catalog.jpg
   - og-contact.jpg
3. ✅ Actualizar coordenadas GPS si cambia ubicación
4. ✅ Verificar variables de entorno (teléfono, email)
5. ✅ Generar sitemap dinámico si hay muchos productos

### **Después de Deploy:**

1. ✅ Verificar meta tags con View Source
2. ✅ Testear Open Graph con [Facebook Debugger](https://developers.facebook.com/tools/debug/)
3. ✅ Testear Twitter Cards con [Twitter Card Validator](https://cards-dev.twitter.com/validator)
4. ✅ Enviar sitemap a Google Search Console
5. ✅ Monitorear indexación durante 7 días

---

## 🆘 Troubleshooting

### **Los metadatos no cambian:**

Verificar que el hook `useSEO` se ejecute:
```jsx
console.log('SEO aplicado:', homeSEO);
useSEOWithOrganization(homeSEO);
```

### **Schema no aparece en Google:**

1. Validar con [Rich Results Test](https://search.google.com/test/rich-results)
2. Esperar 1-2 semanas para indexación
3. Verificar que JSON-LD esté en el `<head>`

### **Títulos duplicados:**

Asegurar que cada página tenga configuración única en `seoConfig.js`.

---

## 📞 Soporte

**Documentación completa:** `SEO_DOCUMENTATION.md`  
**Configuraciones:** `src/config/seoConfig.js`  
**Utilidades:** `src/utils/seo.js`

---

✅ **SEO Implementado Correctamente** - RS Autoelevadores 2025
