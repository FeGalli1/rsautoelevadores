import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CTASection = () => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        background: 'linear-gradient(135deg, #A0153E 0%, #7A0E2E 100%)',
        color: 'white',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.05)',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-30%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.03)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography 
          variant="overline"
          sx={{ 
            fontSize: '0.9rem',
            fontWeight: 700,
            letterSpacing: '3px',
            mb: 2,
            display: 'block',
            color: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          ¿LISTO PARA EMPEZAR?
        </Typography>
        
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 800,
            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
            mb: 2.5,
            lineHeight: 1.2,
          }}
        >
          Optimizá tu operación hoy mismo
        </Typography>
        
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 5, 
            fontWeight: 400,
            fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
            px: { xs: 2, sm: 0 },
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6,
            color: 'rgba(255, 255, 255, 0.95)',
          }}
        >
          Nuestro equipo de expertos está listo para asesorarte 
          y encontrar la mejor solución para tu empresa
        </Typography>
        
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 2.5, 
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 4.5,
              py: 1.8,
              fontSize: '1.1rem',
              fontWeight: 700,
              borderRadius: 3,
              backgroundColor: 'white',
              color: '#A0153E',
              boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
              '&:hover': {
                backgroundColor: '#f5f5f5',
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
              },
            }}
          >
            Solicitar Cotización
          </Button>
          
          <Button
            component="a"
            href="tel:+5491112345678"
            variant="outlined"
            size="large"
            startIcon={<PhoneIcon />}
            sx={{
              px: 4.5,
              py: 1.8,
              fontSize: '1.1rem',
              fontWeight: 700,
              borderRadius: 3,
              borderWidth: 2,
              borderColor: 'white',
              color: 'white',
              '&:hover': {
                borderWidth: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateY(-3px)',
              },
            }}
          >
            Llamar Ahora
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;
