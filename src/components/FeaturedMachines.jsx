import { Box, Container, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FeaturedMachines = () => {
  const featuredMachines = [
    {
      id: 1,
      name: 'Autoelevador Diésel 3.5 Ton',
      image: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=500&h=400&fit=crop',
      description: 'Ideal para trabajos pesados en exteriores',
    },
    {
      id: 2,
      name: 'Autoelevador Eléctrico 2.5 Ton',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=400&fit=crop',
      description: 'Perfecto para uso en interiores y ambientes cerrados',
    },
    {
      id: 3,
      name: 'Apilador Eléctrico',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&h=400&fit=crop',
      description: 'Solución eficiente para almacenes y depósitos',
    },
  ];

  return (
    <Box component="section" sx={{ backgroundColor: '#f5f5f5', py: { xs: 6, md: 10 } }}>
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
            EQUIPOS DESTACADOS
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{ 
              fontWeight: 800, 
              mb: 2,
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
            }}
          >
            Máquinas Destacadas
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ 
              fontSize: { xs: '1rem', md: '1.1rem' },
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.7,
              px: { xs: 2, sm: 0 },
            }}
          >
            Conocé algunos de nuestros equipos disponibles para alquiler
          </Typography>
        </Box>

        {/* Contenedor Flexbox - MISMO LAYOUT QUE SOLUCIONES */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 2.5, md: 3, lg: 4 },
            alignItems: 'stretch',
            justifyContent: 'center',
            mb: 5,
          }}
        >
          {featuredMachines.map((machine) => (
            <Box
              key={machine.id}
              sx={{
                flex: { xs: '0 0 auto', md: '1 1 0' },
                minWidth: 0,
                width: { xs: '100%', md: 'auto' },
                maxWidth: { md: '400px' },
              }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  borderRadius: 4,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={machine.image}
                  alt={machine.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography 
                    gutterBottom 
                    variant="h6" 
                    component="h3" 
                    sx={{ 
                      fontWeight: 700,
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                    }}
                  >
                    {machine.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      fontSize: { xs: '0.9rem', md: '0.95rem' },
                      lineHeight: 1.6,
                    }}
                  >
                    {machine.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            component={Link}
            to="/machines"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ 
              px: { xs: 3, md: 4 }, 
              py: 1.5, 
              fontSize: { xs: '0.95rem', md: '1rem' }, 
              fontWeight: 600 
            }}
          >
            Ver Todas las Máquinas
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedMachines;
