import { useState, useEffect } from 'react';
import { Box, Burger, Button, Container, Drawer, Stack, Anchor } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { text: 'Inicio',    path: '/' },
  { text: 'Máquinas', path: '/machines' },
  { text: 'Catálogo', path: '/catalog' },
  { text: 'Nosotros', path: '/about' },
  { text: 'Contacto', path: '/contact' },
];

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinkStyle = (path) => ({
    color: location.pathname === path ? '#A0153E' : '#2B2B2B',
    fontWeight: location.pathname === path ? 700 : 500,
    fontSize: '0.95rem',
    padding: '8px 14px',
    borderRadius: 8,
    textDecoration: 'none',
    position: 'relative',
    transition: 'color 0.2s ease, background-color 0.2s ease',
  });

  return (
    <>
      <Box
        component="header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          backgroundColor: 'white',
          boxShadow: scrolled ? '0 4px 12px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.05)',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <Container size="xl" py={scrolled ? 8 : 12} style={{ transition: 'padding 0.3s ease' }}>
          <Box style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {/* Logo */}
            <Anchor
              component={Link}
              to="/"
              style={{
                color: '#A0153E',
                fontWeight: 900,
                fontSize: scrolled ? '1.2rem' : '1.45rem',
                textDecoration: 'none',
                letterSpacing: '-0.5px',
                marginRight: 'auto',
                transition: 'font-size 0.3s ease',
              }}
            >
              RS Autoelevadores
            </Anchor>

            {/* Desktop nav */}
            <Box visibleFrom="md" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {menuItems.map((item) => (
                <Anchor
                  key={item.text}
                  component={Link}
                  to={item.path}
                  style={navLinkStyle(item.path)}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(160,21,62,0.06)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  {item.text}
                </Anchor>
              ))}

              <Button
                component="a"
                href={import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/5491112345678'}
                target="_blank"
                rel="noopener noreferrer"
                leftSection={<IconBrandWhatsapp size={18} />}
                style={{
                  marginLeft: 8,
                  background: 'linear-gradient(135deg, #A0153E 0%, #C71F4E 100%)',
                  boxShadow: '0 4px 14px rgba(160,21,62,0.3)',
                }}
              >
                Cotizar ahora
              </Button>
            </Box>

            {/* Mobile burger */}
            <Burger hiddenFrom="md" opened={opened} onClick={open} color="#A0153E" />
          </Box>
        </Container>
      </Box>

      {/* Spacer */}
      <Box style={{ height: scrolled ? 58 : 72, transition: 'height 0.3s ease' }} />

      {/* Mobile drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="xs"
        title={
          <span style={{ color: '#A0153E', fontWeight: 900, fontSize: '1.2rem' }}>
            RS Autoelevadores
          </span>
        }
        overlayProps={{ backgroundOpacity: 0.4 }}
      >
        <Stack gap="xs" mt="md">
          {menuItems.map((item) => (
            <Anchor
              key={item.text}
              component={Link}
              to={item.path}
              onClick={close}
              style={{
                display: 'block',
                padding: '12px 16px',
                borderRadius: 8,
                fontWeight: location.pathname === item.path ? 700 : 500,
                backgroundColor: location.pathname === item.path ? '#fce8ef' : 'transparent',
                color: location.pathname === item.path ? '#A0153E' : '#2B2B2B',
                textDecoration: 'none',
                fontSize: '1rem',
              }}
            >
              {item.text}
            </Anchor>
          ))}
          <Button
            component="a"
            href={import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/5491112345678'}
            target="_blank"
            rel="noopener noreferrer"
            leftSection={<IconBrandWhatsapp size={18} />}
            fullWidth
            mt="md"
            style={{ background: 'linear-gradient(135deg, #A0153E 0%, #C71F4E 100%)' }}
          >
            Cotizar ahora
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};

export default Header;
