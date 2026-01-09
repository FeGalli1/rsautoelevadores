/**
 * SEO Manager - Gestión de metadatos dinámicos sin dependencias externas
 * 
 * Esta utilidad maneja todos los metadatos SEO del sitio de forma nativa,
 * actualizando el DOM directamente para cada página.
 */

/**
 * Configuración SEO por defecto del sitio
 */
const DEFAULT_SEO = {
  siteName: 'RS Autoelevadores',
  siteUrl: 'https://rsautoelevadores.com',
  defaultImage: 'https://rsautoelevadores.com/og-image.jpg',
  locale: 'es_AR',
  twitterHandle: '@rsautoelevadores',
  businessLocation: 'Pilar, Buenos Aires',
};

/**
 * Actualiza el título de la página
 */
export const updateTitle = (title) => {
  document.title = title;
  
  // Open Graph
  updateMetaTag('property', 'og:title', title);
  
  // Twitter
  updateMetaTag('name', 'twitter:title', title);
};

/**
 * Actualiza la descripción meta
 */
export const updateDescription = (description) => {
  updateMetaTag('name', 'description', description);
  updateMetaTag('property', 'og:description', description);
  updateMetaTag('name', 'twitter:description', description);
};

/**
 * Actualiza las keywords
 */
export const updateKeywords = (keywords) => {
  if (Array.isArray(keywords)) {
    keywords = keywords.join(', ');
  }
  updateMetaTag('name', 'keywords', keywords);
};

/**
 * Actualiza la URL canónica
 */
export const updateCanonical = (url) => {
  // Canonical link
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
  
  // Open Graph URL
  updateMetaTag('property', 'og:url', url);
  
  // Twitter URL
  updateMetaTag('name', 'twitter:url', url);
};

/**
 * Actualiza la imagen para redes sociales
 */
export const updateImage = (imageUrl, width = 1200, height = 630) => {
  const fullUrl = imageUrl.startsWith('http') ? imageUrl : `${DEFAULT_SEO.siteUrl}${imageUrl}`;
  
  updateMetaTag('property', 'og:image', fullUrl);
  updateMetaTag('property', 'og:image:width', width.toString());
  updateMetaTag('property', 'og:image:height', height.toString());
  updateMetaTag('name', 'twitter:image', fullUrl);
};

/**
 * Actualiza el tipo de Open Graph
 */
export const updateOGType = (type = 'website') => {
  updateMetaTag('property', 'og:type', type);
};

/**
 * Actualiza robots meta tag
 */
export const updateRobots = (content = 'index, follow') => {
  updateMetaTag('name', 'robots', content);
};

/**
 * Función auxiliar para actualizar meta tags
 */
const updateMetaTag = (attribute, key, content) => {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
};

/**
 * Función principal para actualizar todos los metadatos de una página
 * 
 * @param {Object} seoData - Objeto con configuración SEO
 * @param {string} seoData.title - Título de la página (50-60 caracteres)
 * @param {string} seoData.description - Descripción (140-160 caracteres)
 * @param {string|string[]} seoData.keywords - Keywords separadas por coma o array
 * @param {string} seoData.canonical - URL canónica
 * @param {string} seoData.image - URL de imagen para OG
 * @param {string} seoData.ogType - Tipo de Open Graph (website, article, product)
 * @param {string} seoData.robots - Directivas para robots (index,follow / noindex,nofollow)
 */
export const updatePageSEO = ({
  title,
  description,
  keywords,
  canonical,
  image,
  ogType = 'website',
  robots = 'index, follow',
}) => {
  if (title) updateTitle(title);
  if (description) updateDescription(description);
  if (keywords) updateKeywords(keywords);
  if (canonical) updateCanonical(canonical);
  if (image) updateImage(image);
  
  updateOGType(ogType);
  updateRobots(robots);
  
  // Siempre actualizar Open Graph site_name y locale
  updateMetaTag('property', 'og:site_name', DEFAULT_SEO.siteName);
  updateMetaTag('property', 'og:locale', DEFAULT_SEO.locale);
};

/**
 * Función para agregar JSON-LD Schema (Rich Snippets)
 */
export const addJSONLD = (schema) => {
  // Remover schema anterior si existe
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Agregar nuevo schema
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Schema predefinidos para diferentes tipos de páginas
 */
export const schemas = {
  /**
   * Schema para la organización (usar en todas las páginas)
   */
  organization: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'RS Autoelevadores',
    description: 'Alquiler de autoelevadores, mantenimiento profesional y venta de repuestos en Pilar, Buenos Aires.',
    url: DEFAULT_SEO.siteUrl,
    logo: `${DEFAULT_SEO.siteUrl}/logo.png`,
    image: DEFAULT_SEO.defaultImage,
    telephone: import.meta.env.VITE_CONTACT_PHONE || '+54 911 1234-5678',
    email: import.meta.env.VITE_CONTACT_EMAIL || 'info@rsautoelevadores.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: import.meta.env.VITE_ADDRESS_STREET || 'Ruta 8, El Jacaranda',
      addressLocality: 'Pilar',
      addressRegion: 'Buenos Aires',
      postalCode: 'B1669',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -34.452461,
      longitude: -58.850091,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '13:00',
      },
    ],
    sameAs: [
      // Agregar redes sociales cuando estén disponibles
      // 'https://www.facebook.com/rsautoelevadores',
      // 'https://www.instagram.com/rsautoelevadores',
    ],
  },

  /**
   * Schema para breadcrumbs (migas de pan)
   */
  breadcrumb: (items) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${DEFAULT_SEO.siteUrl}${item.url}`,
    })),
  }),

  /**
   * Schema para productos (catálogo de repuestos)
   */
  product: (product) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: product.brand || 'Compatible con múltiples marcas',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'ARS',
      price: product.price,
    },
  }),

  /**
   * Schema para servicios
   */
  service: (service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: DEFAULT_SEO.siteName,
    },
    areaServed: {
      '@type': 'City',
      name: 'Pilar',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Buenos Aires',
        addressCountry: 'AR',
      },
    },
  }),
};

export default {
  updateTitle,
  updateDescription,
  updateKeywords,
  updateCanonical,
  updateImage,
  updatePageSEO,
  addJSONLD,
  schemas,
  DEFAULT_SEO,
};
