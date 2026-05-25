import { useState } from 'react';
import { Card, Badge, Title, Text, Button, Stack, Box, Group, Modal } from '@mantine/core';
import { IconBrandWhatsapp, IconFileText } from '@tabler/icons-react';

const ProductCard = ({ product }) => {
  const [opened, setOpened] = useState(false);

  const consultarWhatsApp = (e) => {
    e?.stopPropagation();
    const codePart = product.codigo ? ` (código: ${product.codigo})` : '';
    const msg = `Hola! Estoy interesado en el repuesto: ${product.name}${codePart}. ¿Me pueden dar más información?`;
    const num = import.meta.env.VITE_WHATSAPP_NUMBER || '5491112345678';
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <Text fw={700} fz="0.95rem" style={{ textTransform: 'uppercase', lineHeight: 1.4, paddingRight: 8 }}>
            {product.name}
          </Text>
        }
        size="xl"
        radius="lg"
        padding="lg"
      >
        <Box
          mb="md"
          style={{
            borderRadius: 8,
            overflow: 'hidden',
            backgroundColor: '#f5f5f5',
            height: 260,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ maxWidth: '100%', maxHeight: 260, objectFit: 'contain', display: 'block' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </Box>

        <Group gap="xs" mb="md">
          <Badge color="brand" radius="sm">{product.category}</Badge>
          {product.codigo && (
            <Badge color="gray" variant="outline" radius="sm" style={{ fontFamily: 'monospace' }}>
              {product.codigo}
            </Badge>
          )}
        </Group>

        <Box style={{ maxHeight: '50vh', overflowY: 'auto' }}>
          <Text size="sm" lh={1.8} style={{ whiteSpace: 'pre-wrap' }} c="dimmed">
            {product.fichaTecnica}
          </Text>
        </Box>

        <Button
          fullWidth
          leftSection={<IconBrandWhatsapp size={18} />}
          mt="xl"
          size="md"
          radius="md"
          onClick={consultarWhatsApp}
          style={{ backgroundColor: '#25D366', color: 'white' }}
        >
          Consultar por WhatsApp
        </Button>
      </Modal>

      <Card
        radius="xl"
        withBorder
        className="card-lift"
        onClick={() => setOpened(true)}
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #e8e8e8',
          cursor: 'pointer',
        }}
      >
        <Card.Section>
          <Box
            style={{
              height: 200,
              overflow: 'hidden',
              backgroundColor: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 8,
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </Box>
        </Card.Section>

        <Stack gap={6} pt="sm" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Group gap={6} align="center">
            <Badge color="brand" radius="sm" size="xs">{product.category}</Badge>
            {product.codigo && (
              <Text size="xs" c="dimmed" style={{ fontFamily: 'monospace' }}>
                {product.codigo}
              </Text>
            )}
          </Group>

          <Title
            order={6}
            fw={600}
            fz="0.82rem"
            lineClamp={2}
            style={{ textTransform: 'uppercase', letterSpacing: '0.3px', lineHeight: 1.45 }}
          >
            {product.name}
          </Title>

          <Stack gap={5} mt="auto" pt="xs">
            <Button
              variant="light"
              color="brand"
              size="xs"
              leftSection={<IconFileText size={13} />}
              radius="md"
              fullWidth
              onClick={(e) => { e.stopPropagation(); setOpened(true); }}
            >
              Ver ficha técnica
            </Button>
            <Button
              fullWidth
              leftSection={<IconBrandWhatsapp size={15} />}
              size="xs"
              radius="md"
              onClick={consultarWhatsApp}
              style={{ backgroundColor: '#25D366', color: 'white' }}
            >
              Consultar
            </Button>
          </Stack>
        </Stack>
      </Card>
    </>
  );
};

export default ProductCard;
