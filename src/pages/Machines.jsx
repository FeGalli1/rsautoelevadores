import { Box, Container, Typography } from '@mui/material';
import MachineCard from '../components/MachineCard';
import { useSEOWithOrganization } from '../hooks/useSEO';
import { machinesSEO } from '../config/seoConfig';
import { schemas } from '../utils/seo';

const Machines = () => {
  // Breadcrumb para SEO
  const breadcrumbSchema = schemas.breadcrumb([
    { name: 'Inicio', url: '/' },
    { name: 'Máquinas', url: '/machines' },
  ]);

  // Aplicar SEO con breadcrumbs
  useSEOWithOrganization(machinesSEO, breadcrumbSchema);

  const machines = [
    {
      id: 1,
      name: 'Autoelevador Diésel 3.5 Ton',
      brand: 'Toyota',
      image: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=500&h=400&fit=crop',
      description: 'Autoelevador diésel de alto rendimiento, ideal para trabajos pesados en exteriores.',
      features: [
        'Capacidad de carga: 3500 kg',
        'Altura máxima de elevación: 4.5 m',
        'Motor diésel eficiente',
        'Neumáticos todo terreno',
      ],
    },
    {
      id: 2,
      name: 'Autoelevador Eléctrico 2.5 Ton',
      brand: 'Yale',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=400&fit=crop',
      description: 'Autoelevador eléctrico silencioso, perfecto para uso en interiores y ambientes cerrados.',
      features: [
        'Capacidad de carga: 2500 kg',
        'Altura máxima de elevación: 4.0 m',
        'Cero emisiones',
        'Bajo nivel de ruido',
      ],
    },
    {
      id: 3,
      name: 'Apilador Eléctrico',
      brand: 'Crown',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&h=400&fit=crop',
      description: 'Apilador eléctrico compacto, solución eficiente para almacenes y depósitos.',
      features: [
        'Capacidad de carga: 1500 kg',
        'Altura máxima de elevación: 3.5 m',
        'Diseño compacto',
        'Fácil maniobrabilidad',
      ],
    },
    {
      id: 4,
      name: 'Autoelevador GLP 2.0 Ton',
      brand: 'Hyster',
      image: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=500&h=400&fit=crop',
      description: 'Autoelevador a gas licuado, versátil para uso interior y exterior.',
      features: [
        'Capacidad de carga: 2000 kg',
        'Altura máxima de elevación: 3.5 m',
        'Bajo costo operativo',
        'Versatilidad de uso',
      ],
    },
    {
      id: 5,
      name: 'Autoelevador Diésel 5.0 Ton',
      brand: 'Caterpillar',
      image: 'https://images.unsplash.com/photo-1581092160607-ee67e4cca44b?w=500&h=400&fit=crop',
      description: 'Autoelevador de alta capacidad para cargas muy pesadas.',
      features: [
        'Capacidad de carga: 5000 kg',
        'Altura máxima de elevación: 5.0 m',
        'Potencia superior',
        'Construcción robusta',
      ],
    },
    {
      id: 6,
      name: 'Transpaleta Eléctrica',
      brand: 'Toyota',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&h=400&fit=crop',
      description: 'Transpaleta eléctrica para movimiento ágil de pallets.',
      features: [
        'Capacidad de carga: 2000 kg',
        'Diseño ergonómico',
        'Batería de larga duración',
        'Ideal para distancias cortas',
      ],
    },
    {
      id: 7,
      name: 'Autoelevador Retráctil',
      brand: 'Yale',
      image: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=500&h=400&fit=crop',
      description: 'Autoelevador retráctil para optimización de espacios en almacenes.',
      features: [
        'Capacidad de carga: 1800 kg',
        'Altura máxima de elevación: 8.0 m',
        'Pasillos estrechos',
        'Máxima optimización de espacio',
      ],
    },
    {
      id: 8,
      name: 'Apilador Manual',
      brand: 'Crown',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&h=400&fit=crop',
      description: 'Apilador manual económico para cargas ligeras.',
      features: [
        'Capacidad de carga: 1000 kg',
        'Altura máxima de elevación: 1.6 m',
        'Sin necesidad de energía',
        'Mantenimiento mínimo',
      ],
    },
    {
      id: 9,
      name: 'Autoelevador Todo Terreno',
      brand: 'Komatsu',
      image: 'https://images.unsplash.com/photo-1581092160607-ee67e4cca44b?w=500&h=400&fit=crop',
      description: 'Autoelevador especial para terrenos irregulares y construcción.',
      features: [
        'Capacidad de carga: 3000 kg',
        'Altura máxima de elevación: 4.0 m',
        'Tracción 4x4',
        'Neumáticos todo terreno',
      ],
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Encabezado */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          <Typography
            variant="overline"
            sx={{ 
              fontSize: '0.9rem',
              fontWeight: 700,
              letterSpacing: '2px',
              color: 'primary.main',
              mb: 1,
              display: 'block',
            }}
          >
            NUESTRO CATÁLOGO
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            sx={{ 
              fontWeight: 800, 
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            Máquinas en Alquiler
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto', 
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.7,
              px: { xs: 2, sm: 0 },
            }}
          >
            Contamos con una amplia variedad de autoelevadores y equipos de manejo de materiales
            para satisfacer todas tus necesidades operativas. Todos nuestros equipos reciben
            mantenimiento regular y están en óptimas condiciones.
          </Typography>
        </Box>

        {/* CSS GRID - Ancho uniforme y sin espacios vacíos */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr', // Mobile: 1 columna
              sm: 'repeat(2, 1fr)', // Tablet: 2 columnas
              md: 'repeat(3, 1fr)', // Desktop: 3 columnas
            },
            gap: { xs: 2.5, sm: 3, md: 4 },
            alignItems: 'stretch', // Todas las cards con la misma altura
          }}
        >
          {machines.map((machine) => (
            <Box key={machine.id}>
              <MachineCard machine={machine} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Machines;
