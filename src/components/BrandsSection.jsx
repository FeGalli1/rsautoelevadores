import { Box, Container, Title } from '@mantine/core';

const brands = [
  { name: 'Toyota',      logo: '/images/logos/toyota.svg' },
  { name: 'Nissan',      logo: '/images/logos/nissan.png' },
  { name: 'Yale',        logo: '/images/logos/yale.svg' },
  { name: 'Caterpillar', logo: '/images/logos/caterpillar.svg' },
  { name: 'Hyster',      logo: '/images/logos/Hyster.png' },
  { name: 'Crown',       logo: '/images/logos/crown.svg' },
  { name: 'Komatsu',     logo: '/images/logos/komatsu.svg' },
  { name: 'Tailift',     logo: '/images/logos/tailift.png' },
  { name: 'Hangcha',     logo: '/images/logos/hangcha-seeklogo.png' },
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
    <Box
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Fade edges */}
      <Box style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, #FAFAFA, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <Box style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, #FAFAFA, transparent)', zIndex: 2, pointerEvents: 'none' }} />

      <Box style={{ display: 'flex', animation: 'brandScroll 18s linear infinite' }}>
        {duplicated.map((brand, i) => (
          <Box
            key={`${brand.name}-${i}`}
            style={{
              flexShrink: 0,
              width: 180,
              height: 110,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 24px',
              backgroundColor: 'white',
              borderRadius: 12,
              padding: 20,
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              border: '1px solid #e0e0e0',
              transition: 'all 0.35s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(160,21,62,0.12)';
              e.currentTarget.style.borderColor = '#c71f4e';
              const img = e.currentTarget.querySelector('img');
              if (img) { img.style.filter = 'grayscale(0%)'; img.style.opacity = '1'; }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
              e.currentTarget.style.borderColor = '#e0e0e0';
              const img = e.currentTarget.querySelector('img');
              if (img) { img.style.filter = 'grayscale(100%)'; img.style.opacity = '0.65'; }
            }}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                filter: 'grayscale(100%)',
                opacity: 0.65,
                transition: 'all 0.35s ease',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);

export default BrandsSection;
