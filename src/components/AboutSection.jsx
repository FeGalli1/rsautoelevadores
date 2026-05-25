import { Box, Container, Title, Text, SimpleGrid, Stack } from '@mantine/core';
import { IconTruck, IconTool, IconPackage } from '@tabler/icons-react';
import ServiceCard from './ServiceCard';
import useScrollReveal from '../hooks/useScrollReveal';

const services = [
  {
    icon: <IconTruck size={36} />,
    title: 'Alquiler de Autoelevadores',
    description: 'Equipos de última generación para potenciar tu operación. Flexibilidad total en plazos y modelos.',
  },
  {
    icon: <IconTool size={36} />,
    title: 'Mantenimiento Profesional',
    description: 'Técnicos certificados y repuestos originales. Minimizá tiempos de inactividad.',
  },
  {
    icon: <IconPackage size={36} />,
    title: 'Venta de Repuestos',
    description: 'Stock permanente de piezas originales. Entrega inmediata para todas las marcas.',
  },
];

const AboutSection = () => {
  const [headerRef, headerVisible] = useScrollReveal(0.1);
  const [gridRef, gridVisible] = useScrollReveal(0.1);

  return (
    <Box component="section" bg="gray.0" py={{ base: 60, md: 96 }}>
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
              NUESTROS SERVICIOS
            </Text>
            <Title order={2} fz={{ base: '1.8rem', sm: '2.2rem', md: '2.75rem' }}>
              Soluciones Integrales
            </Title>
            <Text c="dimmed" size="lg" maw={680} lh={1.7}>
              Más de 15 años de experiencia respaldándonos como líderes en equipamiento industrial.
              Tu partner de confianza para cada desafío logístico.
            </Text>
          </Stack>
        </div>

        <div ref={gridRef}>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing={{ base: 20, md: 32 }}>
            {services.map((s, i) => (
              <div
                key={i}
                className={`reveal ${gridVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <ServiceCard {...s} />
              </div>
            ))}
          </SimpleGrid>
        </div>
      </Container>
    </Box>
  );
};

export default AboutSection;
