import { Box, Container, Title } from '@mantine/core';

const brands = [
  { name: 'Toyota',      logo: '/images/logos/toyota.svg' },
  { name: 'Nissan',      logo: '/images/logos/nissan.svg' },
  { name: 'Yale',        logo: '/images/logos/yale.svg' },
  { name: 'Caterpillar', logo: '/images/logos/caterpillar.svg' },
  { name: 'Mitsubishi',  logo: '/images/logos/mitsubishi.svg' },
  { name: 'Hyster',      logo: '/images/logos/hyster.svg' },
  { name: 'Crown',       logo: '/images/logos/crown.svg' },
  { name: 'Komatsu',     logo: '/images/logos/komatsu.svg' },
  { name: 'Tailift',     logo: '/images/logos/tailift.svg' },
  { name: 'Hangcha',     logo: '/images/logos/hangcha-seeklogo.png' },
  { name: 'Heli',        logo: '/images/logos/heli.jpg' },
];

const duplicated = [...brands, ...brands];

const BrandsSection = () => (
  <Box
    component="section"
    py={{ base: 64, md: 88 }}
    style={{
      backgroundColor: '#FAFAFA',
      overflow: 'hidden',
      borderTop: '1px solid #e0e0e0',
      borderBottom: '1px solid #e0e0e0',
    }}
  >
    <Container size="lg">
      <Title
        order={2}
        ta="center"
        fz={{ base: '1.75rem', sm: '2.25rem', md: '2.5rem' }}
        mb={{ base: 48, md: 56 }}
      >
        Trabajamos con las Mejores Marcas
      </Title>
    </Container>

    {/* Infinite scroll carousel */}
    <Box style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Fade edges */}
      <Box style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, #FAFAFA, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <Box style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, #FAFAFA, transparent)', zIndex: 2, pointerEvents: 'none' }} />

      <Box style={{ display: 'flex', animation: 'brandScroll 22s linear infinite' }}>
        {duplicated.map((brand, i) => (
          <Box
            key={`${brand.name}-${i}`}
            style={{
              flexShrink: 0,
              width: 200,
              height: 120,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 20px',
              backgroundColor: 'white',
              borderRadius: 14,
              padding: '18px 24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              border: '1px solid #e0e0e0',
              transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(160,21,62,0.13)';
              e.currentTarget.style.borderColor = '#c71f4e';
              const img = e.currentTarget.querySelector('img');
              if (img) {
                img.style.filter = 'grayscale(0%)';
                img.style.opacity = '1';
                img.style.transform = 'scale(1.1)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
              e.currentTarget.style.borderColor = '#e0e0e0';
              const img = e.currentTarget.querySelector('img');
              if (img) {
                img.style.filter = 'grayscale(100%)';
                img.style.opacity = '0.65';
                img.style.transform = 'scale(1)';
              }
            }}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'grayscale(100%)',
                opacity: 0.65,
                transition: 'filter 0.3s ease, opacity 0.3s ease, transform 0.35s ease',
                display: 'block',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);

export default BrandsSection;
