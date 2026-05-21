import { Box, Container, Title, Text, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconPhone } from '@tabler/icons-react';

const CTASection = () => (
  <Box
    component="section"
    style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #A0153E 0%, #7A0E2E 100%)',
      color: 'white',
      overflow: 'hidden',
    }}
    py={{ base: 80, md: 112 }}
    ta="center"
  >
    {/* Decorative circles */}
    <Box style={{ position: 'absolute', top: '-50%', right: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', zIndex: 0 }} />
    <Box style={{ position: 'absolute', bottom: '-30%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', zIndex: 0 }} />

    <Container size="md" style={{ position: 'relative', zIndex: 1 }}>
      <Text size="sm" fw={700} style={{ letterSpacing: '3px', color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', marginBottom: 16, display: 'block' }}>
        ¿LISTO PARA EMPEZAR?
      </Text>

      <Title order={2} fz={{ base: '1.75rem', sm: '2.25rem', md: '2.75rem' }} mb="md" lh={1.2}>
        Optimizá tu operación hoy mismo
      </Title>

      <Text fz={{ base: '1rem', md: '1.2rem' }} mb={48} lh={1.7} maw={580} mx="auto" style={{ color: 'rgba(255,255,255,0.92)' }}>
        Nuestro equipo de expertos está listo para asesorarte y encontrar la mejor solución para tu empresa
      </Text>

      <Group justify="center" gap="md" wrap="wrap">
        <Button
          component={Link}
          to="/contact"
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
          Solicitar Cotización
        </Button>

        <Button
          component="a"
          href="tel:+5491112345678"
          size="lg"
          variant="outline"
          leftSection={<IconPhone size={18} />}
          style={{ borderColor: 'white', borderWidth: 2, color: 'white', fontWeight: 700 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Llamar Ahora
        </Button>
      </Group>
    </Container>
  </Box>
);

export default CTASection;
