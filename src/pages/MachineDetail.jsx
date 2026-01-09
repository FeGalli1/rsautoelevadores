import { Box, Container, Typography, Button, Chip, Paper, Divider } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useSEOWithOrganization } from '../hooks/useSEO';
import { getMachineSEO } from '../config/seoConfig';
import { schemas } from '../utils/seo';

const MachineDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Datos de ejemplo - en producción vendrían de una API o estado global
  const machines = [
    {
      id: 1,
      name: 'Autoelevador Diésel',
      brand: 'Toyota',
      capacity: '3.5 Ton',
      fuelType: 'Diesel',
      image: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=800&h=600&fit=crop',
      description: 'Autoelevador diésel de alto rendimiento Toyota, ideal para trabajos pesados en exteriores. Motor eficiente con bajo consumo de combustible.',
      features: [
        'Capacidad de carga: 3500 kg',
        'Altura máxima de elevación: 4.5 m',
        'Motor diésel eficiente Toyota',
        'Neumáticos todo terreno',
        'Cabina con protección ROPS/FOPS',
        'Transmisión automática',
      ],
      specs: {
        modelo: '8FD35',
        motor: 'Diésel 4 cilindros',
        potencia: '68 HP',
        peso: '5200 kg',
        longitud: '3.8 m',
        ancho: '1.2 m',
      },
    },
    // Más máquinas...
  ];

  const machine = machines.find((m) => m.id === parseInt(id)) || machines[0];

  // SEO dinámico para esta máquina
  const machineSEO = getMachineSEO(machine);

  // Breadcrumb dinámico
  const breadcrumbSchema = schemas.breadcrumb([
    { name: 'Inicio', url: '/' },
    { name: 'Máquinas', url: '/machines' },
    { name: machine.name, url: `/machines/${machine.id}` },
  ]);

  // Aplicar SEO
  useSEOWithOrganization(machineSEO, breadcrumbSchema);

  const handleWhatsAppContact = () => {
    const message = `Hola! Me interesa alquilar el ${machine.name} ${machine.brand} de ${machine.capacity}. ¿Podrían brindarme más información?`;
    const whatsappUrl = `${import.meta.env.VITE_WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Botón volver */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/machines')}
          sx={{ mb: 4 }}
        >
          Volver a Máquinas
        </Button>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Imagen */}
          <Box>
            <Paper
              elevation={2}
              sx={{
                overflow: 'hidden',
                borderRadius: 4,
                aspectRatio: '4/3',
              }}
            >
              <img
                src={machine.image}
                alt={`${machine.name} ${machine.brand} - Alquiler de autoelevadores`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Paper>
          </Box>

          {/* Información */}
          <Box>
            <Chip
              label={machine.fuelType}
              color="primary"
              size="small"
              sx={{ mb: 2 }}
            />
            
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: 800, mb: 1 }}
            >
              {machine.name}
            </Typography>
            
            <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
              {machine.brand} - {machine.capacity}
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary' }}
            >
              {machine.description}
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Características Principales
            </Typography>

            <Box component="ul" sx={{ pl: 2, mb: 4 }}>
              {machine.features.map((feature, index) => (
                <Typography
                  component="li"
                  key={index}
                  variant="body2"
                  sx={{ mb: 1, color: 'text.secondary' }}
                >
                  {feature}
                </Typography>
              ))}
            </Box>

            <Button
              variant="contained"
              size="large"
              fullWidth
              startIcon={<WhatsAppIcon />}
              onClick={handleWhatsAppContact}
              sx={{
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
              }}
            >
              Consultar Disponibilidad
            </Button>
          </Box>
        </Box>

        {/* Especificaciones técnicas */}
        <Paper
          elevation={1}
          sx={{
            mt: 6,
            p: { xs: 3, md: 4 },
            borderRadius: 4,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
            Especificaciones Técnicas
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 3,
            }}
          >
            {Object.entries(machine.specs).map(([key, value]) => (
              <Box key={key}>
                <Typography
                  variant="overline"
                  sx={{ fontWeight: 600, color: 'text.secondary', display: 'block' }}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default MachineDetail;
