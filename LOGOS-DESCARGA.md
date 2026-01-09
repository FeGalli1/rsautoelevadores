# Guía de Descarga de Logos para RS Autoelevadores

Esta guía te ayudará a obtener los logos de las marcas con las que trabajas.

## 📥 Opción 1: Descarga Manual (Recomendado)

### 1. Toyota
- Busca en Google: "Toyota logo png transparent"
- Sitio oficial: https://www.toyota.com/
- Descarga y guarda como: `public/images/logos/toyota.png`

### 2. Caterpillar
- Busca en Google: "Caterpillar logo png transparent"
- Sitio oficial: https://www.cat.com/
- Descarga y guarda como: `public/images/logos/caterpillar.png`

### 3. Hyster
- Busca en Google: "Hyster logo png transparent"
- Sitio oficial: https://www.hyster.com/
- Descarga y guarda como: `public/images/logos/hyster.png`

### 4. Yale
- Busca en Google: "Yale forklift logo png transparent"
- Sitio oficial: https://www.yale.com/
- Descarga y guarda como: `public/images/logos/yale.png`

### 5. Crown
- Busca en Google: "Crown forklift logo png transparent"
- Sitio oficial: https://www.crown.com/
- Descarga y guarda como: `public/images/logos/crown.png`

### 6. Komatsu
- Busca en Google: "Komatsu logo png transparent"
- Sitio oficial: https://www.komatsu.com/
- Descarga y guarda como: `public/images/logos/komatsu.png`

## 📥 Opción 2: Sitios de Logos Gratuitos

Puedes buscar logos en estos sitios:

1. **Wikimedia Commons**
   - https://commons.wikimedia.org/
   - Busca: "Toyota logo", "Caterpillar logo", etc.
   - Descarga en formato PNG o SVG

2. **Brands of the World**
   - https://www.brandsoftheworld.com/
   - Logos vectoriales de alta calidad
   - Formato SVG (recomendado)

3. **Seeklogo**
   - https://seeklogo.com/
   - Gran variedad de logos
   - Formatos PNG y SVG disponibles

## 📐 Especificaciones Recomendadas

- **Formato**: PNG con fondo transparente (o SVG)
- **Tamaño**: 300-500px de ancho
- **Proporción**: Mantener aspecto original del logo
- **Peso**: Menos de 100KB por logo

## 🎨 Preparar los Logos

Si los logos no tienen fondo transparente:

1. Usa una herramienta online como:
   - https://www.remove.bg/ (Quitar fondo automáticamente)
   - https://www.photopea.com/ (Editor tipo Photoshop online)

2. O usa un editor de imágenes como GIMP (gratuito)

## 📝 Después de Descargar

Una vez que tengas todos los logos en `public/images/logos/`, el carrusel los mostrará automáticamente.

Estructura esperada:
```
public/
  images/
    logos/
      toyota.png
      caterpillar.png
      hyster.png
      yale.png
      crown.png
      komatsu.png
```

## 🔄 Actualizar el Componente

Los logos ya están configurados en `src/components/BrandsSection.jsx`. Solo asegúrate de que los nombres de archivo coincidan.

Si necesitas cambiar los nombres, edita el array en BrandsSection.jsx:

```javascript
const brands = [
  { 
    name: 'Toyota',
    logo: '/images/logos/toyota.png'
  },
  // ... etc
];
```

---

**Nota Legal**: Asegúrate de tener permiso para usar los logos de las marcas en tu sitio web comercial. Generalmente, es aceptable mostrar logos de marcas con las que trabajas, pero verifica las políticas de cada marca.
