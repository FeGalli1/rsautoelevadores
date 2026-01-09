import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updatePageSEO, addJSONLD, schemas } from '../utils/seo';

/**
 * Hook personalizado para gestionar SEO de cada página
 * 
 * @param {Object} seoConfig - Configuración SEO de la página
 * @param {Object} jsonLDSchema - Schema JSON-LD opcional
 * 
 * @example
 * useSEO(homeSEO, schemas.organization);
 */
export const useSEO = (seoConfig, jsonLDSchema = null) => {
  const location = useLocation();

  useEffect(() => {
    // Actualizar metadatos de la página
    if (seoConfig) {
      updatePageSEO(seoConfig);
    }

    // Agregar JSON-LD Schema si se proporciona
    if (jsonLDSchema) {
      addJSONLD(jsonLDSchema);
    }

    // Scroll to top al cambiar de página
    window.scrollTo(0, 0);
  }, [location.pathname, seoConfig, jsonLDSchema]);
};

/**
 * Hook para combinar schema de organización con otro schema
 * 
 * @param {Object} seoConfig - Configuración SEO
 * @param {Object} pageSchema - Schema específico de la página
 * 
 * @example
 * useSEOWithOrganization(homeSEO);
 * useSEOWithOrganization(machinesSEO, schemas.breadcrumb([...]))
 */
export const useSEOWithOrganization = (seoConfig, pageSchema = null) => {
  const combinedSchema = pageSchema 
    ? {
        '@context': 'https://schema.org',
        '@graph': [schemas.organization, pageSchema],
      }
    : schemas.organization;

  useSEO(seoConfig, combinedSchema);
};

export default useSEO;
