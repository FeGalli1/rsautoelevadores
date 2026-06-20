import { useRef, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import Autoplay from 'embla-carousel-autoplay';
import { Box, Container, Title, Text, Stack, Card, Badge, Button, Group } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import MachineDetailModal from './MachineDetailModal';
import machines from '../data/machines';
import useScrollReveal from '../hooks/useScrollReveal';

const MachineSlideCard = ({ machine }) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Card
        radius="xl"
        withBorder
        style={{
          border: '1px solid #e8e8e8',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Card.Section style={{ position: 'relative', height: 210, overflow: 'hidden', flexShrink: 0 }}>
          <img
            src={machine.image}
            alt={machine.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <Box
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '50%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent)',
            }}
          />
          {machine.brand && (
            <Badge
              style={{
                position: 'absolute',
                top: 12,
                left: 12,
                backgroundColor: 'white',
                color: '#2B2B2B',
                boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
              }}
              radius="sm"
            >
              {machine.brand}
            </Badge>
          )}
        </Card.Section>

        <Stack gap="sm" p="lg" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Group gap={6}>
            {machine.capacity && (
              <Badge color="brand" radius="sm" size="sm">
                {machine.capacity}
              </Badge>
            )}
            {machine.fuelType && (
              <Badge variant="outline" color="brand" radius="sm" size="sm">
                {machine.fuelType}
              </Badge>
            )}
          </Group>

          <Title order={4} fw={700} fz="1.05rem" lineClamp={2} style={{ flexGrow: 1 }}>
            {machine.name}
          </Title>

          <Button
            variant="outline"
            color="brand"
            size="sm"
            rightSection={<IconArrowRight size={14} />}
            onClick={() => setOpened(true)}
            mt="xs"
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

const FeaturedMachines = () => {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));
  const [headerRef, headerVisible] = useScrollReveal(0.1);
  const [carouselRef, carouselVisible] = useScrollReveal(0.05);

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
              NUESTRAS MÁQUINAS
            </Text>
            <Title order={2} fz={{ base: '1.75rem', sm: '2.2rem', md: '2.5rem' }}>
              Algunas de Nuestras Máquinas
            </Title>
            <Text c="dimmed" size="lg" maw={680} lh={1.7}>
              Equipos disponibles de 1.5 a 7 toneladas
            </Text>
          </Stack>
        </div>

        <div ref={carouselRef} className={`reveal ${carouselVisible ? 'visible' : ''}`}>
          <Carousel
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            slideSize={{ base: '100%', sm: '50%', md: '33.333%' }}
            slideGap={{ base: 'md', md: 'lg' }}
            loop
            withIndicators
            align="start"
            styles={{
              indicator: {
                width: 8,
                height: 8,
                backgroundColor: '#ccc',
                '&[data-active]': { backgroundColor: '#A0153E', width: 20 },
              },
              indicators: { bottom: -36 },
              controls: { top: '45%' },
            }}
          >
            {machines.map((m) => (
              <Carousel.Slide key={m.id} style={{ paddingBottom: 8 }}>
                <MachineSlideCard machine={m} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </Container>
    </Box>
  );
};

export default FeaturedMachines;
