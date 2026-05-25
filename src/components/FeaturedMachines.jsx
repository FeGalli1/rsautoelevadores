import { Box, Container, Title, Text, SimpleGrid, Card, Button, Stack, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconArrowRight } from '@tabler/icons-react';
import useScrollReveal from '../hooks/useScrollReveal';

const machines = [
  { id: 1, name: 'Autoelevador Diésel 3.5 Ton', image: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=500&h=400&fit=crop', description: 'Ideal para trabajos pesados en exteriores' },
  { id: 2, name: 'Autoelevador Eléctrico 2.5 Ton', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=400&fit=crop', description: 'Perfecto para uso en interiores y ambientes cerrados' },
  { id: 3, name: 'Apilador Eléctrico', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&h=400&fit=crop', description: 'Solución eficiente para almacenes y depósitos' },
];

const FeaturedMachines = () => {
  const [headerRef, headerVisible] = useScrollReveal(0.1);
  const [gridRef, gridVisible] = useScrollReveal(0.05);
  const [ctaRef, ctaVisible] = useScrollReveal(0.2);

  return (
    <Box component="section" bg="gray.1" py={{ base: 60, md: 96 }}>
      <Container size="lg">
        <div ref={headerRef}>
          <Stack
            align="center"
            ta="center"
            gap="xs"
            mb={{ base: 48, md: 64 }}
            className={`reveal ${headerVisible ? 'visible' : ''}`}
          >
            <Text size="sm" fw={700} c="brand" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>
              EQUIPOS DESTACADOS
            </Text>
            <Title order={2} fz={{ base: '1.75rem', sm: '2.2rem', md: '2.5rem' }}>
              Máquinas Destacadas
            </Title>
            <Text c="dimmed" size="lg" maw={680} lh={1.7}>
              Conocé algunos de nuestros equipos disponibles para alquiler
            </Text>
          </Stack>
        </div>

        <div ref={gridRef}>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing={{ base: 20, md: 32 }} mb={48}>
            {machines.map((m, i) => (
              <div
                key={m.id}
                className={`reveal ${gridVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <Card radius="xl" withBorder className="card-lift machine-card" style={{ border: '1px solid #e0e0e0' }}>
                  <Card.Section>
                    <Box style={{ height: 220, overflow: 'hidden' }}>
                      <img
                        src={m.image}
                        alt={m.name}
                        className="machine-img"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    </Box>
                  </Card.Section>
                  <Stack gap="xs" pt="md">
                    <Title order={4} fw={700} fz="1.1rem">{m.name}</Title>
                    <Text size="sm" c="dimmed" lh={1.6}>{m.description}</Text>
                  </Stack>
                </Card>
              </div>
            ))}
          </SimpleGrid>
        </div>

        <div ref={ctaRef}>
          <Group justify="center" className={`reveal ${ctaVisible ? 'visible' : ''}`}>
            <Button
              component={Link}
              to="/machines"
              size="lg"
              color="brand"
              rightSection={<IconArrowRight size={18} />}
            >
              Ver Todas las Máquinas
            </Button>
          </Group>
        </div>
      </Container>
    </Box>
  );
};

export default FeaturedMachines;
