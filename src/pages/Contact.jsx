import { useState } from 'react';
import { Box, Container, Title, Text, TextInput, Textarea, Button, Paper, Stack, SimpleGrid, Group } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconSend, IconPhone, IconMail, IconMapPin, IconBrandWhatsapp } from '@tabler/icons-react';
import { useSEOWithOrganization } from '../hooks/useSEO';
import { contactSEO } from '../config/seoConfig';
import { schemas } from '../utils/seo';

const contactInfo = [
  { icon: <IconPhone size={40} />, title: 'Teléfono', content: import.meta.env.VITE_CONTACT_PHONE_FORMATTED || '+54 911 1234-5678', link: `tel:${import.meta.env.VITE_CONTACT_PHONE_RAW || '5491112345678'}` },
  { icon: <IconMail size={40} />, title: 'Email', content: import.meta.env.VITE_CONTACT_EMAIL || 'info@rsautoelevadores.com', link: `mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'info@rsautoelevadores.com'}` },
  { icon: <IconMapPin size={40} />, title: 'Dirección', content: import.meta.env.VITE_ADDRESS_SHORT || 'Ruta 8, El Jacaranda, Pilar', link: import.meta.env.VITE_GOOGLE_MAPS_SEARCH_URL || 'https://maps.google.com/?q=Ruta+8,+Pilar' },
  { icon: <IconBrandWhatsapp size={40} />, title: 'WhatsApp', content: import.meta.env.VITE_CONTACT_PHONE_FORMATTED || '+54 911 1234-5678', link: import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/5491112345678' },
];

const Contact = () => {
  useSEOWithOrganization(contactSEO, schemas.breadcrumb([{ name: 'Inicio', url: '/' }, { name: 'Contacto', url: '/contact' }]));

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
    <Box bg="gray.0" py={{ base: 56, md: 88 }}>
      <Container size="lg">
        {/* Header */}
        <Stack align="center" ta="center" gap="xs" mb={{ base: 48, md: 64 }}>
          <Text size="sm" fw={700} c="brand" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>HABLEMOS</Text>
          <Title order={1} fz={{ base: '2rem', sm: '2.5rem', md: '3rem' }}>Ponete en Contacto</Title>
          <Text c="dimmed" size="lg" maw={640} lh={1.7}>
            ¿Necesitás cotizar un servicio o tenés alguna consulta? Completá el formulario y te respondemos a la brevedad.
          </Text>
        </Stack>

        {/* Form */}
        <Paper maw={880} mx="auto" p={{ base: 'lg', sm: 'xl', md: 56 }} radius="xl" shadow="sm" mb={{ base: 48, md: 72 }} withBorder>
          <Stack gap="xs" mb="xl" ta="center">
            <Title order={3} fz={{ base: '1.6rem', md: '1.9rem' }}>Envianos tu Consulta</Title>
            <Text c="dimmed">Completá el formulario y nos comunicaremos en menos de 24 horas</Text>
          </Stack>

          <form onSubmit={handleSubmit}>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md" mb="md">
              <TextInput
                label="Nombre Completo"
                placeholder="Juan Pérez"
                value={form.name}
                onChange={handleChange('name')}
                error={errors.name}
                required
                size="md"
                radius="md"
                styles={{ input: { backgroundColor: '#fafafa' } }}
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
                styles={{ input: { backgroundColor: '#fafafa' } }}
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
              styles={{ input: { backgroundColor: '#fafafa' } }}
            />

            <Textarea
              label="Mensaje"
              placeholder="Contanos qué necesitás y te asesoramos..."
              value={form.message}
              onChange={handleChange('message')}
              error={errors.message}
              required
              minRows={6}
              size="md"
              radius="md"
              mb="xl"
              styles={{ input: { backgroundColor: '#fafafa' } }}
            />

            <Button
              type="submit"
              fullWidth
              size="lg"
              rightSection={<IconSend size={18} />}
              color="brand"
              style={{ fontWeight: 700 }}
            >
              Enviar Mensaje
            </Button>
          </form>
        </Paper>

        {/* Contact cards */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={{ base: 16, md: 20 }} mb={{ base: 48, md: 64 }}>
          {contactInfo.map((info, i) => (
            <Paper
              key={i}
              withBorder
              p="lg"
              radius="xl"
              ta="center"
              className="contact-card"
              style={{ border: '2px solid #e0e0e0', cursor: 'pointer' }}
              onClick={() => window.open(info.link, '_blank')}
            >
              <Stack align="center" gap="sm">
                <Box style={{ color: '#A0153E' }}>{info.icon}</Box>
                <Text fw={700} size="sm">{info.title}</Text>
                <Text size="sm" c="dimmed">{info.content}</Text>
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>

        {/* Map */}
        <Paper radius="xl" shadow="sm" withBorder style={{ overflow: 'hidden' }}>
          <iframe
            title="Ubicación RS Autoelevadores"
            src={import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1318.2624906707376!2d-58.8500906607857!3d-34.45246106631841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9d7effe69855%3A0x7b14983fd8fd562e!2sRSAUTOELEVADORES!5e0!3m2!1ses-419!2sar!4v1766008198011!5m2!1ses-419!2sar'}
            width="100%"
            height="400"
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
