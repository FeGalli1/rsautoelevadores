import { useState } from 'react';
import { Card, Badge, Title, Text, Button, Box, Stack } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import MachineDetailModal from './MachineDetailModal';

const MachineCard = ({ machine }) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Card
        radius="xl"
        withBorder
        className="machine-card card-lift"
        style={{ height: '100%', display: 'flex', flexDirection: 'column', border: '1px solid #e8e8e8' }}
      >
        <Card.Section style={{ position: 'relative', height: 240, overflow: 'hidden' }}>
          <img
            src={machine.image}
            alt={machine.name}
            className="machine-img"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {machine.brand && (
            <Badge
              style={{
                position: 'absolute',
                top: 12,
                left: 12,
                backgroundColor: 'white',
                color: '#2B2B2B',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              }}
              radius="sm"
            >
              {machine.brand}
            </Badge>
          )}
        </Card.Section>

        <Stack gap="xs" p="md" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Title order={4} fw={700} fz="1.1rem">
            {machine.name}
          </Title>

          <Box style={{ flexGrow: 1 }}>
            {machine.features?.slice(0, 3).map((f, i) => (
              <Box key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: i === 0 ? 0 : 4 }}>
                <Box style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: '#A0153E', flexShrink: 0 }} />
                <Text size="xs" c="dimmed">{f}</Text>
              </Box>
            ))}
          </Box>

          <Button
            variant="outline"
            color="brand"
            size="sm"
            rightSection={<IconArrowRight size={14} />}
            onClick={() => setOpened(true)}
            mt="sm"
            style={{ alignSelf: 'flex-start' }}
          >
            Ver detalles
          </Button>
        </Stack>
      </Card>

      <MachineDetailModal opened={opened} onClose={() => setOpened(false)} machine={machine} />
    </>
  );
};

export default MachineCard;
