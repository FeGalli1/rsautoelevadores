import { Box, Container, Title, Text, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconBrandWhatsapp } from '@tabler/icons-react';

const HeroSection = () => (
  <Box
    component="section"
    style={{
      position: 'relative',
      backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    {/* Overlay */}
    <Box
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(160,21,62,0.88) 0%, rgba(43,43,43,0.78) 100%)',
      }}
    />

    <Container size="lg" style={{ position: 'relative', zIndex: 1, paddingTop: 80, paddingBottom: 80 }}>
      <Text
        size="sm"
        fw={700}
        style={{ letterSpacing: '3px', color: 'rgba(255,255,255,0.9)', marginBottom: 16, display: 'block', textTransform: 'uppercase' }}
      >
        TU SOCIO ESTRATÉGICO EN EQUIPAMIENTO INDUSTRIAL
      </Text>

      <Title
        order={1}
        style={{
          fontWeight: 900,
          fontSize: 'clamp(2rem, 5vw, 4.5rem)',
          lineHeight: 1.1,
          marginBottom: 24,
          maxWidth: 850,
          textShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}
      >
        Soluciones integrales para que su{' '}
        <Box component="span" style={{ color: '#FDD835' }}>
          operación nunca se detenga
        </Box>
      </Title>

      <Text
        style={{
          marginBottom: 48,
          fontSize: 'clamp(1rem, 2vw, 1.35rem)',
          fontWeight: 400,
          lineHeight: 1.7,
          maxWidth: 680,
          color: 'rgba(255,255,255,0.95)',
        }}
      >
        Especialistas en alquiler, mantenimiento y venta de repuestos para autoelevadores.
        Más de 15 años brindando confianza y respaldo técnico a la industria nacional.
      </Text>

      <Group gap="md" wrap="wrap">
        <Button
          component={Link}
          to="/catalog"
          size="lg"
          rightSection={<IconArrowRight size={18} />}
          style={{
            backgroundColor: 'white',
            color: '#A0153E',
            fontWeight: 700,
            boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Nuestros Servicios
        </Button>

        <Button
          component={Link}
          to="/contact"
          size="lg"
          variant="outline"
          leftSection={<IconBrandWhatsapp size={18} />}
          style={{
            borderColor: 'white',
            borderWidth: 2,
            color: 'white',
            fontWeight: 700,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#FDD835';
            e.currentTarget.style.backgroundColor = 'rgba(253,216,53,0.1)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'white';
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Solicitar Presupuesto
        </Button>
      </Group>
    </Container>
  </Box>
);

export default HeroSection;
