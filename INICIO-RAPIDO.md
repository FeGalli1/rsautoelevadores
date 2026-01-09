# 🚀 Inicio Rápido - RS Autoelevadores

## ✅ La página ya está funcionando!

El servidor de desarrollo está corriendo en: **http://localhost:5173**

Abre tu navegador en esa dirección para ver el sitio web.

## 📂 Estructura del Proyecto

```
rs-autoelevadores/
├── public/               # Archivos públicos (imágenes, favicon, etc.)
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Header.jsx    # Barra de navegación
│   │   ├── Footer.jsx    # Pie de página
│   │   ├── MachineCard.jsx    # Tarjeta de máquina
│   │   └── ProductCard.jsx    # Tarjeta de producto
│   ├── pages/           # Páginas principales
│   │   ├── Home.jsx     # Página de inicio
│   │   ├── Machines.jsx # Página de máquinas
│   │   ├── Catalog.jsx  # Catálogo de piezas
│   │   └── Contact.jsx  # Página de contacto
│   ├── data/            # Datos de ejemplo
│   │   └── sampleData.js # Datos adicionales para expandir
│   ├── theme.js         # Configuración de colores y estilos
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── index.html           # HTML principal con SEO
├── package.json         # Dependencias del proyecto
└── README.md           # Documentación principal
```

## 🎨 Lo que incluye el sitio:

### ✅ Componentes Principales
- **Header**: Navegación responsiva con menú hamburguesa en móvil
- **Footer**: Información de contacto y redes sociales
- **ProductCard**: Tarjetas de productos con botón de WhatsApp
- **MachineCard**: Tarjetas de máquinas para alquiler

### ✅ Páginas Completas
1. **Home** (/)
   - Hero section con imagen de fondo
   - Descripción de la empresa
   - Servicios destacados
   - Máquinas destacadas
   - Marcas con las que trabajan
   - Call-to-action

2. **Máquinas** (/machines)
   - Galería de 9 máquinas diferentes
   - Tarjetas con información detallada
   - Características técnicas
   - Diseño responsivo

3. **Catálogo** (/catalog)
   - 12 productos con especificaciones
   - Búsqueda por texto
   - Filtro por categorías
   - Botón de consulta por WhatsApp

4. **Contacto** (/contact)
   - Formulario con validación
   - Información de contacto
   - Tarjetas interactivas
   - Espacio para Google Maps

### ✅ Características Implementadas
- ✓ Diseño moderno con Material-UI
- ✓ Totalmente responsivo (móvil, tablet, desktop)
- ✓ Navegación con React Router
- ✓ Tema personalizado (azul, gris, amarillo)
- ✓ Integración con WhatsApp
- ✓ Validación de formularios
- ✓ SEO básico optimizado
- ✓ Accesibilidad (ARIA labels)
- ✓ Animaciones y transiciones
- ✓ Iconos de Material-UI

## 🔧 Próximos Pasos

### 1. Personalizar Contenido
Lee el archivo `PERSONALIZACION.md` para:
- Cambiar información de contacto
- Reemplazar imágenes
- Actualizar datos de máquinas y productos
- Configurar colores corporativos

### 2. Agregar tus Imágenes
Crea la carpeta `public/images/` y coloca tus fotos allí.

### 3. Actualizar Redes Sociales
Edita los enlaces en `src/components/Footer.jsx`

### 4. Configurar WhatsApp
Reemplaza el número de teléfono en:
- `src/components/ProductCard.jsx`
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

## 🌐 Navegar por el Sitio

Con el servidor corriendo, puedes navegar a:
- http://localhost:5173/ → Inicio
- http://localhost:5173/machines → Máquinas
- http://localhost:5173/catalog → Catálogo
- http://localhost:5173/contact → Contacto

## 📱 Probar Responsividad

1. Abre las DevTools de tu navegador (F12)
2. Haz clic en el icono de dispositivo móvil
3. Prueba diferentes tamaños de pantalla

## 🐛 Solución de Problemas

### La página no carga
- Verifica que el servidor esté corriendo (`npm run dev`)
- Revisa la consola del navegador (F12) por errores

### Errores al instalar
- Elimina `node_modules` y `package-lock.json`
- Ejecuta `npm install` nuevamente

### Cambios no se reflejan
- El Hot Module Replacement (HMR) debería actualizar automáticamente
- Si no funciona, guarda el archivo nuevamente o reinicia el servidor

## 📚 Recursos Adicionales

- [Documentación de Material-UI](https://mui.com/)
- [Documentación de React Router](https://reactrouter.com/)
- [Documentación de Vite](https://vitejs.dev/)

## 🎉 ¡Todo listo!

Tu sitio web está completo y funcionando. Solo necesitas personalizarlo con tu información real.

### Comandos útiles:
```bash
npm run dev      # Iniciar desarrollo
npm run build    # Construir para producción
npm run preview  # Previsualizar build
```

---

¿Necesitas ayuda? Revisa los archivos README.md y PERSONALIZACION.md
