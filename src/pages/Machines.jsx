import { Box, Container, Title, Text, SimpleGrid, Stack } from '@mantine/core';
import MachineCard from '../components/MachineCard';
import machines from '../data/machines';
import { useSEOWithOrganization } from '../hooks/useSEO';
import { machinesSEO } from '../config/seoConfig';
import { schemas } from '../utils/seo';

const Machines = () => {
  useSEOWithOrganization(machinesSEO, schemas.breadcrumb([{ name: 'Inicio', url: '/' }, { name: 'Máquinas', url: '/machines' }]));

  return (
    <Box bg="gray.0" py={{ base: 56, md: 80 }}>
      <Container size="lg">
        <Stack align="center" ta="center" gap="xs" mb={{ base: 48, md: 64 }}>
          <Text size="sm" fw={700} c="brand" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>NUESTRO CATÁLOGO</Text>
          <Title order={1} fz={{ base: '2rem', sm: '2.5rem', md: '3rem' }}>Máquinas en Alquiler</Title>
          <Text c="dimmed" size="lg" maw={780} lh={1.7}>
            Contamos con una amplia variedad de autoelevadores y equipos de manejo de materiales. Todos reciben mantenimiento regular y están en óptimas condiciones.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 20, md: 32 }}>
          {machines.map((m) => (
            <MachineCard key={m.id} machine={m} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Machines;
