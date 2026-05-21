import { useState, useEffect } from 'react';
import { ActionIcon, Tooltip, Transition } from '@mantine/core';
import { IconBrandWhatsapp } from '@tabler/icons-react';

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5491112345678';
  const message = import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE || '¡Hola! Me gustaría obtener más información sobre sus servicios.';

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(t);
  }, []);

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Transition mounted={visible} transition="slide-up" duration={500}>
      {(styles) => (
        <Tooltip label="Chateá con nosotros" position="left" withArrow>
          <ActionIcon
            onClick={handleClick}
            aria-label="Contactar por WhatsApp"
            radius="xl"
            style={{
              ...styles,
              position: 'fixed',
              bottom: 28,
              right: 28,
              width: 60,
              height: 60,
              backgroundColor: '#25D366',
              color: 'white',
              zIndex: 1000,
              animation: 'waPulse 2.2s infinite',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.12)';
              e.currentTarget.style.backgroundColor = '#20BA5A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '#25D366';
            }}
          >
            <IconBrandWhatsapp size={30} />
          </ActionIcon>
        </Tooltip>
      )}
    </Transition>
  );
};

export default WhatsAppButton;
