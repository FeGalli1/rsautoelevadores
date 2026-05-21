import { Box, Container, SimpleGrid, Text, Title, Stack, Group, Anchor, Divider, ActionIcon } from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
  IconPhone,
  IconMapPin,
} from '@tabler/icons-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { icon: <IconBrandFacebook size={20} />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <IconBrandInstagram size={20} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <IconBrandLinkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <IconBrandWhatsapp size={20} />, href: import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/5491112345678', label: 'WhatsApp' },
  ];

  return (
    <Box component="footer" style={{ backgroundColor: '#1a1a1a', color: 'white' }} pt={48} pb={24} mt={64}>
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40}>
          {/* Empresa */}
          <Stack gap="md">
            <Title order={4} style={{ color: '#fdd835', fontWeight: 700 }}>
              {import.meta.env.VITE_COMPANY_NAME || 'RS Autoelevadores'}
            </Title>
            <Text size="sm" style={{ color: '#b0b0b0', lineHeight: 1.8 }}>
              Líderes en alquiler de autoelevadores, mantenimiento de equipos y venta de piezas.
              Brindamos soluciones integrales para tu empresa.
            </Text>
            <Group gap="xs">
              {socials.map(({ icon, href, label }) => (
                <ActionIcon
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  variant="transparent"
                  size="lg"
                  style={{ color: '#fdd835' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#ffeb3b'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#fdd835'; }}
                >
                  {icon}
                </ActionIcon>
              ))}
            </Group>
          </Stack>

          {/* Contacto */}
          <Stack gap="md">
            <Title order={4} style={{ color: '#fdd835', fontWeight: 700 }}>
              Contacto
            </Title>
            <Stack gap="sm">
              <Group gap="sm">
                <IconPhone size={18} style={{ color: '#fdd835', flexShrink: 0 }} />
                <Text size="sm" style={{ color: '#b0b0b0' }}>
                  {import.meta.env.VITE_CONTACT_PHONE_FORMATTED || '+54 911 1234-5678'}
                </Text>
              </Group>
              <Group gap="sm">
                <IconMail size={18} style={{ color: '#fdd835', flexShrink: 0 }} />
                <Text size="sm" style={{ color: '#b0b0b0' }}>
                  {import.meta.env.VITE_CONTACT_EMAIL || 'info@rsautoelevadores.com'}
                </Text>
              </Group>
              <Anchor
                href={import.meta.env.VITE_GOOGLE_MAPS_SEARCH_URL || 'https://maps.google.com/?q=Ruta+8,+El+Jacaranda,+B1669+Pilar,+Buenos+Aires'}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Group gap="sm" align="flex-start">
                  <IconMapPin size={18} style={{ color: '#fdd835', flexShrink: 0, marginTop: 2 }} />
                  <Stack gap={2}>
                    <Text size="sm" style={{ color: '#b0b0b0', lineHeight: 1.6 }}>
                      {import.meta.env.VITE_ADDRESS_STREET || 'Ruta 8, El Jacaranda'}
                    </Text>
                    <Text size="sm" style={{ color: '#b0b0b0', lineHeight: 1.6 }}>
                      {import.meta.env.VITE_ADDRESS_CITY || 'B1669 Pilar, Buenos Aires'}
                    </Text>
                  </Stack>
                </Group>
              </Anchor>
            </Stack>
          </Stack>
        </SimpleGrid>

        <Divider my={32} color="#424242" />

        <Text size="sm" ta="center" style={{ color: '#b0b0b0' }}>
          © {year} {import.meta.env.VITE_COMPANY_NAME || 'RS Autoelevadores'}. Todos los derechos reservados.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
