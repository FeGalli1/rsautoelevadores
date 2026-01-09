import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: { xs: 'scroll', md: 'fixed' },
        color: 'white',
        py: { xs: 12, md: 18 },
        minHeight: { xs: '70vh', md: '80vh' },
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
          zIndex: 1,
        },
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 2,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        {/* Supratítulo */}
        <Typography
          variant="overline"
          sx={{
            display: 'block',
            fontSize: { xs: '0.85rem', md: '1rem' },
            fontWeight: 700,
            letterSpacing: '3px',
            mb: 2,
            color: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          LÍDERES EN EQUIPAMIENTO INDUSTRIAL
        </Typography>

        {/* Título principal */}
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            lineHeight: 1.1,
            mb: 3,
            maxWidth: { md: '800px' },
            textShadow: '0 4px 12px rgba(0,0,0,0.3)',
          }}
        >
          Potenciá tu negocio con{' '}
          <Box component="span" sx={{ color: '#FDD835' }}>
            equipos de primera
          </Box>
        </Typography>

        {/* Subtítulo */}
        <Typography
          variant="h5"
          sx={{
            mb: 5,
            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
            fontWeight: 400,
            lineHeight: 1.6,
            maxWidth: { md: '650px' },
            color: 'rgba(255, 255, 255, 0.95)',
          }}
        >
          Alquiler, mantenimiento y venta de autoelevadores. 
          Soluciones a medida para tu industria.
        </Typography>

        {/* CTAs */}
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 2.5, 
            justifyContent: { xs: 'center', md: 'flex-start' },
            flexWrap: 'wrap',
          }}
        >
          <Button
            component={Link}
            to="/catalog"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 4,
              py: 1.8,
              fontSize: '1.1rem',
              fontWeight: 700,
              borderRadius: 3,
              background: 'white',
              color: '#A0153E',
              boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
              '&:hover': {
                background: '#f5f5f5',
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
              },
            }}
          >
            Ver Catálogo
          </Button>

          <Button
            component={Link}
            to="/contact"
            variant="outlined"
            size="large"
            startIcon={<WhatsAppIcon />}
            sx={{
              px: 4,
              py: 1.8,
              fontSize: '1.1rem',
              fontWeight: 700,
              borderRadius: 3,
              borderWidth: 2,
              borderColor: 'white',
              color: 'white',
              '&:hover': {
                borderWidth: 2,
                borderColor: '#FDD835',
                backgroundColor: 'rgba(253, 216, 53, 0.1)',
                transform: 'translateY(-3px)',
              },
            }}
          >
            Solicitar Cotización
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
