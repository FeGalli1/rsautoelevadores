import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ProductCard from '../components/ProductCard';
import { useSEOWithOrganization } from '../hooks/useSEO';
import { catalogSEO } from '../config/seoConfig';
import { schemas } from '../utils/seo';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  // Breadcrumb para SEO
  const breadcrumbSchema = schemas.breadcrumb([
    { name: 'Inicio', url: '/' },
    { name: 'Catálogo de Repuestos', url: '/catalog' },
  ]);

  // Aplicar SEO con breadcrumbs
  useSEOWithOrganization(catalogSEO, breadcrumbSchema);

  const products = [
    {
      id: 1,
      name: 'Horquillas Forjadas',
      category: 'Horquillas',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=400&fit=crop',
      description: 'Horquillas forjadas de alta resistencia para autoelevadores.',
      specs: [
        'Material: Acero forjado',
        'Longitud: 1.20 m',
        'Capacidad: hasta 5 ton',
        'Clase III',
      ],
    },
    {
      id: 2,
      name: 'Batería de Tracción 48V',
      category: 'Baterías',
      image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=400&fit=crop',
      description: 'Batería de tracción para autoelevadores eléctricos.',
      specs: [
        'Voltaje: 48V',
        'Capacidad: 500 Ah',
        'Vida útil: 1500 ciclos',
        'Mantenimiento reducido',
      ],
    },
    {
      id: 3,
      name: 'Neumáticos Sólidos',
      category: 'Neumáticos',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=400&fit=crop',
      description: 'Neumáticos sólidos antipinchazos para uso intensivo.',
      specs: [
        'Tipo: Sólido antipinchazo',
        'Medida: 28x9-15',
        'Duración extendida',
        'Sin mantenimiento',
      ],
    },
    {
      id: 4,
      name: 'Filtro de Aceite',
      category: 'Filtros',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=400&fit=crop',
      description: 'Filtro de aceite original para motores diésel.',
      specs: [
        'Compatible con múltiples marcas',
        'Alta eficiencia de filtrado',
        'Cambio cada 250 horas',
        'Calidad OEM',
      ],
    },
    {
      id: 5,
      name: 'Cadena de Elevación',
      category: 'Cadenas',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=400&fit=crop',
      description: 'Cadena de elevación de alta resistencia.',
      specs: [
        'Grado 80',
        'Eslabones reforzados',
        'Tratamiento térmico',
        'Varias medidas disponibles',
      ],
    },
    {
      id: 6,
      name: 'Asiento Operador',
      category: 'Cabina',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=400&fit=crop',
      description: 'Asiento ergonómico con suspensión para operador.',
      specs: [
        'Ajuste de peso',
        'Suspensión neumática',
        'Respaldo ajustable',
        'Tapizado resistente',
      ],
    },
    {
      id: 7,
      name: 'Kit de Luces LED',
      category: 'Iluminación',
      image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=400&fit=crop',
      description: 'Kit completo de luces LED para autoelevadores.',
      specs: [
        'Luces delanteras y traseras',
        'Bajo consumo',
        'Alta luminosidad',
        'Instalación sencilla',
      ],
    },
    {
      id: 8,
      name: 'Cilindro Hidráulico',
      category: 'Hidráulica',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=400&fit=crop',
      description: 'Cilindro hidráulico de elevación de alta calidad.',
      specs: [
        'Doble efecto',
        'Sellado hermético',
        'Vástago cromado',
        'Varias carreras disponibles',
      ],
    },
    {
      id: 9,
      name: 'Mástil de Elevación',
      category: 'Mástiles',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=400&fit=crop',
      description: 'Mástil de elevación dúplex o tríplex.',
      specs: [
        'Altura libre: 2.1 m',
        'Elevación: hasta 6 m',
        'Construcción reforzada',
        'Compatible con varios modelos',
      ],
    },
    {
      id: 10,
      name: 'Bomba Hidráulica',
      category: 'Hidráulica',
      image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=400&fit=crop',
      description: 'Bomba hidráulica de engranajes de alta presión.',
      specs: [
        'Presión: hasta 210 bar',
        'Caudal: 40-60 L/min',
        'Bajo ruido',
        'Alta eficiencia',
      ],
    },
    {
      id: 11,
      name: 'Retenes y Sellos',
      category: 'Repuestos',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=400&fit=crop',
      description: 'Kit completo de retenes y sellos hidráulicos.',
      specs: [
        'Material NBR/Viton',
        'Resistente a altas temperaturas',
        'Kit completo por modelo',
        'Calidad garantizada',
      ],
    },
    {
      id: 12,
      name: 'Radiador Motor',
      category: 'Refrigeración',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=400&fit=crop',
      description: 'Radiador de refrigeración para motores diésel.',
      specs: [
        'Alta eficiencia térmica',
        'Construcción en aluminio',
        'Compatible con varias marcas',
        'Fácil instalación',
      ],
    },
  ];

  const categories = [
    { value: 'all', label: 'Todas las Categorías' },
    { value: 'Horquillas', label: 'Horquillas' },
    { value: 'Baterías', label: 'Baterías' },
    { value: 'Neumáticos', label: 'Neumáticos' },
    { value: 'Filtros', label: 'Filtros' },
    { value: 'Cadenas', label: 'Cadenas' },
    { value: 'Cabina', label: 'Cabina' },
    { value: 'Iluminación', label: 'Iluminación' },
    { value: 'Hidráulica', label: 'Hidráulica' },
    { value: 'Mástiles', label: 'Mástiles' },
    { value: 'Repuestos', label: 'Repuestos' },
    { value: 'Refrigeración', label: 'Refrigeración' },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Encabezado */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 6 } }}>
          <Typography
            variant="overline"
            sx={{ 
              fontSize: '0.9rem',
              fontWeight: 700,
              letterSpacing: '2px',
              color: 'primary.main',
              mb: 1,
              display: 'block',
            }}
          >
            REPUESTOS Y ACCESORIOS
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            sx={{ 
              fontWeight: 800, 
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            Catálogo de Piezas
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto', 
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.7,
              px: { xs: 2, sm: 0 },
            }}
          >
            Ofrecemos una amplia variedad de repuestos y piezas originales para autoelevadores
            de todas las marcas. Calidad garantizada y entrega rápida.
          </Typography>
        </Box>

        {/* Filtros */}
        <Box 
          sx={{ 
            mb: 5, 
            display: 'flex', 
            gap: 2, 
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Buscar piezas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            select
            variant="outlined"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            sx={{ minWidth: { xs: '100%', md: 250 } }}
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* CSS GRID - Productos con ancho uniforme */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr', // Mobile: 1 columna
              sm: 'repeat(2, 1fr)', // Tablet: 2 columnas
              md: 'repeat(3, 1fr)', // Desktop: 3 columnas
            },
            gap: { xs: 2.5, sm: 3, md: 4 },
            alignItems: 'stretch', // Todas las cards con la misma altura
          }}
        >
          {filteredProducts.map((product) => (
            <Box key={product.id}>
              <ProductCard product={product} />
            </Box>
          ))}
        </Box>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography 
              variant="h6" 
              color="text.secondary"
              sx={{ mb: 1 }}
            >
              No se encontraron productos
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Intentá con otros términos de búsqueda o categoría
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Catalog;
