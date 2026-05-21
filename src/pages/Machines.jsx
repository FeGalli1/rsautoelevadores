import { Box, Container, Title, Text, SimpleGrid, Stack } from '@mantine/core';
import MachineCard from '../components/MachineCard';
import { useSEOWithOrganization } from '../hooks/useSEO';
import { machinesSEO } from '../config/seoConfig';
import { schemas } from '../utils/seo';

const machines = [
  { id: 1, name: 'Autoelevador Diésel 3.5 Ton', brand: 'Toyota', capacity: '3.5 Ton', fuelType: 'Diesel', image: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=500&h=400&fit=crop', description: 'Autoelevador diésel de alto rendimiento Toyota, ideal para trabajos pesados en exteriores.', features: ['Capacidad de carga: 3500 kg', 'Altura máxima: 4.5 m', 'Motor diésel Toyota', 'Neumáticos todo terreno', 'Cabina ROPS/FOPS', 'Transmisión automática'], specs: { modelo: '8FD35', motor: 'Diésel 4 cil.', potencia: '68 HP', peso: '5200 kg', longitud: '3.8 m', ancho: '1.2 m' } },
  { id: 2, name: 'Autoelevador Eléctrico 2.5 Ton', brand: 'Yale', capacity: '2.5 Ton', fuelType: 'Eléctrico', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=400&fit=crop', description: 'Autoelevador eléctrico silencioso Yale, perfecto para interiores y ambientes cerrados.', features: ['Capacidad: 2500 kg', 'Altura máxima: 4.0 m', 'Cero emisiones', 'Bajo nivel de ruido', 'Batería de larga duración', 'Frenado regenerativo'], specs: { modelo: 'ERC25', motor: 'Eléctrico AC', voltaje: '48V', peso: '3800 kg', longitud: '3.2 m', ancho: '1.1 m' } },
  { id: 3, name: 'Apilador Eléctrico', brand: 'Crown', capacity: '1.5 Ton', fuelType: 'Eléctrico', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&h=400&fit=crop', description: 'Apilador eléctrico compacto Crown, solución eficiente para almacenes y depósitos.', features: ['Capacidad: 1500 kg', 'Altura máxima: 3.5 m', 'Diseño compacto', 'Fácil maniobrabilidad', 'Plataforma plegable', 'Control intuitivo'], specs: { modelo: 'SW1500', motor: 'Eléctrico', voltaje: '24V', peso: '950 kg', longitud: '2.1 m', ancho: '0.8 m' } },
  { id: 4, name: 'Autoelevador GLP 2.0 Ton', brand: 'Hyster', capacity: '2.0 Ton', fuelType: 'GLP', image: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=500&h=400&fit=crop', description: 'Autoelevador a gas licuado Hyster, versátil para uso interior y exterior.', features: ['Capacidad: 2000 kg', 'Altura máxima: 3.5 m', 'Bajo costo operativo', 'Versatilidad de uso', 'Emisiones reducidas', 'Arranque suave'], specs: { modelo: 'H2.0FT', motor: 'GLP 4 cil.', potencia: '52 HP', peso: '3500 kg', longitud: '3.5 m', ancho: '1.1 m' } },
  { id: 5, name: 'Autoelevador Diésel 5.0 Ton', brand: 'Caterpillar', capacity: '5.0 Ton', fuelType: 'Diesel', image: 'https://images.unsplash.com/photo-1581092160607-ee67e4cca44b?w=500&h=400&fit=crop', description: 'Autoelevador Caterpillar de alta capacidad para cargas muy pesadas.', features: ['Capacidad: 5000 kg', 'Altura máxima: 5.0 m', 'Potencia superior', 'Construcción robusta', 'Neumáticos de alta resistencia', 'Cabina reforzada'], specs: { modelo: 'DP50N', motor: 'Diésel 6 cil.', potencia: '95 HP', peso: '7200 kg', longitud: '4.2 m', ancho: '1.4 m' } },
  { id: 6, name: 'Transpaleta Eléctrica', brand: 'Toyota', capacity: '2.0 Ton', fuelType: 'Eléctrico', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&h=400&fit=crop', description: 'Transpaleta eléctrica Toyota para movimiento ágil de pallets.', features: ['Capacidad: 2000 kg', 'Diseño ergonómico', 'Batería de larga duración', 'Ideal para distancias cortas', 'Timón ajustable', 'Ruedas de poliuretano'], specs: { modelo: 'LWE200', motor: 'Eléctrico', voltaje: '24V', peso: '320 kg', longitud: '1.6 m', ancho: '0.7 m' } },
  { id: 7, name: 'Autoelevador Retráctil', brand: 'Yale', capacity: '1.8 Ton', fuelType: 'Eléctrico', image: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=500&h=400&fit=crop', description: 'Autoelevador retráctil Yale para optimización de espacios en almacenes.', features: ['Capacidad: 1800 kg', 'Altura máxima: 8.0 m', 'Pasillos estrechos', 'Máxima optimización', 'Mástil retráctil', 'Visibilidad panorámica'], specs: { modelo: 'MR18', motor: 'Eléctrico AC', voltaje: '48V', peso: '4100 kg', longitud: '2.8 m', ancho: '1.2 m' } },
  { id: 8, name: 'Apilador Manual', brand: 'Crown', capacity: '1.0 Ton', fuelType: 'Manual', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&h=400&fit=crop', description: 'Apilador manual Crown económico para cargas ligeras.', features: ['Capacidad: 1000 kg', 'Altura máxima: 1.6 m', 'Sin necesidad de energía', 'Mantenimiento mínimo', 'Sistema hidráulico manual', 'Acero reforzado'], specs: { modelo: 'SM1000', tipo: 'Hidráulico manual', elevacion: 'Manual', peso: '180 kg', longitud: '1.5 m', ancho: '0.7 m' } },
  { id: 9, name: 'Autoelevador Todo Terreno', brand: 'Komatsu', capacity: '3.0 Ton', fuelType: 'Diesel', image: 'https://images.unsplash.com/photo-1581092160607-ee67e4cca44b?w=500&h=400&fit=crop', description: 'Autoelevador Komatsu especial para terrenos irregulares y construcción.', features: ['Capacidad: 3000 kg', 'Altura máxima: 4.0 m', 'Tracción 4x4', 'Neumáticos todo terreno', 'Suspensión avanzada', 'Ideal para construcción'], specs: { modelo: 'FD30T-16', motor: 'Diésel 4 cil. turbo', potencia: '72 HP', peso: '5500 kg', longitud: '3.9 m', ancho: '1.3 m' } },
];

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
