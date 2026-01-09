import { Box, Container, Typography, Button, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BuildIcon from '@mui/icons-material/Build';
import InventoryIcon from '@mui/icons-material/Inventory';
import GppGoodIcon from '@mui/icons-material/GppGood';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VerifiedIcon from '@mui/icons-material/Verified';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useSEOWithOrganization } from '../hooks/useSEO';
import { aboutSEO } from '../config/seoConfig';
import { schemas } from '../utils/seo';

const About = () => {
  const navigate = useNavigate();

  // Breadcrumb para SEO
  const breadcrumbSchema = schemas.breadcrumb([
    { name: 'Inicio', url: '/' },
    { name: 'Nosotros', url: '/about' },
  ]);

  // Aplicar SEO
  useSEOWithOrganization(aboutSEO, breadcrumbSchema);

  // Servicios principales
  const services = [
    {
      icon: <HandshakeIcon sx={{ fontSize: 56 }} />,
      title: 'Alquiler de Autoelevadores',
      description: 'Ofrecemos alquiler de autoelevadores de todas las capacidades, diesel y eléctricos, para proyectos de corto, mediano y largo plazo.',
    },
    {
      icon: <BuildIcon sx={{ fontSize: 56 }} />,
      title: 'Mantenimiento y Servicio Técnico',
      description: 'Servicio técnico especializado con técnicos certificados. Mantenimiento preventivo y correctivo para todas las marcas.',
    },
    {
      icon: <InventoryIcon sx={{ fontSize: 56 }} />,
      title: 'Venta de Repuestos y Piezas',
      description: 'Stock permanente de repuestos originales y compatibles para autoelevadores de todas las marcas: Toyota, Nissan, Yale, Clark y más.',
    },
  ];

  // Valores de la empresa
  const values = [
    {
      icon: <GppGoodIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Compromiso',
      description: 'Nos comprometemos con cada cliente para brindar soluciones eficientes y duraderas.',
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Calidad Garantizada',
      description: 'Equipos de primera calidad y repuestos originales que aseguran el mejor rendimiento.',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Respuesta Rápida',
      description: 'Atención inmediata y tiempos de respuesta óptimos para no detener tu operación.',
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Soporte Personalizado',
      description: 'Asesoramiento técnico especializado para encontrar la mejor solución a tus necesidades.',
    },
  ];

  // Imágenes de la empresa (galería)
  const gallery = [
    {
      url: 'https://images.unsplash.com/photo-1581092160607-ee67e4cca44b?w=600&h=400&fit=crop',
      alt: 'Taller de mantenimiento RS Autoelevadores',
    },
    {
      url: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=600&h=400&fit=crop',
      alt: 'Autoelevadores en operación',
    },
    {
      url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop',
      alt: 'Equipo técnico especializado',
    },
    {
      url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      alt: 'Repuestos y piezas originales',
    },
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleWhatsAppClick = () => {
    const message = '¡Hola! Me gustaría conocer más sobre sus servicios.';
    const whatsappUrl = `${import.meta.env.VITE_WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Box>
      {/* HERO SECTION */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '60vh', md: '70vh' },
          backgroundImage: 'url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: { xs: 'scroll', md: 'fixed' },
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(160, 21, 62, 0.85) 0%, rgba(43, 43, 43, 0.75) 100%)',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: '800px' }}>
            <Typography
              variant="overline"
              sx={{
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '3px',
                color: 'white',
                mb: 2,
                display: 'block',
                opacity: 0.95,
              }}
            >
              SOBRE NOSOTROS
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                color: 'white',
                mb: 3,
                lineHeight: 1.1,
                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              Más que Máquinas,
              <br />
              Soluciones Integrales
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255, 255, 255, 0.95)',
                fontWeight: 400,
                lineHeight: 1.6,
                maxWidth: '650px',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
              }}
            >
              Somos una empresa especializada en alquiler, mantenimiento y venta de repuestos
              para autoelevadores, comprometidos con la excelencia y el servicio personalizado.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* QUIÉNES SOMOS */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 4, md: 8 },
              alignItems: 'center',
            }}
          >
            {/* Texto */}
            <Box>
              <Typography
                variant="overline"
                sx={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  color: 'primary.main',
                  mb: 1.5,
                  display: 'block',
                }}
              >
                QUIÉNES SOMOS
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.75rem' },
                  lineHeight: 1.2,
                }}
              >
                Tu Socio en Equipamiento Industrial
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  mb: 2.5,
                }}
              >
                <strong style={{ color: '#2B2B2B' }}>RS Autoelevadores</strong> nació con el objetivo de brindar 
                soluciones integrales en equipamiento industrial. Con años de experiencia en el sector, 
                nos consolidamos como un referente en <strong style={{ color: '#A0153E' }}>alquiler de autoelevadores, 
                mantenimiento profesional y venta de repuestos</strong>.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  mb: 2.5,
                }}
              >
                Trabajamos con las <strong style={{ color: '#2B2B2B' }}>mejores marcas del mercado</strong> como 
                Toyota, Nissan, Yale, Clark, Caterpillar, Hyster y más, garantizando equipos de primera 
                calidad y repuestos originales.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                }}
              >
                Nuestro equipo de <strong style={{ color: '#A0153E' }}>técnicos certificados</strong> está 
                capacitado para brindar soporte técnico especializado, mantenimiento preventivo y 
                reparaciones de todo tipo, asegurando que tu operación nunca se detenga.
              </Typography>
            </Box>

            {/* Imagen */}
            <Box>
              <Paper
                elevation={6}
                sx={{
                  overflow: 'hidden',
                  borderRadius: 4,
                  aspectRatio: '4/3',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(160, 21, 62, 0.1) 0%, transparent 50%)',
                  },
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581092918484-8313e1f1b5d5?w=800&h=600&fit=crop"
                  alt="Equipo RS Autoelevadores"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* QUÉ HACEMOS */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="overline"
              sx={{
                fontSize: '0.9rem',
                fontWeight: 700,
                letterSpacing: '2px',
                color: 'primary.main',
                mb: 1.5,
                display: 'block',
              }}
            >
              NUESTROS SERVICIOS
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2rem', md: '2.75rem' },
              }}
            >
              Qué Hacemos
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Ofrecemos soluciones completas para tu empresa: desde el alquiler de equipos
              hasta el soporte técnico y la provisión de repuestos.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: { xs: 3, md: 4 },
            }}
          >
            {services.map((service, index) => (
              <Paper
                key={index}
                elevation={2}
                sx={{
                  p: { xs: 4, md: 5 },
                  borderRadius: 4,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  border: '1px solid',
                  borderColor: 'grey.200',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #A0153E 0%, #C71F4E 100%)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                    '&::before': {
                      transform: 'scaleX(1)',
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    color: 'primary.main',
                    mb: 3,
                  }}
                >
                  {service.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: '1.4rem',
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.7,
                    fontSize: '0.95rem',
                  }}
                >
                  {service.description}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      {/* MISIÓN Y VALORES */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          {/* Misión */}
          <Box sx={{ mb: { xs: 8, md: 10 } }}>
            <Box sx={{ textAlign: 'center', mb: 5 }}>
              <Typography
                variant="overline"
                sx={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  color: 'primary.main',
                  mb: 1.5,
                  display: 'block',
                }}
              >
                NUESTRA MISIÓN
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.75rem' },
                }}
              >
                Impulsamos tu Operación
              </Typography>
            </Box>
            <Paper
              elevation={3}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                background: 'linear-gradient(135deg, #A0153E 0%, #C71F4E 100%)',
                color: 'white',
                textAlign: 'center',
                maxWidth: '900px',
                mx: 'auto',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 500,
                  lineHeight: 1.8,
                  fontSize: { xs: '1.2rem', md: '1.4rem' },
                }}
              >
                Nuestra misión es <strong style={{ fontWeight: 700 }}>brindar soluciones integrales</strong> en 
                equipamiento industrial, garantizando <strong style={{ fontWeight: 700 }}>calidad, seguridad y 
                confiabilidad</strong> en cada servicio. Trabajamos día a día para ser el 
                <strong style={{ fontWeight: 700 }}> socio estratégico</strong> de nuestros clientes, 
                acompañándolos en el crecimiento de sus operaciones con equipos de primera línea y 
                un servicio técnico excepcional.
              </Typography>
            </Paper>
          </Box>

          {/* Valores */}
          <Box>
            <Box sx={{ textAlign: 'center', mb: 5 }}>
              <Typography
                variant="overline"
                sx={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  color: 'primary.main',
                  mb: 1.5,
                  display: 'block',
                }}
              >
                NUESTROS VALORES
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2rem', md: '2.75rem' },
                }}
              >
                Lo que nos Define
              </Typography>
            </Box>

            <Grid container spacing={{ xs: 3, md: 4 }}>
              {values.map((value, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Paper
                    elevation={1}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      textAlign: 'center',
                      height: '100%',
                      border: '1px solid',
                      borderColor: 'grey.200',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: 3,
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{value.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1.5,
                        fontSize: '1.1rem',
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        fontSize: '0.9rem',
                      }}
                    >
                      {value.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* GALERÍA DE IMÁGENES */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
            <Typography
              variant="overline"
              sx={{
                fontSize: '0.9rem',
                fontWeight: 700,
                letterSpacing: '2px',
                color: 'primary.main',
                mb: 1.5,
                display: 'block',
              }}
            >
              NUESTRA EMPRESA
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '2.75rem' },
              }}
            >
              Conocé Nuestras Instalaciones
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {gallery.map((image, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    overflow: 'hidden',
                    borderRadius: 3,
                    aspectRatio: '4/3',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: 6,
                      '& img': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA FINAL */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #2B2B2B 0%, #1A1A1A 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(160, 21, 62, 0.15) 0%, transparent 70%)',
            top: '-200px',
            right: '-100px',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(160, 21, 62, 0.1) 0%, transparent 70%)',
            bottom: '-150px',
            left: '-100px',
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: 'white',
                mb: 3,
                fontSize: { xs: '2rem', md: '2.75rem' },
              }}
            >
              ¿Listo para Trabajar Juntos?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255, 255, 255, 0.85)',
                mb: 5,
                fontWeight: 400,
                lineHeight: 1.7,
                maxWidth: '650px',
                mx: 'auto',
              }}
            >
              Contactanos hoy y descubrí cómo nuestros servicios pueden optimizar 
              tu operación industrial. Estamos para asesorarte sin compromiso.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={handleContactClick}
                sx={{
                  px: 5,
                  py: 1.8,
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, #A0153E 0%, #C71F4E 100%)',
                  boxShadow: '0 6px 20px rgba(160, 21, 62, 0.4)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #7A0E2E 0%, #A0153E 100%)',
                    boxShadow: '0 8px 28px rgba(160, 21, 62, 0.5)',
                  },
                }}
              >
                Contactanos
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<WhatsAppIcon />}
                onClick={handleWhatsAppClick}
                sx={{
                  px: 5,
                  py: 1.8,
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  borderColor: 'white',
                  color: 'white',
                  borderWidth: 2,
                  '&:hover': {
                    borderColor: '#25D366',
                    backgroundColor: '#25D366',
                    color: 'white',
                    borderWidth: 2,
                  },
                }}
              >
                WhatsApp
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
