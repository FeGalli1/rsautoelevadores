# 🔍 Documentación SEO - RS Autoelevadores

Esta documentación explica la implementación completa de SEO on-page para el sitio web de RS Autoelevadores.

---

## 📚 Índice

1. [Estructura General](#estructura-general)
2. [Metadatos por Página](#metadatos-por-página)
3. [Implementación Técnica](#implementación-técnica)
4. [Rich Snippets y Schema.org](#rich-snippets-y-schemaorg)
5. [Keywords Strategy](#keywords-strategy)
6. [Cómo Escalar](#cómo-escalar)
7. [Checklist SEO](#checklist-seo)

---

## 🏗️ Estructura General

### Archivos Creados

```
src/
├── utils/
│   └── seo.js              # Utilidades para gestionar metadatos
├── config/
│   └── seoConfig.js        # Configuraciones SEO de cada página
├── hooks/
│   └── useSEO.js           # Hook personalizado para aplicar SEO
└── pages/
    ├── Home.jsx            # ✅ SEO implementado
    ├── Machines.jsx        # ✅ SEO implementado
    ├── MachineDetail.jsx   # ✅ SEO dinámico implementado
    ├── Catalog.jsx         # ✅ SEO implementado
    └── Contact.jsx         # ✅ SEO implementado
```

### Tecnologías

- ✅ **React 19** con gestión nativa del DOM
- ✅ **React Router** para URLs amigables
- ✅ **Schema.org JSON-LD** para rich snippets
- ✅ **Open Graph** para redes sociales
- ✅ **Twitter Cards** para compartir en Twitter
- ✅ **SEO Local** con geolocalización

---

## 📄 Metadatos por Página

### **1. Home** (`/`)

**SEO Focus:** Mensaje general, servicios principales, ubicación

**Metadatos:**
```
Title: RS Autoelevadores - Alquiler, Mantenimiento y Repuestos | Pilar, Buenos Aires
Description: Alquiler de autoelevadores diesel y eléctricos, mantenimiento profesional y venta de repuestos en Pilar, Buenos Aires. Servicio técnico especializado para maquinaria industrial.
Keywords: alquiler autoelevadores, autoelevadores en alquiler, mantenimiento autoelevadores, repuestos autoelevadores, piezas maquinaria industrial, autoelevadores diesel, autoelevadores eléctricos, Pilar Buenos Aires, servicio técnico autoelevadores
Canonical: https://rsautoelevadores.com/
```

**Rich Snippets:**
- ✅ LocalBusiness Schema
- ✅ Información de contacto
- ✅ Horarios de atención
- ✅ Geolocalización

---

### **2. Máquinas** (`/machines`)

**SEO Focus:** Alquiler, tipos de máquinas, capacidades

**Metadatos:**
```
Title: Alquiler de Autoelevadores - Diesel y Eléctricos | RS Autoelevadores
Description: Alquilá autoelevadores de 1.5 a 10 toneladas, diesel y eléctricos. Equipos de las mejores marcas: Nissan, Toyota, Yale, Clark. Servicio en Pilar, Buenos Aires.
Keywords: alquiler autoelevadores, autoelevadores en alquiler, autoelevadores diesel, autoelevadores eléctricos, alquiler maquinaria industrial, autoelevadores 2.5 toneladas, autoelevadores 5 toneladas, Nissan forklift, Toyota forklift, Pilar Buenos Aires
Canonical: https://rsautoelevadores.com/machines
```

**Rich Snippets:**
- ✅ BreadcrumbList
- ✅ Organization

---

### **3. Detalle de Máquina** (`/machines/:id`)

**SEO Focus:** SEO dinámico según máquina (marca, capacidad, tipo)

**Metadatos (Ejemplo: Toyota 3.5 Ton):**
```
Title: Autoelevador Diésel 3.5 Ton - Alquiler de Autoelevadores Toyota | RS
Description: Alquilá Autoelevador Diésel Toyota de 3.5 Ton, Diesel. Autoelevador diésel de alto rendimiento Toyota, ideal para trabajos pesados en exteriores. Motor eficiente con bajo consumo de combustible. Servicio técnico incluido en Pilar, Buenos Aires.
Keywords: alquiler Autoelevador Diésel, Toyota 3.5 Ton, autoelevador Diesel, alquiler autoelevadores, Toyota forklift, servicio técnico, mantenimiento incluido, Pilar, Buenos Aires
Canonical: https://rsautoelevadores.com/machines/1
```

**Rich Snippets:**
- ✅ BreadcrumbList dinámico
- ✅ Product Schema (opcional)

---

### **4. Catálogo de Repuestos** (`/catalog`)

**SEO Focus:** Venta de piezas, compatibilidad con marcas

**Metadatos:**
```
Title: Repuestos y Piezas para Autoelevadores - Todas las Marcas | RS
Description: Venta de repuestos originales y compatibles para autoelevadores. Piezas para Nissan, Toyota, Yale, Clark, Mitsubishi. Stock permanente en Pilar, Buenos Aires.
Keywords: repuestos autoelevadores, piezas autoelevadores, repuestos maquinaria industrial, repuestos Nissan, repuestos Toyota, repuestos Yale, filtros autoelevadores, aceites autoelevadores, llantas autoelevadores, frenos autoelevadores, Pilar Buenos Aires
Canonical: https://rsautoelevadores.com/catalog
```

**Rich Snippets:**
- ✅ BreadcrumbList
- ✅ Organization

---

### **5. Contacto** (`/contact`)

**SEO Focus:** SEO local, cotización, ubicación

**Metadatos:**
```
Title: Contacto - Cotizá Alquiler y Servicios | RS Autoelevadores
Description: Contactate con RS Autoelevadores en Pilar, Buenos Aires. Cotizá alquiler de autoelevadores, mantenimiento y repuestos. Atención personalizada y respuesta en 24hs.
Keywords: contacto RS Autoelevadores, cotización autoelevadores, presupuesto alquiler, consulta técnica, Pilar Buenos Aires, WhatsApp autoelevadores
Canonical: https://rsautoelevadores.com/contact
```

**Rich Snippets:**
- ✅ BreadcrumbList
- ✅ Organization con información de contacto

---

## 🛠️ Implementación Técnica

### **Método 1: Hook `useSEO`**

Para páginas estáticas:

```jsx
import { useSEOWithOrganization } from '../hooks/useSEO';
import { homeSEO } from '../config/seoConfig';

const Home = () => {
  // Aplicar SEO
  useSEOWithOrganization(homeSEO);

  return (
    <Box>
      {/* Contenido */}
    </Box>
  );
};
```

### **Método 2: SEO Dinámico**

Para páginas con contenido dinámico:

```jsx
import { useSEOWithOrganization } from '../hooks/useSEO';
import { getMachineSEO } from '../config/seoConfig';
import { schemas } from '../utils/seo';

const MachineDetail = () => {
  const { id } = useParams();
  const machine = getMachineData(id);

  // SEO dinámico
  const machineSEO = getMachineSEO(machine);
  
  // Breadcrumb dinámico
  const breadcrumbSchema = schemas.breadcrumb([
    { name: 'Inicio', url: '/' },
    { name: 'Máquinas', url: '/machines' },
    { name: machine.name, url: `/machines/${id}` },
  ]);

  useSEOWithOrganization(machineSEO, breadcrumbSchema);

  return <Box>{/* Contenido */}</Box>;
};
```

### **Método 3: Actualización Manual**

Si necesitás control total:

```jsx
import { updatePageSEO, addJSONLD, schemas } from '../utils/seo';

useEffect(() => {
  updatePageSEO({
    title: 'Mi título personalizado',
    description: 'Mi descripción',
    keywords: ['keyword1', 'keyword2'],
    canonical: 'https://rsautoelevadores.com/mi-pagina',
  });

  addJSONLD(schemas.organization);
}, []);
```

---

## 🌟 Rich Snippets y Schema.org

### **LocalBusiness Schema** (Todas las páginas)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "RS Autoelevadores",
  "description": "Alquiler de autoelevadores...",
  "url": "https://rsautoelevadores.com",
  "telephone": "+54 911 1234-5678",
  "email": "info@rsautoelevadores.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ruta 8, El Jacaranda",
    "addressLocality": "Pilar",
    "addressRegion": "Buenos Aires",
    "postalCode": "B1669",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -34.452461,
    "longitude": -58.850091
  }
}
```

### **BreadcrumbList Schema**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://rsautoelevadores.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Máquinas",
      "item": "https://rsautoelevadores.com/machines"
    }
  ]
}
```

### **Product Schema** (Catálogo)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Horquillas Forjadas",
  "description": "Horquillas forjadas de alta resistencia...",
  "image": "https://rsautoelevadores.com/products/horquillas.jpg",
  "brand": {
    "@type": "Brand",
    "name": "Universal"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "ARS",
    "price": "45000"
  }
}
```

---

## 🎯 Keywords Strategy

### **Keywords Principales** (Alta prioridad)

1. **Alquiler de autoelevadores**
2. **Autoelevadores en alquiler**
3. **Mantenimiento de autoelevadores**
4. **Repuestos para autoelevadores**
5. **Servicio técnico de autoelevadores**

### **Keywords Secundarias**

- Autoelevadores diesel
- Autoelevadores eléctricos
- Piezas para maquinaria industrial
- Alquiler maquinaria industrial
- Repuestos Nissan / Toyota / Yale

### **Keywords Long-Tail** (SEO Local)

- Alquiler de autoelevadores en Pilar
- Mantenimiento de autoelevadores en Buenos Aires
- Repuestos para autoelevadores en Pilar
- Servicio técnico autoelevadores Pilar Buenos Aires

### **Distribución por Página**

| Página | Keyword Principal | Variaciones |
|--------|-------------------|-------------|
| Home | alquiler de autoelevadores | + ubicación |
| Machines | alquiler autoelevadores diesel/eléctricos | + capacidad + marca |
| MachineDetail | [marca] [capacidad] [tipo] | + alquiler |
| Catalog | repuestos autoelevadores | + marca + tipo pieza |
| Contact | contacto + cotización | + ubicación |

---

## 📈 Cómo Escalar

### **1. Agregar Nueva Página**

**Paso 1:** Crear configuración SEO en `src/config/seoConfig.js`

```js
export const nuevaPaginaSEO = {
  title: 'Título de la nueva página (50-60 caracteres)',
  description: 'Descripción clara y concisa (140-160 caracteres)',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  canonical: `${BASE_URL}/nueva-pagina`,
  image: `${BASE_URL}/og-nueva-pagina.jpg`,
  ogType: 'website',
};
```

**Paso 2:** Implementar en el componente

```jsx
import { useSEOWithOrganization } from '../hooks/useSEO';
import { nuevaPaginaSEO } from '../config/seoConfig';

const NuevaPagina = () => {
  useSEOWithOrganization(nuevaPaginaSEO);
  return <Box>{/* Contenido */}</Box>;
};
```

### **2. Agregar Producto Dinámico**

**Paso 1:** Crear función generadora en `seoConfig.js`

```js
export const getNuevoProductoSEO = (producto) => ({
  title: `${producto.nombre} - ${producto.categoria} | RS`,
  description: `${producto.descripcion.substring(0, 150)}...`,
  keywords: [producto.nombre, producto.categoria, 'RS Autoelevadores'],
  canonical: `${BASE_URL}/productos/${producto.slug}`,
});
```

**Paso 2:** Usar en el componente

```jsx
const ProductoDetalle = () => {
  const producto = getProducto();
  const seo = getNuevoProductoSEO(producto);
  useSEOWithOrganization(seo);
  // ...
};
```

### **3. Agregar Nuevo Schema**

**Paso 1:** Definir schema en `src/utils/seo.js`

```js
export const schemas = {
  // ... schemas existentes
  
  nuevoSchema: (datos) => ({
    '@context': 'https://schema.org',
    '@type': 'TipoSchema',
    name: datos.nombre,
    // ...propiedades
  }),
};
```

**Paso 2:** Usar en componente

```jsx
import { schemas } from '../utils/seo';

const miSchema = schemas.nuevoSchema(misDatos);
useSEOWithOrganization(seoConfig, miSchema);
```

---

## ✅ Checklist SEO

### **Antes de Deploy**

- [ ] Todas las páginas tienen título único
- [ ] Todas las descriptions son únicas (140-160 caracteres)
- [ ] URLs canónicas configuradas correctamente
- [ ] Open Graph configurado en todas las páginas
- [ ] Twitter Cards configuradas
- [ ] Imágenes OG creadas (1200x630px)
- [ ] JSON-LD schema implementado
- [ ] Breadcrumbs en páginas internas
- [ ] robots.txt creado
- [ ] sitemap.xml generado
- [ ] URLs amigables (sin parámetros raros)
- [ ] Links internos entre páginas
- [ ] Todas las imágenes tienen alt text
- [ ] Velocidad de carga optimizada
- [ ] Responsive en todos los dispositivos

### **SEO Local**

- [ ] Dirección física en footer
- [ ] Teléfono y email visibles
- [ ] Google My Business configurado
- [ ] Schema LocalBusiness implementado
- [ ] Geolocalización en meta tags
- [ ] Mapa de Google Maps integrado

### **Monitoreo Post-Launch**

- [ ] Google Search Console configurado
- [ ] Google Analytics instalado
- [ ] Revisar indexación (site:rsautoelevadores.com)
- [ ] Verificar errores en Search Console
- [ ] Monitorear posiciones de keywords
- [ ] Revisar CTR y bounce rate
- [ ] Actualizar content regularmente

---

## 🚀 Próximos Pasos Recomendados

1. **Crear `robots.txt`** en `/public/robots.txt`
2. **Generar `sitemap.xml`** automáticamente
3. **Optimizar imágenes** con lazy loading
4. **Implementar AMP** (opcional)
5. **Blog section** para content marketing
6. **FAQ Schema** en página de contacto
7. **Review Schema** para testimonios
8. **Video Schema** para demos de productos

---

## 📞 Contacto para Soporte

Si necesitás ajustar el SEO o agregar nuevas funcionalidades, revisá esta documentación y los archivos en `/src/utils/seo.js` y `/src/config/seoConfig.js`.

---

**Última actualización:** Diciembre 2025  
**Versión:** 1.0.0
