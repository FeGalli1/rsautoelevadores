/**
 * Configuraciones SEO para todas las páginas del sitio
 * 
 * Cada objeto define:
 * - title: 50-60 caracteres
 * - description: 140-160 caracteres
 * - keywords: Array de keywords principales
 * - canonical: URL canónica
 */

const BASE_URL = 'https://rsautoelevadores.com';
const LOCATION = 'Pilar, Buenos Aires';

/**
 * SEO para la página Home
 */
export const homeSEO = {
  title: `RS Autoelevadores - Alquiler, Mantenimiento y Repuestos | ${LOCATION}`,
  description: `Alquiler de autoelevadores diesel y eléctricos, mantenimiento profesional y venta de repuestos en ${LOCATION}. Servicio técnico especializado para maquinaria industrial.`,
  keywords: [
    'alquiler autoelevadores',
    'autoelevadores en alquiler',
    'mantenimiento autoelevadores',
    'repuestos autoelevadores',
    'piezas maquinaria industrial',
    'autoelevadores diesel',
    'autoelevadores eléctricos',
    'Pilar Buenos Aires',
    'servicio técnico autoelevadores',
  ],
  canonical: `${BASE_URL}/`,
  image: `${BASE_URL}/og-home.jpg`,
  ogType: 'website',
};

/**
 * SEO para la página de Máquinas (Catálogo de alquiler)
 */
export const machinesSEO = {
  title: `Alquiler de Autoelevadores - Diesel y Eléctricos | RS Autoelevadores`,
  description: `Alquilá autoelevadores de 1.5 a 10 toneladas, diesel y eléctricos. Equipos de las mejores marcas: Nissan, Toyota, Yale, Clark. Servicio en ${LOCATION}.`,
  keywords: [
    'alquiler autoelevadores',
    'autoelevadores en alquiler',
    'autoelevadores diesel',
    'autoelevadores eléctricos',
    'alquiler maquinaria industrial',
    'autoelevadores 2.5 toneladas',
    'autoelevadores 5 toneladas',
    'Nissan forklift',
    'Toyota forklift',
    'Pilar Buenos Aires',
  ],
  canonical: `${BASE_URL}/machines`,
  image: `${BASE_URL}/og-machines.jpg`,
  ogType: 'website',
};

/**
 * SEO para página individual de máquina (dinámico)
 * 
 * @param {Object} machine - Datos de la máquina
 * @returns {Object} - Configuración SEO
 */
export const getMachineSEO = (machine) => {
  const { name, brand, capacity, fuelType, description } = machine;
  
  return {
    title: `${name} ${capacity} - Alquiler de Autoelevadores ${brand} | RS`,
    description: `Alquilá ${name} ${brand} de ${capacity}, ${fuelType}. ${description?.substring(0, 100) || 'Ideal para operaciones industriales'}. Servicio técnico incluido en ${LOCATION}.`,
    keywords: [
      `alquiler ${name}`,
      `${brand} ${capacity}`,
      `autoelevador ${fuelType}`,
      'alquiler autoelevadores',
      `${brand} forklift`,
      'servicio técnico',
      'mantenimiento incluido',
      LOCATION,
    ],
    canonical: `${BASE_URL}/machines/${machine.id || machine.slug}`,
    image: machine.image || `${BASE_URL}/og-machines.jpg`,
    ogType: 'product',
  };
};

/**
 * SEO para la página de Catálogo de Repuestos
 */
export const catalogSEO = {
  title: `Repuestos y Piezas para Autoelevadores - Todas las Marcas | RS`,
  description: `Venta de repuestos originales y compatibles para autoelevadores. Piezas para Nissan, Toyota, Yale, Clark, Mitsubishi. Stock permanente en ${LOCATION}.`,
  keywords: [
    'repuestos autoelevadores',
    'piezas autoelevadores',
    'repuestos maquinaria industrial',
    'repuestos Nissan',
    'repuestos Toyota',
    'repuestos Yale',
    'filtros autoelevadores',
    'aceites autoelevadores',
    'llantas autoelevadores',
    'frenos autoelevadores',
    'Pilar Buenos Aires',
  ],
  canonical: `${BASE_URL}/catalog`,
  image: `${BASE_URL}/og-catalog.jpg`,
  ogType: 'website',
};

/**
 * SEO para producto individual del catálogo (dinámico)
 * 
 * @param {Object} product - Datos del producto
 * @returns {Object} - Configuración SEO
 */
export const getProductSEO = (product) => {
  const { name, category, brand, compatibility, description } = product;
  
  return {
    title: `${name} - Repuesto para Autoelevadores ${brand || 'Universal'} | RS`,
    description: `${name} ${category}. ${compatibility ? `Compatible con ${compatibility}` : 'Compatible con múltiples marcas'}. ${description?.substring(0, 80) || 'Repuesto original y de calidad'}.`,
    keywords: [
      name,
      `repuesto ${category}`,
      `${brand || 'universal'} ${category}`,
      'repuestos autoelevadores',
      'piezas autoelevadores',
      compatibility,
      LOCATION,
    ].filter(Boolean),
    canonical: `${BASE_URL}/catalog/${product.id || product.slug}`,
    image: product.image || `${BASE_URL}/og-catalog.jpg`,
    ogType: 'product',
  };
};

/**
 * SEO para la página de Servicios
 */
export const servicesSEO = {
  title: `Mantenimiento y Reparación de Autoelevadores | RS Autoelevadores`,
  description: `Servicio técnico profesional para autoelevadores: mantenimiento preventivo, reparaciones, diagnóstico y soporte. Técnicos certificados en ${LOCATION}.`,
  keywords: [
    'mantenimiento autoelevadores',
    'reparación autoelevadores',
    'servicio técnico autoelevadores',
    'mantenimiento preventivo',
    'diagnóstico autoelevadores',
    'técnicos certificados',
    'soporte técnico',
    'Pilar Buenos Aires',
  ],
  canonical: `${BASE_URL}/services`,
  image: `${BASE_URL}/og-services.jpg`,
  ogType: 'website',
};

/**
 * SEO para la página de Contacto
 */
export const contactSEO = {
  title: `Contacto - Cotizá Alquiler y Servicios | RS Autoelevadores`,
  description: `Contactate con RS Autoelevadores en ${LOCATION}. Cotizá alquiler de autoelevadores, mantenimiento y repuestos. Atención personalizada y respuesta en 24hs.`,
  keywords: [
    'contacto RS Autoelevadores',
    'cotización autoelevadores',
    'presupuesto alquiler',
    'consulta técnica',
    'Pilar Buenos Aires',
    'WhatsApp autoelevadores',
  ],
  canonical: `${BASE_URL}/contact`,
  image: `${BASE_URL}/og-contact.jpg`,
  ogType: 'website',
};

/**
 * SEO para la página "Nosotros" / "Sobre Nosotros"
 */
export const aboutSEO = {
  title: `Sobre Nosotros - Empresa de Autoelevadores | RS Autoelevadores`,
  description: `Conocé RS Autoelevadores: más de 20 años brindando soluciones en alquiler, mantenimiento y repuestos. Equipos de primera calidad y servicio técnico especializado en ${LOCATION}.`,
  keywords: [
    'sobre RS Autoelevadores',
    'quiénes somos',
    'empresa autoelevadores',
    'historia RS Autoelevadores',
    'valores empresa',
    'misión autoelevadores',
    'Pilar Buenos Aires',
    'servicio integral',
  ],
  canonical: `${BASE_URL}/about`,
  image: `${BASE_URL}/og-about.jpg`,
  ogType: 'website',
};

/**
 * SEO para página 404
 */
export const notFoundSEO = {
  title: 'Página no encontrada - RS Autoelevadores',
  description: 'La página que buscás no existe. Visitá nuestro catálogo de autoelevadores, repuestos y servicios.',
  keywords: [],
  canonical: `${BASE_URL}/404`,
  ogType: 'website',
  robots: 'noindex, nofollow', // No indexar 404
};

/**
 * Exportar todas las configuraciones
 */
export default {
  homeSEO,
  machinesSEO,
  getMachineSEO,
  catalogSEO,
  getProductSEO,
  servicesSEO,
  aboutSEO,
  contactSEO,
  notFoundSEO,
  BASE_URL,
  LOCATION,
};
