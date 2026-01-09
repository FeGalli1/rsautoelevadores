# 🚜 RS Autoelevadores - Website Oficial

Sitio web corporativo de **RS Autoelevadores**, empresa líder en alquiler de autoelevadores, mantenimiento de equipos y venta de repuestos en Argentina.

## 🎯 Características

- ✅ **Diseño moderno y responsivo** con Material-UI
- ✅ **Navegación fluida** con React Router
- ✅ **Catálogo interactivo** de máquinas y productos
- ✅ **Formulario de contacto** validado
- ✅ **Integración con WhatsApp** para consultas rápidas
- ✅ **Google Maps integrado** con ubicación
- ✅ **Variables de entorno** para configuración centralizada

---

## 🛠️ Tecnologías

- **React** 19.2.0
- **Vite** 5.1.1
- **Material-UI** 7.3.6
- **React Router DOM** 7.11.0
- **Emotion** (CSS-in-JS)

---

## 🚀 Instalación y Uso

### **1. Clonar el repositorio**

```bash
git clone <repository-url>
cd rs-autoelevadores
```

### **2. Instalar dependencias**

```bash
npm install
```

### **3. Configurar variables de entorno**

```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar con tus datos reales
notepad .env  # Windows
nano .env     # Linux/Mac
```

Consulta [`ENV_CONFIG.md`](./ENV_CONFIG.md) para la documentación completa de variables.

### **4. Ejecutar en desarrollo**

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### **5. Build para producción**

```bash
npm run build
```

Los archivos optimizados se generan en la carpeta `dist/`.

### **6. Preview del build**

```bash
npm run preview
```

---

## 📂 Estructura del Proyecto

```
rs-autoelevadores/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── MachineCard.jsx
│   │   ├── AboutSection.jsx
│   │   ├── FeaturedMachines.jsx
│   │   ├── BrandsSection.jsx
│   │   ├── CTASection.jsx
│   │   └── WhatsAppButton.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Machines.jsx
│   │   ├── Catalog.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── theme.js
│   ├── App.css
│   └── index.css
├── .env.example
├── .gitignore
├── ENV_CONFIG.md
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔐 Variables de Entorno

Este proyecto utiliza **variables de entorno** para centralizar datos de contacto, URLs y configuraciones.

### **Variables principales:**

```env
VITE_COMPANY_NAME=RS Autoelevadores
VITE_CONTACT_PHONE=+54 911 1234-5678
VITE_CONTACT_EMAIL=info@rsautoelevadores.com
VITE_WHATSAPP_NUMBER=5491112345678
VITE_WHATSAPP_URL=https://wa.me/5491112345678
VITE_ADDRESS_STREET=Ruta 8, El Jacaranda
VITE_ADDRESS_CITY=B1669 Pilar, Buenos Aires
VITE_GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=...
```

📖 **Documentación completa:** [`ENV_CONFIG.md`](./ENV_CONFIG.md)

⚠️ **Importante:** Después de modificar `.env`, reinicia el servidor de desarrollo.

---

## 🎨 Tema y Diseño

### **Paleta de Colores:**

- **Primary:** `#A0153E` (Rojo corporativo)
- **Secondary:** `#2B2B2B` (Gris oscuro)
- **Background:** `#F5F5F5` (Gris claro)

### **Tipografía:**

- Font: **Roboto** (Google Fonts)
- Headings: 700-800 weight
- Body: 400-500 weight

---

## 📦 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila el proyecto para producción |
| `npm run preview` | Preview del build de producción |
| `npm run lint` | Ejecuta ESLint |

---

## 🌐 Deploy

### **Vercel (Recomendado)**

1. Importa el repositorio en Vercel
2. Configura las variables de entorno (`VITE_*`)
3. Deploy automático

### **Netlify**

```bash
npm run build
# Deploy la carpeta dist/
```

### **Otras plataformas**

Asegúrate de configurar las variables de entorno en el panel de control de tu hosting.

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto es privado y pertenece a **RS Autoelevadores**.

---

## 📞 Contacto

- **Sitio web:** [rsautoelevadores.com](https://rsautoelevadores.com) *(próximamente)*
- **Email:** info@rsautoelevadores.com
- **WhatsApp:** +54 911 1234-5678
- **Dirección:** Ruta 8, El Jacaranda, B1669 Pilar, Buenos Aires

---

Hecho con ❤️ por el equipo de **RS Autoelevadores**
