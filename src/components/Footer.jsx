import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        pt: 6,
        pb: 3,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Sección Izquierda - Empresa y Redes Sociales */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#fdd835' }}>
              {import.meta.env.VITE_COMPANY_NAME || 'RS Autoelevadores'}
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, color: '#b0b0b0', lineHeight: 1.8 }}>
              Líderes en alquiler de autoelevadores, mantenimiento de equipos y venta de piezas. 
              Brindamos soluciones integrales para tu empresa.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                aria-label="Facebook"
                sx={{ color: '#fdd835', '&:hover': { color: '#ffeb3b' } }}
                href="https://facebook.com"
                target="_blank"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                sx={{ color: '#fdd835', '&:hover': { color: '#ffeb3b' } }}
                href="https://instagram.com"
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                sx={{ color: '#fdd835', '&:hover': { color: '#ffeb3b' } }}
                href="https://linkedin.com"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="WhatsApp"
                sx={{ color: '#fdd835', '&:hover': { color: '#ffeb3b' } }}
                href={import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/5491112345678'}
                target="_blank"
              >
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Sección Derecha - Contacto */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#fdd835' }}>
              Contacto
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PhoneIcon sx={{ fontSize: 20, color: '#fdd835' }} />
                <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                  {import.meta.env.VITE_CONTACT_PHONE_FORMATTED || '+54 911 1234-5678'}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <EmailIcon sx={{ fontSize: 20, color: '#fdd835' }} />
                <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                  {import.meta.env.VITE_CONTACT_EMAIL || 'info@rsautoelevadores.com'}
                </Typography>
              </Box>
              <Box 
                component="a"
                href={import.meta.env.VITE_GOOGLE_MAPS_SEARCH_URL || 'https://maps.google.com/?q=Ruta+8,+El+Jacaranda,+B1669+Pilar,+Buenos+Aires'}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: 1.5,
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#fdd835',
                  }
                }}
              >
                <LocationOnIcon sx={{ fontSize: 20, color: '#fdd835', mt: 0.2 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: '#b0b0b0', lineHeight: 1.6 }}>
                    {import.meta.env.VITE_ADDRESS_STREET || 'Ruta 8, El Jacaranda'}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#b0b0b0', lineHeight: 1.6 }}>
                    {import.meta.env.VITE_ADDRESS_CITY || 'B1669 Pilar, Buenos Aires'}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, backgroundColor: '#424242' }} />

        <Typography variant="body2" align="center" sx={{ color: '#b0b0b0' }}>
          © {currentYear} {import.meta.env.VITE_COMPANY_NAME || 'RS Autoelevadores'}. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
