# ✅ Logos Instalados - RS Autoelevadores

## 📋 Estado Actual

He creado logos temporales de placeholder (SVG) para las siguientes marcas:

✅ Toyota
✅ Caterpillar  
✅ Hyster
✅ Yale
✅ Crown
✅ Komatsu

**Ubicación**: `public/images/logos/`

## 🎨 El Carrusel ya está Funcionando

El carrusel infinito está activo con los siguientes efectos:

- ✨ Movimiento automático suave (30 segundos por ciclo)
- 🎯 Se pausa al hacer hover
- 🎨 Logos en escala de grises que recuperan color al hover
- 📱 Totalmente responsivo
- ♾️ Loop infinito sin interrupciones

## 🔄 Reemplazar con Logos Reales

### Opción 1: Descarga Manual (Recomendada)

1. Ve a Google Imágenes
2. Busca: `"[nombre marca] logo png transparent"`
3. Descarga el logo en PNG o SVG
4. Reemplaza los archivos en `public/images/logos/`

**Nombres de archivo requeridos:**
- `toyota.png` o `toyota.svg`
- `caterpillar.png` o `caterpillar.svg`
- `hyster.png` o `hyster.svg`
- `yale.png` o `yale.svg`
- `crown.png` o `crown.svg`
- `komatsu.png` o `komatsu.svg`

### Opción 2: Sitios de Logos Gratuitos

**Wikimedia Commons**
- https://commons.wikimedia.org/
- Logos oficiales de alta calidad
- Descarga gratuita

**Seeklogo**
- https://seeklogo.com/
- Formatos PNG y SVG
- Fondo transparente

**LogoSearch**
- https://logosear.ch/
- Base de datos masiva de logos
- Vectoriales y rasterizados

### Opción 3: Herramientas de IA

Puedes generar logos profesionales usando:
- **Midjourney**: Genera logos realistas
- **DALL-E**: Crea versiones de logos
- **Adobe Firefly**: Genera logos vectoriales

## 📐 Especificaciones Técnicas

- **Formato preferido**: SVG (escala infinita)
- **Formato alternativo**: PNG con fondo transparente
- **Tamaño recomendado**: 300-500px de ancho
- **Proporción**: Mantener aspecto original
- **Peso máximo**: 100KB por archivo

## 🛠️ Si cambias los nombres de archivo

Edita `src/components/BrandsSection.jsx`:

```javascript
const brands = [
  { 
    name: 'Toyota',
    logo: '/images/logos/tu-archivo.png'  // Cambia aquí
  },
  // ... resto
];
```

## ➕ Agregar Más Marcas

Para agregar más marcas al carrusel:

1. Agrega el logo a `public/images/logos/`
2. Edita `src/components/BrandsSection.jsx`
3. Añade al array:

```javascript
const brands = [
  // ... marcas existentes
  { 
    name: 'Nueva Marca',
    logo: '/images/logos/nueva-marca.png'
  },
];
```

## 🎯 Ejemplo de Búsqueda en Google

Copia y pega en Google:

```
Toyota logo png transparent high resolution
Caterpillar logo png transparent background
Hyster forklift logo vector
Yale materials handling logo png
Crown equipment logo transparent
Komatsu logo svg vector
```

## ⚠️ Nota Legal

Asegúrate de tener permiso para usar los logos en tu sitio web comercial. Generalmente es aceptable mostrar logos de marcas con las que trabajas como distribuidor o partner autorizado.

## 🎨 Quitar Fondo de Imágenes

Si descargas un logo con fondo blanco, usa:

**Remove.bg** (Automático)
- https://www.remove.bg/
- Sube la imagen
- Descarga sin fondo

**Photopea** (Manual)
- https://www.photopea.com/
- Editor tipo Photoshop online
- Usa "Magic Wand" para seleccionar fondo
- Delete y exporta como PNG

---

## ✨ ¡El carrusel está listo!

Visita tu página para ver el carrusel en acción. Los logos temporales funcionan perfectamente mientras consigues los reales.

**Ubicación del carrusel**: Sección Home → "Marcas con las que Trabajamos"
