import { Fab, Zoom, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5491112345678';
  const message = import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE || '¡Hola! Me gustaría obtener más información sobre sus servicios.';
  
  useEffect(() => {
    // Mostrar el botón después de un pequeño delay
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Zoom in={visible} timeout={500}>
      <Tooltip title="Chateá con nosotros" placement="left" arrow>
        <Fab
          color="primary"
          aria-label="contactar por whatsapp"
          onClick={handleClick}
          sx={{
            position: 'fixed',
            bottom: { xs: 20, md: 32 },
            right: { xs: 20, md: 32 },
            width: { xs: 56, md: 64 },
            height: { xs: 56, md: 64 },
            backgroundColor: '#25D366',
            color: 'white',
            zIndex: 1000,
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
            transition: 'all 0.3s ease',
            animation: 'pulse 2s infinite',
            '@keyframes pulse': {
              '0%': {
                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
              },
              '50%': {
                boxShadow: '0 4px 30px rgba(37, 211, 102, 0.6)',
                transform: 'scale(1.05)',
              },
              '100%': {
                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
              },
            },
            '&:hover': {
              backgroundColor: '#20BA5A',
              transform: 'scale(1.1)',
              boxShadow: '0 6px 28px rgba(37, 211, 102, 0.5)',
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
        </Fab>
      </Tooltip>
    </Zoom>
  );
};

export default WhatsAppButton;
