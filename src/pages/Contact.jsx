import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  Snackbar,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useSEOWithOrganization } from '../hooks/useSEO';
import { contactSEO } from '../config/seoConfig';
import { schemas } from '../utils/seo';

const Contact = () => {
  // Breadcrumb para SEO
  const breadcrumbSchema = schemas.breadcrumb([
    { name: 'Inicio', url: '/' },
    { name: 'Contacto', url: '/contact' },
  ]);

  // Aplicar SEO con breadcrumbs
  useSEOWithOrganization(contactSEO, breadcrumbSchema);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo no es válido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'El teléfono no es válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Aquí puedes integrar con un servicio de backend o email
      console.log('Formulario enviado:', formData);
      
      // Resetear formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      // Mostrar mensaje de éxito
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const contactInfo = [
    {
      icon: <PhoneIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Teléfono',
      content: import.meta.env.VITE_CONTACT_PHONE_FORMATTED || '+54 911 1234-5678',
      link: `tel:${import.meta.env.VITE_CONTACT_PHONE_RAW || '5491112345678'}`,
    },
    {
      icon: <EmailIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Email',
      content: import.meta.env.VITE_CONTACT_EMAIL || 'info@rsautoelevadores.com',
      link: `mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'info@rsautoelevadores.com'}`,
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Dirección',
      content: import.meta.env.VITE_ADDRESS_SHORT || 'Ruta 8, El Jacaranda, Pilar',
      link: import.meta.env.VITE_GOOGLE_MAPS_SEARCH_URL || 'https://maps.google.com/?q=Ruta+8,+El+Jacaranda,+B1669+Pilar,+Buenos+Aires',
    },
    {
      icon: <WhatsAppIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'WhatsApp',
      content: import.meta.env.VITE_CONTACT_PHONE_FORMATTED || '+54 911 1234-5678',
      link: import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/5491112345678',
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Encabezado */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
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
            HABLEMOS
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
            Ponete en Contacto
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ 
              maxWidth: '650px', 
              mx: 'auto', 
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.7,
              px: { xs: 2, sm: 0 },
            }}
          >
            ¿Necesitás cotizar un servicio o tenés alguna consulta? 
            Completá el formulario y te respondemos a la brevedad.
          </Typography>
        </Box>

        {/* FORMULARIO GRANDE Y PROTAGONISTA - PRIMERO */}
        <Box sx={{ maxWidth: '900px', mx: 'auto', mb: { xs: 6, md: 10 } }}>
          <Paper 
            elevation={3}
            sx={{ 
              p: { xs: 3, sm: 4, md: 6 },
              borderRadius: 4,
              border: '1px solid',
              borderColor: 'grey.200',
            }}
          >
            <Box sx={{ mb: 4, textAlign: 'center' }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 800,
                  fontSize: { xs: '1.75rem', md: '2rem' },
                  mb: 1.5,
                  color: 'text.primary',
                }}
              >
                Envianos tu Consulta
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{ 
                  fontSize: '1rem',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                Completá el formulario y nos comunicaremos en menos de 24 horas
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              {/* Fila 1: Nombre y Email (desktop) */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                  gap: { xs: 2.5, md: 3 },
                  mb: { xs: 2.5, md: 3 },
                }}
              >
                <TextField
                  fullWidth
                  label="Nombre Completo"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  required
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'grey.50',
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Correo Electrónico"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  required
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'grey.50',
                    },
                  }}
                />
              </Box>

              {/* Fila 2: Teléfono */}
              <Box sx={{ mb: { xs: 2.5, md: 3 } }}>
                <TextField
                  fullWidth
                  label="Teléfono"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  required
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'grey.50',
                    },
                  }}
                />
              </Box>

              {/* Fila 3: Mensaje */}
              <Box sx={{ mb: 4 }}>
                <TextField
                  fullWidth
                  label="Mensaje"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={!!errors.message}
                  helperText={errors.message}
                  required
                  multiline
                  rows={6}
                  variant="outlined"
                  placeholder="Contanos qué necesitás y te asesoramos..."
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'grey.50',
                    },
                  }}
                />
              </Box>

              {/* Botón de envío */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                endIcon={<SendIcon />}
                sx={{
                  py: 1.8,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  borderRadius: 3,
                  textTransform: 'none',
                  boxShadow: '0 4px 14px rgba(160, 21, 62, 0.3)',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(160, 21, 62, 0.4)',
                  },
                }}
              >
                Enviar Mensaje
              </Button>
            </form>
          </Paper>
        </Box>

        {/* CARDS DE CONTACTO - 4 en fila (SEGUNDO) */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr', // Mobile: 1 columna
              sm: 'repeat(2, 1fr)', // Tablet: 2 columnas
              md: 'repeat(4, 1fr)', // Desktop: 4 columnas
            },
            gap: { xs: 2, md: 2.5 },
            mb: { xs: 6, md: 8 },
          }}
        >
          {contactInfo.map((info, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: { xs: 3, md: 3.5 },
                textAlign: 'center',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: info.link ? 'pointer' : 'default',
                borderRadius: 4,
                border: '2px solid',
                borderColor: 'grey.200',
                backgroundColor: 'white',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: { xs: '140px', md: '160px' },
                '&:hover': info.link ? {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 12px 24px rgba(160, 21, 62, 0.15)',
                  borderColor: 'primary.main',
                  backgroundColor: 'primary.main',
                  color: 'white',
                  '& .MuiSvgIcon-root': {
                    color: 'white',
                    transform: 'scale(1.1)',
                  },
                  '& .MuiTypography-root': {
                    color: 'white',
                  },
                } : {},
              }}
              onClick={() => info.link && window.open(info.link, '_blank')}
            >
              <Box 
                sx={{ 
                  mb: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {info.icon}
              </Box>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  mb: 0.5,
                }}
              >
                {info.title}
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ 
                  fontSize: '0.85rem',
                  fontWeight: 500,
                }}
              >
                {info.content}
              </Typography>
            </Paper>
          ))}
        </Box>

        {/* Mapa de Google Maps */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <Paper 
            elevation={2} 
            sx={{ 
              overflow: 'hidden',
              borderRadius: 4,
              border: '1px solid',
              borderColor: 'grey.200',
            }}
          >
            <iframe
              title="Ubicación RS Autoelevadores"
              src={import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1318.2624906707376!2d-58.8500906607857!3d-34.45246106631841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9d7effe69855%3A0x7b14983fd8fd562e!2sRSAUTOELEVADORES!5e0!3m2!1ses-419!2sar!4v1766008198011!5m2!1ses-419!2sar"}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Paper>
        </Box>
      </Container>

      {/* Snackbar de éxito */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          sx={{ 
            width: '100%',
            borderRadius: 3,
            fontSize: '1rem',
          }}
        >
          ¡Mensaje enviado con éxito! Nos pondremos en contacto a la brevedad.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
