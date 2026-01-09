import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { text: 'Inicio', path: '/' },
    { text: 'Máquinas', path: '/machines' },
    { text: 'Catálogo', path: '/catalog' },
    { text: 'Nosotros', path: '/about' },
    { text: 'Contacto', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, pb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              selected={location.pathname === item.path}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                },
              }}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 3 : 0}
        sx={{
          backgroundColor: 'white',
          transition: 'all 0.3s ease',
          py: scrolled ? 0 : { xs: 0, md: 0.5 },
          boxShadow: scrolled 
            ? '0 4px 12px rgba(0,0,0,0.1)' 
            : '0 2px 8px rgba(0,0,0,0.05)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ px: { xs: 0, md: 2 } }}>
            {/* Logo */}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'primary.main',
                fontWeight: 800,
                fontSize: { xs: '1.1rem', md: scrolled ? '1.3rem' : '1.5rem' },
                transition: 'font-size 0.3s ease',
                letterSpacing: '-0.5px',
                mr: { xs: 'auto', md: 4 },
              }}
            >
              RS Autoelevadores
            </Typography>

            {isMobile ? (
              <IconButton
                color="primary"
                aria-label="abrir menú"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                {/* Navegación central */}
                <Box sx={{ display: 'flex', gap: 0.5, mx: 'auto' }}>
                  {menuItems.map((item) => (
                    <Button
                      key={item.text}
                      component={Link}
                      to={item.path}
                      sx={{
                        color: location.pathname === item.path 
                          ? 'primary.main' 
                          : 'text.primary',
                        fontWeight: location.pathname === item.path ? 600 : 500,
                        fontSize: '0.95rem',
                        px: 2.5,
                        py: 1,
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 8,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: location.pathname === item.path ? '60%' : '0%',
                          height: '2px',
                          backgroundColor: 'primary.main',
                          transition: 'width 0.3s ease',
                          borderRadius: 2,
                        },
                        '&:hover': {
                          backgroundColor: 'rgba(160, 21, 62, 0.04)',
                          '&::after': {
                            width: '60%',
                          },
                        },
                      }}
                    >
                      {item.text}
                    </Button>
                  ))}
                </Box>

                {/* CTA destacado */}
                <Button
                  component="a"
                  href={import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/5491112345678'}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    ml: 2,
                    px: 3,
                    py: 1.2,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #A0153E 0%, #C71F4E 100%)',
                    boxShadow: '0 4px 14px rgba(160, 21, 62, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #7A0E2E 0%, #A0153E 100%)',
                      boxShadow: '0 6px 20px rgba(160, 21, 62, 0.4)',
                    },
                  }}
                >
                  Cotizar ahora
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>

      <Toolbar />
    </>
  );
};

export default Header;
