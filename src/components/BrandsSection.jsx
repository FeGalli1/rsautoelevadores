import { Container, Typography, Box } from '@mui/material';
import { keyframes } from '@mui/system';

const BrandsSection = () => {
  // Logos locales con fondo transparente
  const brands = [
    { 
      name: 'Toyota',
      logo: '/images/logos/toyota.png'
    },
    { 
      name: 'Nissan',
      logo: '/images/logos/nissan.png'
    },
    { 
      name: 'Tailift',
      logo: '/images/logos/tailift.png'
    },
    { 
      name: 'Caterpillar',
      logo: '/images/logos/cat.png'
    },
    { 
      name: 'Hyster',
      logo: '/images/logos/Hyster.png'
    },
    { 
      name: 'Hangcha',
      logo: '/images/logos/hangcha-seeklogo.png'
    },
  ];

  // Duplicamos el array para crear el efecto de bucle infinito
  const duplicatedBrands = [...brands, ...brands];

  // Animación de scroll infinito
  const scroll = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  `;

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 7, md: 10 }, 
        backgroundColor: '#FAFAFA',
        overflow: 'hidden',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'grey.200',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 6 } }}>
          {/* <Typography
            variant="overline"
            sx={{ 
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '2.5px',
              color: 'text.secondary',
              mb: 1,
              display: 'block',
            }}
          >
            PARTNERS DE CONFIANZA
          </Typography> */}
          <Typography
            variant="h3"
            component="h2"
            sx={{ 
              fontWeight: 800, 
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
              color: 'text.primary',
            }}
          >
            Trabajamos con las Mejores Marcas
          </Typography>
        </Box>

        {/* Contenedor del carrusel */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              width: { xs: '60px', md: '120px' },
              height: '100%',
              zIndex: 2,
              pointerEvents: 'none',
            },
            '&::before': {
              left: 0,
              background: 'linear-gradient(to right, rgba(250,250,250,1) 0%, rgba(250,250,250,0) 100%)',
            },
            '&::after': {
              right: 0,
              background: 'linear-gradient(to left, rgba(250,250,250,1) 0%, rgba(250,250,250,0) 100%)',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              animation: `${scroll} 5s linear infinite`,
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <Box
                key={`${brand.name}-${index}`}
                sx={{
                  flex: '0 0 auto',
                  width: { xs: '140px', sm: '180px', md: '220px' },
                  height: { xs: '90px', sm: '110px', md: '130px' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: { xs: 2.5, sm: 3.5, md: 5 },
                  backgroundColor: 'white',
                  borderRadius: 3,
                  p: 2.5,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  transition: 'all 0.4s ease',
                  border: '1px solid',
                  borderColor: 'grey.200',
                  '&:hover': {
                    transform: 'scale(1.08)',
                    boxShadow: '0 8px 20px rgba(160, 21, 62, 0.12)',
                    borderColor: 'primary.light',
                  },
                }}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    filter: 'grayscale(100%) contrast(0.8)',
                    opacity: 0.65,
                    transition: 'all 0.4s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%) contrast(1)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%) contrast(0.8)';
                    e.currentTarget.style.opacity = '0.65';
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Texto informativo */}
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          sx={{ 
            mt: 5, 
            fontSize: { xs: '0.9rem', md: '0.95rem' },
            fontStyle: 'italic',
          }}
        >
        </Typography>
      </Container>
    </Box>
  );
};

export default BrandsSection;
