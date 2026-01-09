import { Container, Typography, Box } from '@mui/material';
import ServiceCard from './ServiceCard';
import BuildIcon from '@mui/icons-material/Build';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';

const AboutSection = () => {
  const services = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: { xs: 48, md: 56 }, color: 'primary.main' }} />,
      title: 'Alquiler de Autoelevadores',
      description: 'Equipos de última generación para potenciar tu operación. Flexibilidad total en plazos y modelos.',
    },
    {
      icon: <BuildIcon sx={{ fontSize: { xs: 48, md: 56 }, color: 'primary.main' }} />,
      title: 'Mantenimiento Profesional',
      description: 'Técnicos certificados y repuestos originales. Minimizá tiempos de inactividad.',
    },
    {
      icon: <InventoryIcon sx={{ fontSize: { xs: 48, md: 56 }, color: 'primary.main' }} />,
      title: 'Venta de Repuestos',
      description: 'Stock permanente de piezas originales. Entrega inmediata para todas las marcas.',
    },
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 6, md: 10 }, 
        backgroundColor: 'grey.50',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Encabezado de sección */}
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
            NUESTROS SERVICIOS
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{ 
              fontWeight: 800, 
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              color: 'text.primary',
            }}
          >
            Soluciones Integrales
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ 
              maxWidth: '700px', 
              mx: 'auto', 
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.7,
              px: { xs: 2, sm: 0 },
            }}
          >
            Más de 20 años de experiencia respaldándonos como líderes en equipamiento industrial.
            Tu partner de confianza para cada desafío logístico.
          </Typography>
        </Box>

        {/* Contenedor Flexbox de servicios */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 2.5, md: 3, lg: 4 },
            alignItems: 'stretch',
            justifyContent: 'center',
            maxWidth: '100%',
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                flex: { xs: '0 0 auto', md: '1 1 0' },
                minWidth: 0,
                width: { xs: '100%', md: 'auto' },
                maxWidth: { md: '400px' },
              }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
