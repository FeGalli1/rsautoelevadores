import { Box, Container, Title, Text, SimpleGrid, Card, Button, Stack, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconArrowRight } from '@tabler/icons-react';

const machines = [
  { id: 1, name: 'Autoelevador Diésel 3.5 Ton', image: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=500&h=400&fit=crop', description: 'Ideal para trabajos pesados en exteriores' },
  { id: 2, name: 'Autoelevador Eléctrico 2.5 Ton', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=400&fit=crop', description: 'Perfecto para uso en interiores y ambientes cerrados' },
  { id: 3, name: 'Apilador Eléctrico', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&h=400&fit=crop', description: 'Solución eficiente para almacenes y depósitos' },
];

const FeaturedMachines = () => (
  <Box component="section" bg="gray.1" py={{ base: 60, md: 96 }}>
    <Container size="lg">
      <Stack align="center" ta="center" gap="xs" mb={{ base: 48, md: 64 }}>
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

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing={{ base: 20, md: 32 }} mb={48}>
        {machines.map((m) => (
          <Card key={m.id} radius="xl" withBorder className="card-lift" style={{ border: '1px solid #e0e0e0' }}>
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
        ))}
      </SimpleGrid>

      <Group justify="center">
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
    </Container>
  </Box>
);

export default FeaturedMachines;
