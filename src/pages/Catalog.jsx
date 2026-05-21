import { useState, useMemo, useRef } from 'react';
import {
  Box, Container, Title, Text, TextInput, Button,
  SimpleGrid, Stack, Group, Badge, Pagination, Paper,
} from '@mantine/core';
import { IconSearch, IconX } from '@tabler/icons-react';
import ProductCard from '../components/ProductCard';
import { useSEOWithOrganization } from '../hooks/useSEO';
import { catalogSEO } from '../config/seoConfig';
import { schemas } from '../utils/seo';
import catalog from '../data/catalog';

const ITEMS_PER_PAGE = 24;

const CATEGORY_LABELS = {
  'Toyota': 'Toyota',
  'Mitsubishi-Caterpillar': 'Mitsubishi / Caterpillar',
  'Heli': 'Heli',
  'Hangcha': 'Hangcha',
  'Nissan': 'Nissan',
  'GLP-Gas': 'GLP / Gas',
};

const brandCounts = catalog.reduce((acc, p) => {
  acc[p.category] = (acc[p.category] || 0) + 1;
  return acc;
}, {});

const brands = [
  { value: 'all', label: 'Todas', count: catalog.length },
  ...Object.keys(brandCounts).map((k) => ({
    value: k,
    label: CATEGORY_LABELS[k] || k,
    count: brandCounts[k],
  })),
];

const Catalog = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [page, setPage] = useState(1);
  const gridRef = useRef(null);

  useSEOWithOrganization(
    catalogSEO,
    schemas.breadcrumb([
      { name: 'Inicio', url: '/' },
      { name: 'Catálogo de Repuestos', url: '/catalog' },
    ])
  );

  const handleSearch = (val) => { setSearch(val); setPage(1); };
  const handleCategory = (val) => { setCategory(val); setPage(1); };
  const handlePage = (val) => {
    setPage(val);
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return catalog.filter((p) => {
      if (category !== 'all' && p.category !== category) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.codigo.toLowerCase().includes(q) ||
        p.fichaTecnica.toLowerCase().includes(q)
      );
    });
  }, [search, category]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const safePage = Math.min(page, totalPages || 1);
  const pageItems = filtered.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE,
  );

  const hasFilters = search || category !== 'all';

  return (
    <Box bg="gray.0" py={{ base: 32, md: 48 }}>
      <Container size="xl">

        {/* Header */}
        <Stack align="center" ta="center" gap={4} mb={{ base: 24, md: 32 }}>
          <Title order={1} fz={{ base: '1.6rem', sm: '2rem', md: '2.4rem' }}>
            Catálogo de Repuestos
          </Title>
          <Text c="dimmed" size="sm" maw={560} lh={1.6}>
            Buscá por nombre, código o número de modelo y consultanos por WhatsApp.
          </Text>
        </Stack>

        {/* Panel de filtros */}
        <Paper shadow="xs" radius="xl" p={{ base: 'sm', md: 'md' }} mb={20} withBorder style={{ borderColor: '#eee' }}>
          <Stack gap="md">

            {/* Buscador */}
            <TextInput
              placeholder="Buscar por nombre, código o modelo (ej: bomba agua, 8FG25, 7FD25...)"
              leftSection={<IconSearch size={16} />}
              rightSection={
                search ? (
                  <IconX
                    size={16}
                    style={{ cursor: 'pointer', color: '#999' }}
                    onClick={() => handleSearch('')}
                  />
                ) : null
              }
              value={search}
              onChange={(e) => handleSearch(e.currentTarget.value)}
              size="md"
              radius="md"
            />

            {/* Filtro por marca */}
            <Box>
              <Text size="xs" fw={600} c="dimmed" mb={8} style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>
                Filtrar por marca
              </Text>
              <Group gap="xs" wrap="wrap">
                {brands.map((b) => (
                  <Button
                    key={b.value}
                    size="xs"
                    radius="xl"
                    variant={category === b.value ? 'filled' : 'light'}
                    color="brand"
                    onClick={() => handleCategory(b.value)}
                    styles={{ root: { fontWeight: category === b.value ? 700 : 500 } }}
                  >
                    {b.label}
                    <Badge
                      size="xs"
                      ml={5}
                      radius="xl"
                      variant={category === b.value ? 'white' : 'filled'}
                      color={category === b.value ? 'brand' : 'gray'}
                      style={{ fontSize: 10 }}
                    >
                      {b.count}
                    </Badge>
                  </Button>
                ))}
              </Group>
            </Box>

          </Stack>
        </Paper>

        {/* Info de resultados */}
        <Group justify="space-between" mb={14} ref={gridRef}>
          <Text size="sm" c="dimmed">
            {filtered.length === 0
              ? 'Sin resultados'
              : `Mostrando ${(safePage - 1) * ITEMS_PER_PAGE + 1}–${Math.min(safePage * ITEMS_PER_PAGE, filtered.length)} de ${filtered.length} repuestos`}
          </Text>
          {hasFilters && (
            <Button
              size="xs"
              variant="subtle"
              color="gray"
              leftSection={<IconX size={12} />}
              onClick={() => { handleSearch(''); handleCategory('all'); }}
            >
              Limpiar filtros
            </Button>
          )}
        </Group>

        {/* Grid de productos */}
        {pageItems.length > 0 ? (
          <>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={{ base: 16, md: 24 }}>
              {pageItems.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </SimpleGrid>

            {/* Paginación */}
            {totalPages > 1 && (
              <Group justify="center" mt={48}>
                <Pagination
                  value={safePage}
                  onChange={handlePage}
                  total={totalPages}
                  radius="md"
                  color="brand"
                  siblings={1}
                  boundaries={1}
                />
              </Group>
            )}
          </>
        ) : (
          <Stack align="center" py={80} gap="xs">
            <Text size="lg" c="dimmed" fw={500}>No se encontraron repuestos</Text>
            <Text size="sm" c="dimmed">
              Intentá con otros términos o consultanos directamente por WhatsApp
            </Text>
            <Button
              mt="sm"
              variant="light"
              color="brand"
              onClick={() => { handleSearch(''); handleCategory('all'); }}
            >
              Ver todos los repuestos
            </Button>
          </Stack>
        )}

      </Container>
    </Box>
  );
};

export default Catalog;
