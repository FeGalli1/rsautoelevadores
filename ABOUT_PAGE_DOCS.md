# 🏢 Página "Nosotros" - Documentación

## 📋 Resumen

Página institucional "Sobre Nosotros" diseñada para transmitir **confianza, experiencia y profesionalismo** de RS Autoelevadores.

---

## 🎯 Objetivo de la Página

- Presentar la empresa y su trayectoria
- Explicar los servicios principales
- Reforzar credibilidad con misión y valores
- Generar conexión emocional con el cliente
- Impulsar conversión con CTA final

---

## 📐 Estructura de la Página

### **1. Hero Section** (Encabezado Impactante)

**Contenido:**
- Título: "Más que Máquinas, Soluciones Integrales"
- Subtítulo institucional
- Fondo con imagen de maquinaria industrial
- Overlay con degradado corporativo (#A0153E)

**Características:**
- ✅ Parallax effect (desktop)
- ✅ Altura: 70vh (desktop), 60vh (mobile)
- ✅ Tipografía grande y bold
- ✅ Fondo oscurecido para mejorar legibilidad

---

### **2. Sección "Quiénes Somos"**

**Layout:**
- Grid 2 columnas (desktop) / 1 columna (mobile)
- Lado izquierdo: Texto institucional
- Lado derecho: Imagen corporativa

**Contenido:**
```
- Introducción a la empresa
- Trayectoria y experiencia
- Marcas con las que trabajan
- Equipo técnico certificado
```

**Elementos Destacados:**
- **Overline:** "QUIÉNES SOMOS"
- **H2:** "Tu Socio en Equipamiento Industrial"
- **Texto institucional** en 3 párrafos (1.1rem, line-height 1.8)
- **Imagen con elevation 6** y border-radius 4

---

### **3. Sección "Qué Hacemos"**

**Layout:**
- 3 cards en grid responsive
- Desktop: 3 columnas
- Mobile: 1 columna (stack vertical)

**Servicios:**
1. 🤝 **Alquiler de Autoelevadores**
2. 🔧 **Mantenimiento y Servicio Técnico**
3. 📦 **Venta de Repuestos y Piezas**

**Características de las Cards:**
- ✅ Íconos grandes (56px) de Material-UI
- ✅ Barra superior animada (aparece en hover)
- ✅ Efecto hover: translateY(-8px) + boxShadow 6
- ✅ Border-radius: 4 (16px)
- ✅ Padding: 5 (40px)

---

### **4. Sección "Misión y Valores"**

**Misión:**
- Card destacada con gradiente corporativo
- Fondo: linear-gradient(#A0153E → #C71F4E)
- Texto blanco centrado
- Max-width: 900px

**Valores:**
Grid de 4 valores en cards:
1. 🛡️ **Compromiso**
2. ✅ **Calidad Garantizada**
3. ⚡ **Respuesta Rápida**
4. 💬 **Soporte Personalizado**

**Layout:**
- Desktop: 4 columnas
- Tablet: 2 columnas
- Mobile: 1 columna

**Características:**
- ✅ Íconos con color primary.main (40px)
- ✅ Hover: borderColor cambia a primary.main
- ✅ Altura uniforme (height: 100%)

---

### **5. Galería de Imágenes**

**Layout:**
- Grid responsive de 4 imágenes
- Desktop: 4 columnas
- Tablet: 2 columnas
- Mobile: 1 columna

**Imágenes:**
1. Taller de mantenimiento
2. Autoelevadores en operación
3. Equipo técnico trabajando
4. Repuestos y piezas

**Efectos:**
- ✅ Aspect ratio: 4/3
- ✅ Hover: scale(1.05) en container
- ✅ Hover: scale(1.1) en imagen (zoom)
- ✅ Border-radius: 3 (12px)
- ✅ Cursor pointer

---

### **6. CTA Final**

**Fondo:**
- Gradiente oscuro (#2B2B2B → #1A1A1A)
- Círculos decorativos con primary color (opacity 0.15)

**Contenido:**
- Título: "¿Listo para Trabajar Juntos?"
- Descripción invitando a contactarse
- 2 botones:
  1. **"Contactanos"** → Navega a /contact
  2. **"WhatsApp"** → Abre chat directo

**Características:**
- ✅ Botones grandes (px: 5, py: 1.8)
- ✅ Botón primario con gradiente y sombra
- ✅ Botón WhatsApp con outline blanco → hover verde #25D366

---

## 🎨 Diseño y Estilo

### **Paleta de Colores:**
- **Primary:** #A0153E (rojo corporativo)
- **Secondary:** #2B2B2B (gris oscuro)
- **Background:** #F5F5F5 (gris claro)
- **Text:** #2B2B2B / #666666

### **Tipografía:**
- **H1:** 4.5rem (desktop), 2.5rem (mobile), weight 900
- **H2:** 2.75rem (desktop), 2rem (mobile), weight 800
- **Body:** 1.1rem, line-height 1.8

### **Spacing:**
- **Section padding:** py: 8 (mobile), 12 (desktop)
- **Gaps:** 3-4 entre cards
- **Margins:** mb: 3-5 entre elementos

### **Efectos:**
- **Hover en cards:** translateY(-8px)
- **Hover en imágenes:** scale(1.05 o 1.1)
- **Transitions:** all 0.3s ease
- **Shadows:** elevation 2-6

---

## 📱 Responsive Design

### **Breakpoints:**
```
xs: 0px      - Mobile
sm: 600px    - Tablet pequeña
md: 900px    - Tablet grande / Desktop pequeño
lg: 1200px   - Desktop grande
```

### **Grid Changes:**

| Sección | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Hero | 1 col | 1 col | 1 col |
| Quiénes Somos | 2 cols | 1 col | 1 col |
| Qué Hacemos | 3 cols | 2 cols | 1 col |
| Valores | 4 cols | 2 cols | 1 col |
| Galería | 4 cols | 2 cols | 1 col |

---

## 🔍 SEO Implementado

### **Metadatos:**
```js
Title: "Sobre Nosotros - Empresa de Autoelevadores | RS Autoelevadores"
Description: "Conocé RS Autoelevadores: más de 20 años brindando soluciones en alquiler, mantenimiento y repuestos..."
Keywords: sobre RS Autoelevadores, quiénes somos, empresa autoelevadores, historia, valores, misión...
Canonical: https://rsautoelevadores.com/about
```

### **Schemas:**
- ✅ LocalBusiness (organización)
- ✅ BreadcrumbList (Inicio > Nosotros)

---

## 🛠️ Componentes Utilizados

### **Material-UI:**
- `Box`, `Container`, `Typography`
- `Button`, `Paper`, `Grid`
- `Icons`: HandshakeIcon, BuildIcon, InventoryIcon, GppGoodIcon, SpeedIcon, SupportAgentIcon, VerifiedIcon, WhatsAppIcon

### **React Router:**
- `useNavigate()` para navegación programática

### **SEO Hooks:**
- `useSEOWithOrganization()` del sistema SEO nativo
- `schemas.breadcrumb()` para migas de pan

---

## ✏️ Cómo Editar el Contenido

### **Textos Principales:**

Todo el contenido está en el archivo: `src/pages/About.jsx`

**Editar el Hero:**
```jsx
// Línea ~117-130
<Typography variant="h1">
  Más que Máquinas,
  <br />
  Soluciones Integrales
</Typography>
```

**Editar "Quiénes Somos":**
```jsx
// Línea ~172-199
<Typography variant="body1">
  RS Autoelevadores nació con el objetivo de...
</Typography>
```

**Editar Servicios:**
```jsx
// Línea ~25-50
const services = [
  {
    icon: <HandshakeIcon />,
    title: 'Alquiler de Autoelevadores',
    description: 'Ofrecemos alquiler de...',
  },
  // ...
];
```

**Editar Valores:**
```jsx
// Línea ~53-83
const values = [
  {
    icon: <GppGoodIcon />,
    title: 'Compromiso',
    description: 'Nos comprometemos con...',
  },
  // ...
];
```

**Editar Misión:**
```jsx
// Línea ~349-362
<Typography variant="h5">
  Nuestra misión es brindar soluciones integrales...
</Typography>
```

---

## 🚀 Funcionalidades

### **Navegación:**
1. **Botón "Contactanos"** → Navega a `/contact`
2. **Botón "WhatsApp"** → Abre WhatsApp con mensaje predefinido
3. **Header actualizado** → Incluye enlace "Nosotros"

### **Interactividad:**
- ✅ Hover effects en cards
- ✅ Zoom en imágenes de galería
- ✅ Smooth scroll al cambiar de página
- ✅ Botones con feedback visual

---

## 📊 Performance

### **Optimizaciones:**
- ✅ Lazy loading de imágenes (browser nativo)
- ✅ CSS-in-JS optimizado (MUI)
- ✅ Transiciones suaves (GPU accelerated)
- ✅ Aspect ratio para evitar layout shift

---

## ✅ Checklist de Implementación

- [x] Página creada (`src/pages/About.jsx`)
- [x] Ruta agregada en App.jsx (`/about`)
- [x] Enlace en Header
- [x] SEO configurado (`aboutSEO`)
- [x] Breadcrumbs implementados
- [x] Sitemap actualizado
- [x] Responsive design
- [x] Hover effects
- [x] CTAs funcionales
- [x] Sin errores de compilación

---

## 🎉 Resultado

Una página institucional profesional que:

✅ **Transmite confianza** con diseño moderno  
✅ **Comunica los valores** de forma clara  
✅ **Muestra los servicios** con íconos y descripciones  
✅ **Genera acción** con CTAs destacados  
✅ **Es 100% responsive** en todos los dispositivos  
✅ **Está optimizada para SEO** con metadatos completos  

---

## 📞 Navegación

**URL:** `/about` o `https://rsautoelevadores.com/about`

**Acceso:**
- Desde el Header: "Nosotros"
- Desde el footer (si se agrega link)
- URL directa

---

**Última actualización:** Diciembre 2025  
**Versión:** 1.0.0
