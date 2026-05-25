import { useState } from 'react';
import {
  Box, Container, Title, Text, TextInput, Textarea, Button,
  Paper, Stack, SimpleGrid, Group, Grid, ThemeIcon, Divider,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import {
  IconSend, IconPhone, IconMail, IconMapPin, IconBrandWhatsapp, IconClock,
} from '@tabler/icons-react';
import { useSEOWithOrganization } from '../hooks/useSEO';
import { contactSEO } from '../config/seoConfig';
import { schemas } from '../utils/seo';

const contactInfo = [
  {
    icon: <IconPhone size={20} />,
    title: 'Teléfono',
    content: import.meta.env.VITE_CONTACT_PHONE_FORMATTED || '+54 911 1234-5678',
    link: `tel:${import.meta.env.VITE_CONTACT_PHONE_RAW || '5491112345678'}`,
  },
  {
    icon: <IconMail size={20} />,
    title: 'Email',
    content: import.meta.env.VITE_CONTACT_EMAIL || 'info@rsautoelevadores.com',
    link: `mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'info@rsautoelevadores.com'}`,
  },
  {
    icon: <IconMapPin size={20} />,
    title: 'Dirección',
    content: import.meta.env.VITE_ADDRESS_SHORT || 'Ruta 8, El Jacaranda, Pilar',
    link: import.meta.env.VITE_GOOGLE_MAPS_SEARCH_URL || 'https://maps.google.com/?q=Ruta+8,+Pilar',
  },
  {
    icon: <IconClock size={20} />,
    title: 'Horario',
    content: 'Lun–Vie 8:00–18:00 · Sáb 8:00–13:00',
    link: null,
  },
];

const Contact = () => {
  useSEOWithOrganization(
    contactSEO,
    schemas.breadcrumb([{ name: 'Inicio', url: '/' }, { name: 'Contacto', url: '/contact' }])
  );

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'El nombre es requerido';
    if (!form.email.trim()) e.email = 'El correo es requerido';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'El correo no es válido';
    if (!form.phone.trim()) e.phone = 'El teléfono es requerido';
    else if (!/^[\d\s\-+()]+$/.test(form.phone)) e.phone = 'El teléfono no es válido';
    if (!form.message.trim()) e.message = 'El mensaje es requerido';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setForm({ name: '', email: '', phone: '', message: '' });
    notifications.show({
      title: '¡Mensaje enviado!',
      message: 'Nos pondremos en contacto a la brevedad.',
      color: 'green',
      autoClose: 6000,
    });
  };

  return (
    <Box bg="gray.0" py={{ base: 24, md: 40 }}>
      <Container size="lg">

        {/* Header compacto */}
        <Stack align="center" ta="center" gap={2} mb={{ base: 16, md: 24 }}>
          <Title order={1} fz={{ base: '1.5rem', sm: '1.8rem', md: '2rem' }}>
            Ponete en Contacto
          </Title>
          <Text c="dimmed" size="sm" maw={460} lh={1.5}>
            Completá el formulario o escribinos por WhatsApp y te respondemos a la brevedad.
          </Text>
        </Stack>

        {/* Layout de dos columnas */}
        <Grid gutter={{ base: 20, md: 32 }} mb={{ base: 32, md: 48 }}>

          {/* Columna formulario */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Paper p={{ base: 'lg', md: 'xl' }} radius="xl" shadow="sm" withBorder h="100%">
              <Title order={3} fz="1.25rem" mb={4}>Envianos tu consulta</Title>
              <Text c="dimmed" size="sm" mb="lg">Te respondemos en menos de 24 horas</Text>

              <form onSubmit={handleSubmit}>
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" mb="md">
                  <TextInput
                    label="Nombre Completo"
                    placeholder="Juan Pérez"
                    value={form.name}
                    onChange={handleChange('name')}
                    error={errors.name}
                    required
                    size="md"
                    radius="md"
                  />
                  <TextInput
                    label="Correo Electrónico"
                    placeholder="juan@empresa.com"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    error={errors.email}
                    required
                    size="md"
                    radius="md"
                  />
                </SimpleGrid>

                <TextInput
                  label="Teléfono"
                  placeholder="+54 911 1234-5678"
                  value={form.phone}
                  onChange={handleChange('phone')}
                  error={errors.phone}
                  required
                  size="md"
                  radius="md"
                  mb="md"
                />

                <Textarea
                  label="Mensaje"
                  placeholder="Contanos qué necesitás y te asesoramos..."
                  value={form.message}
                  onChange={handleChange('message')}
                  error={errors.message}
                  required
                  minRows={5}
                  size="md"
                  radius="md"
                  mb="lg"
                />

                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  rightSection={<IconSend size={18} />}
                  color="brand"
                  radius="md"
                  fw={700}
                >
                  Enviar Mensaje
                </Button>
              </form>
            </Paper>
          </Grid.Col>

          {/* Columna información */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap="md" h="100%">

              {/* WhatsApp CTA */}
              <Paper p="lg" radius="xl" style={{ background: '#25D366', color: 'white' }}>
                <Group gap="md" align="flex-start">
                  <ThemeIcon size={44} radius="xl" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', flexShrink: 0 }}>
                    <IconBrandWhatsapp size={24} />
                  </ThemeIcon>
                  <Stack gap={4}>
                    <Text fw={700} size="md" style={{ color: 'white' }}>Escribinos por WhatsApp</Text>
                    <Text size="sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
                      Respuesta inmediata en horario comercial
                    </Text>
                    <Button
                      mt={8}
                      size="sm"
                      radius="md"
                      style={{ backgroundColor: 'white', color: '#25D366', fontWeight: 700 }}
                      onClick={() => window.open(import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/5491112345678', '_blank')}
                    >
                      Abrir WhatsApp
                    </Button>
                  </Stack>
                </Group>
              </Paper>

              {/* Datos de contacto */}
              <Paper p="lg" radius="xl" shadow="sm" withBorder style={{ flexGrow: 1 }}>
                <Text fw={700} size="sm" c="dimmed" mb="md" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Datos de contacto
                </Text>
                <Stack gap={0}>
                  {contactInfo.map((info, i) => (
                    <Box key={i}>
                      <Group
                        gap="md"
                        py="sm"
                        style={{ cursor: info.link ? 'pointer' : 'default' }}
                        onClick={() => info.link && window.open(info.link, '_blank')}
                      >
                        <ThemeIcon size={36} radius="md" color="brand" variant="light">
                          {info.icon}
                        </ThemeIcon>
                        <Stack gap={1}>
                          <Text size="xs" c="dimmed" fw={600}>{info.title}</Text>
                          <Text size="sm" fw={500}>{info.content}</Text>
                        </Stack>
                      </Group>
                      {i < contactInfo.length - 1 && <Divider />}
                    </Box>
                  ))}
                </Stack>
              </Paper>

            </Stack>
          </Grid.Col>
        </Grid>

        {/* Mapa */}
        <Paper radius="xl" shadow="sm" withBorder style={{ overflow: 'hidden' }}>
          <iframe
            title="Ubicación RS Autoelevadores"
            src={import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1318.2624906707376!2d-58.8500906607857!3d-34.45246106631841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9d7effe69855%3A0x7b14983fd8fd562e!2sRSAUTOELEVADORES!5e0!3m2!1ses-419!2sar!4v1766008198011!5m2!1ses-419!2sar'}
            width="100%"
            height="360"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Paper>

      </Container>
    </Box>
  );
};

export default Contact;
