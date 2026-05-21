import { Modal, Box, Title, Text, Badge, Button, Divider, SimpleGrid, Stack, Group } from '@mantine/core';
import { IconBrandWhatsapp, IconX } from '@tabler/icons-react';

const MachineDetailModal = ({ opened, onClose, machine }) => {
  if (!machine) return null;

  const handleWhatsApp = () => {
    const msg = `Hola! Me interesa alquilar el ${machine.name}${machine.brand ? ` ${machine.brand}` : ''}. ¿Podrían brindarme más información?`;
    window.open(`${import.meta.env.VITE_WHATSAPP_URL}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="lg"
      radius="lg"
      padding={0}
      fullScreen={typeof window !== 'undefined' && window.innerWidth < 576}
      withCloseButton={false}
      overlayProps={{ backgroundOpacity: 0.5, blur: 2 }}
    >
      {/* Image */}
      <Box style={{ position: 'relative', height: 320, overflow: 'hidden', borderRadius: '16px 16px 0 0' }}>
        <img src={machine.image} alt={machine.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <Box style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)' }} />
        {machine.brand && (
          <Badge style={{ position: 'absolute', top: 14, left: 14, backgroundColor: 'white', color: '#2B2B2B', boxShadow: '0 2px 12px rgba(0,0,0,0.2)' }} size="lg" radius="sm">
            {machine.brand}
          </Badge>
        )}
        <Box
          onClick={onClose}
          style={{
            position: 'absolute', top: 12, right: 12, width: 36, height: 36, borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', transition: 'background-color 0.2s',
          }}
        >
          <IconX size={18} color="#333" />
        </Box>
      </Box>

      {/* Content */}
      <Stack gap="lg" p={{ base: 'md', sm: 'xl' }}>
        <Box>
          <Title order={3} fw={800} mb="xs" fz={{ base: '1.5rem', md: '1.75rem' }}>
            {machine.name}
          </Title>
          <Group gap="xs" mb="sm">
            {machine.capacity && <Badge color="brand" radius="sm">{machine.capacity}</Badge>}
            {machine.fuelType && <Badge variant="outline" color="brand" radius="sm">{machine.fuelType}</Badge>}
          </Group>
          <Text c="dimmed" lh={1.8} size="sm">{machine.description}</Text>
        </Box>

        {machine.features?.length > 0 && (
          <>
            <Divider />
            <Box>
              <Title order={5} fw={700} mb="md">Características Principales</Title>
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
                {machine.features.map((f, i) => (
                  <Group key={i} gap="sm" align="flex-start">
                    <Box style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#A0153E', marginTop: 6, flexShrink: 0 }} />
                    <Text size="sm" c="dimmed" lh={1.6}>{f}</Text>
                  </Group>
                ))}
              </SimpleGrid>
            </Box>
          </>
        )}

        {machine.specs && Object.keys(machine.specs).length > 0 && (
          <>
            <Divider />
            <Box>
              <Title order={5} fw={700} mb="md">Especificaciones Técnicas</Title>
              <SimpleGrid cols={{ base: 2, sm: 3 }} spacing="md">
                {Object.entries(machine.specs).map(([key, val]) => (
                  <Box key={key}>
                    <Text size="xs" c="dimmed" tt="uppercase" fw={600} lts={0.5}>{key}</Text>
                    <Text fw={600} size="sm">{val}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </>
        )}

        <Divider />

        <Button
          fullWidth
          size="lg"
          leftSection={<IconBrandWhatsapp size={20} />}
          onClick={handleWhatsApp}
          style={{ backgroundColor: '#25D366', color: 'white', boxShadow: '0 4px 14px rgba(37,211,102,0.3)' }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1fb855'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#25D366'; }}
        >
          Consultar Disponibilidad
        </Button>
      </Stack>
    </Modal>
  );
};

export default MachineDetailModal;
