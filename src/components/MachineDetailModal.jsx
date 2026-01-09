import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
  Chip,
  Button,
  Divider,
  useMediaQuery,
  useTheme,
  Slide,
} from '@mui/material';
import { forwardRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Transición para el modal
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MachineDetailModal = ({ open, onClose, machine }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!machine) return null;

  const handleWhatsAppContact = () => {
    const message = `Hola! Me interesa alquilar el ${machine.name}${machine.brand ? ` ${machine.brand}` : ''}. ¿Podrían brindarme más información?`;
    const whatsappUrl = `${import.meta.env.VITE_WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      maxWidth="md"
      fullWidth
      fullScreen={isSmallMobile}
      PaperProps={{
        sx: {
          borderRadius: isSmallMobile ? 0 : 4,
          m: isSmallMobile ? 0 : 2,
          maxHeight: isSmallMobile ? '100vh' : '90vh',
        },
      }}
    >
      {/* Botón cerrar */}
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          zIndex: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(4px)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 1)',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.2s ease',
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent
        sx={{
          p: 0,
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'grey.100',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'grey.400',
            borderRadius: '4px',
            '&:hover': {
              backgroundColor: 'grey.500',
            },
          },
        }}
      >
        {/* Imagen principal */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: '250px', sm: '350px', md: '400px' },
            overflow: 'hidden',
            backgroundColor: 'grey.900',
          }}
        >
          <img
            src={machine.image}
            alt={machine.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          
          {/* Overlay con gradiente */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '40%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
            }}
          />

          {/* Chip de marca */}
          {machine.brand && (
            <Chip
              label={machine.brand}
              sx={{
                position: 'absolute',
                top: 16,
                left: 16,
                fontWeight: 700,
                backgroundColor: 'white',
                fontSize: '0.9rem',
                px: 1,
                boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
              }}
            />
          )}
        </Box>

        {/* Contenido */}
        <Box sx={{ p: { xs: 2.5, sm: 3, md: 4 } }}>
          {/* Título y descripción */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 1,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                lineHeight: 1.2,
              }}
            >
              {machine.name}
            </Typography>

            {(machine.capacity || machine.fuelType) && (
              <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                {machine.capacity && (
                  <Chip
                    label={machine.capacity}
                    size="small"
                    color="primary"
                    sx={{ fontWeight: 600 }}
                  />
                )}
                {machine.fuelType && (
                  <Chip
                    label={machine.fuelType}
                    size="small"
                    variant="outlined"
                    sx={{ fontWeight: 600 }}
                  />
                )}
              </Box>
            )}

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                lineHeight: 1.8,
                fontSize: { xs: '0.95rem', md: '1rem' },
              }}
            >
              {machine.description}
            </Typography>
          </Box>

          {/* Características principales */}
          {machine.features && machine.features.length > 0 && (
            <>
              <Divider sx={{ my: 3 }} />
              
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                  }}
                >
                  Características Principales
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    pl: 0,
                    m: 0,
                    listStyle: 'none',
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                    gap: 1.5,
                  }}
                >
                  {machine.features.map((feature, index) => (
                    <Box
                      component="li"
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          backgroundColor: 'primary.main',
                          mt: 0.8,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: '0.9rem', md: '0.95rem' },
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </>
          )}

          {/* Especificaciones técnicas */}
          {machine.specs && Object.keys(machine.specs).length > 0 && (
            <>
              <Divider sx={{ my: 3 }} />
              
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                  }}
                >
                  Especificaciones Técnicas
                </Typography>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: 'repeat(2, 1fr)',
                      sm: 'repeat(3, 1fr)',
                    },
                    gap: 2,
                  }}
                >
                  {Object.entries(machine.specs).map(([key, value]) => (
                    <Box key={key}>
                      <Typography
                        variant="overline"
                        sx={{
                          fontWeight: 600,
                          color: 'text.secondary',
                          display: 'block',
                          fontSize: '0.7rem',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: '0.9rem', md: '1rem' },
                        }}
                      >
                        {value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </>
          )}

          {/* Botón de WhatsApp */}
          <Box
            sx={{
              mt: 3,
              pt: 3,
              borderTop: '1px solid',
              borderColor: 'grey.200',
            }}
          >
            <Button
              variant="contained"
              size="large"
              fullWidth
              startIcon={<WhatsAppIcon />}
              onClick={handleWhatsAppContact}
              sx={{
                py: { xs: 1.5, md: 1.8 },
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                fontWeight: 600,
                backgroundColor: '#25D366',
                color: 'white',
                borderRadius: 3,
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
                '&:hover': {
                  backgroundColor: '#1fb855',
                  boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Consultar Disponibilidad
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default MachineDetailModal;
