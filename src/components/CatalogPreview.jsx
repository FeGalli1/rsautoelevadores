import { useEffect, useState } from 'react';
import { Box, Container, Title, Text, SimpleGrid, Button, Group, Stack } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconArrowRight } from '@tabler/icons-react';
import catalog from '../data/catalog';
import useScrollReveal from '../hooks/useScrollReveal';
import ProductCard from './ProductCard';

const BRANDS = ['Toyota', 'Mitsubishi-Caterpillar', 'Heli', 'Hangcha', 'Nissan', 'GLP-Gas'];

const featuredProducts = BRANDS.map(brand =>
  catalog.find(p => p.category === brand)
).filter(Boolean);

const useCountUp = (target, isVisible) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let frame;
    const start = performance.now();
    const duration = 1400;
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
      else setCount(target);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, isVisible]);
  return count;
};

const StatItem = ({ value, suffix, label, isVisible, delay }) => {
  const count = useCountUp(value, isVisible);
  return (
    <Stack
      align="center"
      gap={4}
      className={`reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: delay }}
    >
      <Text
        fz={{ base: '2.2rem', md: '2.8rem' }}
        fw={900}
        c="brand"
        lh={1}
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {count}{suffix}
      </Text>
      <Text size="sm" c="dimmed" ta="center" fw={500}>{label}</Text>
    </Stack>
  );
};

const CatalogPreview = () => {
  const [headerRef, headerVisible] = useScrollReveal(0.1);
  const [statsRef, statsVisible] = useScrollReveal(0.2);
  const [gridRef, gridVisible] = useScrollReveal(0.05);
  const [ctaRef, ctaVisible] = useScrollReveal(0.2);

  return (
    <Box component="section" bg="white" py={{ base: 64, md: 96 }}>
      <Container size="lg">

        {/* Header */}
        <div ref={headerRef}>
          <Stack
            align="center"
            ta="center"
            gap="xs"
            mb={{ base: 40, md: 60 }}
            className={`reveal ${headerVisible ? 'visible' : ''}`}
          >
            <Text size="sm" fw={700} c="brand" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>
              CATÁLOGO DE REPUESTOS
            </Text>
            <Title order={2} fz={{ base: '1.75rem', sm: '2.2rem', md: '2.5rem' }}>
              Repuestos para Todas las Marcas
            </Title>
            <Text c="dimmed" size="lg" maw={640} lh={1.7}>
              Stock permanente de piezas originales y compatibles. Consultanos por WhatsApp y recibís respuesta al instante.
            </Text>
          </Stack>
        </div>

        {/* Stats */}
        <div ref={statsRef}>
          <SimpleGrid
            cols={{ base: 3 }}
            spacing={{ base: 16, md: 48 }}
            mb={{ base: 48, md: 72 }}
            style={{
              padding: '28px 0',
              borderTop: '1px solid #f0f0f0',
              borderBottom: '1px solid #f0f0f0',
            }}
          >
            <StatItem value={catalog.length} suffix="+" label="repuestos disponibles" isVisible={statsVisible} delay="0s" />
            <StatItem value={6} suffix="" label="marcas cubiertas" isVisible={statsVisible} delay="0.12s" />
            <StatItem value={15} suffix="+" label="años de experiencia" isVisible={statsVisible} delay="0.24s" />
          </SimpleGrid>
        </div>

        {/* Product Grid */}
        <div ref={gridRef}>
          <SimpleGrid cols={{ base: 2, sm: 2, md: 3 }} spacing={{ base: 16, md: 28 }} mb={48}>
            {featuredProducts.map((product, i) => (
              <div
                key={product.id}
                className={`reveal ${gridVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.09}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </SimpleGrid>
        </div>

        {/* CTA */}
        <div ref={ctaRef}>
          <Group
            justify="center"
            className={`reveal ${ctaVisible ? 'visible' : ''}`}
          >
            <Button
              component={Link}
              to="/catalog"
              size="lg"
              color="brand"
              rightSection={<IconArrowRight size={18} />}
            >
              Ver Catálogo Completo
            </Button>
          </Group>
        </div>

      </Container>
    </Box>
  );
};

export default CatalogPreview;
