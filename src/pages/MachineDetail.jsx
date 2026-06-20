import { Box, Container, Title, Text, Button, Badge, Paper, Divider, SimpleGrid, Stack, Group } from '@mantine/core';
import { useParams, useNavigate } from 'react-router-dom';
import { IconArrowLeft, IconBrandWhatsapp } from '@tabler/icons-react';
import { useSEOWithOrganization } from '../hooks/useSEO';
import { getMachineSEO } from '../config/seoConfig';
import { schemas } from '../utils/seo';
import machines from '../data/machines';

const MachineDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const machine = machines.find((m) => m.id === parseInt(id)) || machines[0];

  useSEOWithOrganization(getMachineSEO(machine), schemas.breadcrumb([
    { name: 'Inicio', url: '/' },
    { name: 'Máquinas', url: '/machines' },
    { name: machine.name, url: `/machines/${machine.id}` },
  ]));

  const handleWhatsApp = () => {
    const msg = `Hola! Me interesa alquilar el ${machine.name} ${machine.brand} de ${machine.capacity}. ¿Podrían brindarme más información?`;
    window.open(`${import.meta.env.VITE_WHATSAPP_URL}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <Box bg="gray.0" py={{ base: 56, md: 88 }}>
      <Container size="lg">
        <Button
          variant="subtle"
          color="brand"
          leftSection={<IconArrowLeft size={16} />}
          onClick={() => navigate('/machines')}
          mb="xl"
        >
          Volver a Máquinas
        </Button>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 32, md: 56 }}>
          {/* Image */}
          <Box style={{ borderRadius: 20, overflow: 'hidden', height: 'clamp(260px, 40vw, 460px)', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
            <img
              src={machine.image}
              alt={`${machine.name} ${machine.brand}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>

          {/* Info */}
          <Stack gap="md" justify="center">
            <Badge color="brand" size="lg" radius="sm">{machine.fuelType}</Badge>
            <Title order={1} fz={{ base: '2rem', md: '2.5rem' }} fw={900} lh={1.2}>{machine.name}</Title>
            <Text size="xl" c="dimmed" fw={500}>{machine.brand} — {machine.capacity}</Text>

            <Divider />

            <Title order={4} fw={700}>Características Principales</Title>
            <Stack gap="xs">
              {machine.features.map((f, i) => (
                <Group key={i} gap="sm">
                  <Box style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#A0153E', flexShrink: 0 }} />
                  <Text size="sm" c="dimmed">{f}</Text>
                </Group>
              ))}
            </Stack>

            <Button
              size="lg"
              fullWidth
              leftSection={<IconBrandWhatsapp size={20} />}
              onClick={handleWhatsApp}
              mt="sm"
              style={{ backgroundColor: '#25D366', color: 'white' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1fb855'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#25D366'; }}
            >
              Consultar Disponibilidad
            </Button>
          </Stack>
        </SimpleGrid>

        {/* Specs */}
        <Paper mt={56} p={{ base: 'lg', md: 'xl' }} radius="xl" shadow="sm" withBorder>
          <Title order={3} fw={700} mb="xl">Especificaciones Técnicas</Title>
          <SimpleGrid cols={{ base: 2, sm: 3, md: 3 }} spacing="xl">
            {Object.entries(machine.specs).map(([key, val]) => (
              <Box key={key}>
                <Text size="xs" c="dimmed" tt="uppercase" fw={600} lts={0.5} mb={4}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Text>
                <Text fw={600} size="md">{val}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Paper>
      </Container>
    </Box>
  );
};

export default MachineDetail;
