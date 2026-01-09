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
      capacity: '3.5 Ton',
      fuelType: 'Diesel',
      image: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=500&h=400&fit=crop',
      description: 'Autoelevador diésel de alto rendimiento Toyota, ideal para trabajos pesados en exteriores. Motor eficiente con bajo consumo de combustible y gran potencia.',
      features: [
        'Capacidad de carga: 3500 kg',
        'Altura máxima de elevación: 4.5 m',
        'Motor diésel eficiente Toyota',
        'Neumáticos todo terreno',
        'Cabina con protección ROPS/FOPS',
        'Transmisión automática',
      ],
      specs: {
        modelo: '8FD35',
        motor: 'Diésel 4 cilindros',
        potencia: '68 HP',
        peso: '5200 kg',
        longitud: '3.8 m',
        ancho: '1.2 m',
      },
    },
    {
      id: 2,
      name: 'Autoelevador Eléctrico 2.5 Ton',
      brand: 'Yale',
      capacity: '2.5 Ton',
      fuelType: 'Eléctrico',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=400&fit=crop',
      description: 'Autoelevador eléctrico silencioso Yale, perfecto para uso en interiores y ambientes cerrados. Cero emisiones y bajo nivel de ruido.',
      features: [
        'Capacidad de carga: 2500 kg',
        'Altura máxima de elevación: 4.0 m',
        'Cero emisiones',
        'Bajo nivel de ruido',
        'Batería de larga duración',
        'Sistema de frenado regenerativo',
      ],
      specs: {
        modelo: 'ERC25',
        motor: 'Eléctrico AC',
        voltaje: '48V',
        peso: '3800 kg',
        longitud: '3.2 m',
        ancho: '1.1 m',
      },
    },
    {
      id: 3,
      name: 'Apilador Eléctrico',
      brand: 'Crown',
      capacity: '1.5 Ton',
      fuelType: 'Eléctrico',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&h=400&fit=crop',
      description: 'Apilador eléctrico compacto Crown, solución eficiente para almacenes y depósitos. Diseño ergonómico y fácil maniobrabilidad.',
      features: [
        'Capacidad de carga: 1500 kg',
        'Altura máxima de elevación: 3.5 m',
        'Diseño compacto',
        'Fácil maniobrabilidad',
        'Plataforma plegable',
        'Control intuitivo',
      ],
      specs: {
        modelo: 'SW1500',
        motor: 'Eléctrico',
        voltaje: '24V',
        peso: '950 kg',
        longitud: '2.1 m',
        ancho: '0.8 m',
      },
    },
    {
      id: 4,
      name: 'Autoelevador GLP 2.0 Ton',
      brand: 'Hyster',
      capacity: '2.0 Ton',
      fuelType: 'GLP',
      image: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=500&h=400&fit=crop',
      description: 'Autoelevador a gas licuado Hyster, versátil para uso interior y exterior. Bajo costo operativo y emisiones reducidas.',
      features: [
        'Capacidad de carga: 2000 kg',
        'Altura máxima de elevación: 3.5 m',
        'Bajo costo operativo',
        'Versatilidad de uso',
        'Emisiones reducidas',
        'Arranque suave',
      ],
      specs: {
        modelo: 'H2.0FT',
        motor: 'GLP 4 cilindros',
        potencia: '52 HP',
        peso: '3500 kg',
        longitud: '3.5 m',
        ancho: '1.1 m',
      },
    },
    {
      id: 5,
      name: 'Autoelevador Diésel 5.0 Ton',
      brand: 'Caterpillar',
      capacity: '5.0 Ton',
      fuelType: 'Diesel',
      image: 'https://images.unsplash.com/photo-1581092160607-ee67e4cca44b?w=500&h=400&fit=crop',
      description: 'Autoelevador Caterpillar de alta capacidad para cargas muy pesadas. Construcción robusta y potencia superior.',
      features: [
        'Capacidad de carga: 5000 kg',
        'Altura máxima de elevación: 5.0 m',
        'Potencia superior',
        'Construcción robusta',
        'Neumáticos de alta resistencia',
        'Cabina reforzada',
      ],
      specs: {
        modelo: 'DP50N',
        motor: 'Diésel 6 cilindros',
        potencia: '95 HP',
        peso: '7200 kg',
        longitud: '4.2 m',
        ancho: '1.4 m',
      },
    },
    {
      id: 6,
      name: 'Transpaleta Eléctrica',
      brand: 'Toyota',
      capacity: '2.0 Ton',
      fuelType: 'Eléctrico',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&h=400&fit=crop',
      description: 'Transpaleta eléctrica Toyota para movimiento ágil de pallets. Diseño ergonómico y batería de larga duración.',
      features: [
        'Capacidad de carga: 2000 kg',
        'Diseño ergonómico',
        'Batería de larga duración',
        'Ideal para distancias cortas',
        'Timón ajustable',
        'Ruedas de poliuretano',
      ],
      specs: {
        modelo: 'LWE200',
        motor: 'Eléctrico',
        voltaje: '24V',
        peso: '320 kg',
        longitud: '1.6 m',
        ancho: '0.7 m',
      },
    },
    {
      id: 7,
      name: 'Autoelevador Retráctil',
      brand: 'Yale',
      capacity: '1.8 Ton',
      fuelType: 'Eléctrico',
      image: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=500&h=400&fit=crop',
      description: 'Autoelevador retráctil Yale para optimización de espacios en almacenes. Ideal para pasillos estrechos y grandes alturas.',
      features: [
        'Capacidad de carga: 1800 kg',
        'Altura máxima de elevación: 8.0 m',
        'Pasillos estrechos',
        'Máxima optimización de espacio',
        'Mástil retráctil',
        'Visibilidad panorámica',
      ],
      specs: {
        modelo: 'MR18',
        motor: 'Eléctrico AC',
        voltaje: '48V',
        peso: '4100 kg',
        longitud: '2.8 m',
        ancho: '1.2 m',
      },
    },
    {
      id: 8,
      name: 'Apilador Manual',
      brand: 'Crown',
      capacity: '1.0 Ton',
      fuelType: 'Manual',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&h=400&fit=crop',
      description: 'Apilador manual Crown económico para cargas ligeras. Sin necesidad de energía eléctrica ni combustible.',
      features: [
        'Capacidad de carga: 1000 kg',
        'Altura máxima de elevación: 1.6 m',
        'Sin necesidad de energía',
        'Mantenimiento mínimo',
        'Sistema hidráulico manual',
        'Construcción en acero',
      ],
      specs: {
        modelo: 'SM1000',
        tipo: 'Hidráulico manual',
        elevacion: 'Manual',
        peso: '180 kg',
        longitud: '1.5 m',
        ancho: '0.7 m',
      },
    },
    {
      id: 9,
      name: 'Autoelevador Todo Terreno',
      brand: 'Komatsu',
      capacity: '3.0 Ton',
      fuelType: 'Diesel',
      image: 'https://images.unsplash.com/photo-1581092160607-ee67e4cca44b?w=500&h=400&fit=crop',
      description: 'Autoelevador Komatsu especial para terrenos irregulares y construcción. Tracción 4x4 y neumáticos todo terreno para máxima versatilidad.',
      features: [
        'Capacidad de carga: 3000 kg',
        'Altura máxima de elevación: 4.0 m',
        'Tracción 4x4',
        'Neumáticos todo terreno reforzados',
        'Sistema de suspensión avanzada',
        'Ideal para construcción',
      ],
      specs: {
        modelo: 'FD30T-16',
        motor: 'Diésel 4 cilindros turbo',
        potencia: '72 HP',
        peso: '5500 kg',
        longitud: '3.9 m',
        ancho: '1.3 m',
      },
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
