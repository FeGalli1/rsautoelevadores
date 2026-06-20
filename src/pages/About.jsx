import { Box, Container, Title, Text, Button, Paper, SimpleGrid, Grid, Stack, Group, ThemeIcon } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconHeartHandshake, IconTool, IconPackage, IconShieldCheck, IconBadge, IconGauge, IconHeadset, IconBrandWhatsapp } from '@tabler/icons-react';
import { useSEOWithOrganization } from '../hooks/useSEO';
import { aboutSEO } from '../config/seoConfig';
import { schemas } from '../utils/seo';
import BrandsSection from '../components/BrandsSection';

const services = [
  { icon: <IconHeartHandshake size={40} />, title: 'Alquiler de Autoelevadores', description: 'Unidades diésel y eléctricas de diversas capacidades. Planes flexibles de corto, mediano y largo plazo diseñados para adaptarse al volumen de su operación.' },
  { icon: <IconTool size={40} />, title: 'Servicio Técnico Especializado', description: 'Técnicos certificados para soporte, mantenimiento preventivo y reparaciones de todo tipo, asegurando que tu operación nunca se detenga.' },
  { icon: <IconPackage size={40} />, title: 'Venta de Repuestos y Accesorios', description: 'Stock inmediato de piezas originales y alternativas de alta calidad. Como importadores directos, garantizamos provisión sin depender de terceros.' },
];

const values = [
  { icon: <IconShieldCheck size={32} />, title: 'Compromiso', description: 'Soluciones eficientes y duraderas para cada cliente.' },
  { icon: <IconBadge size={32} />, title: 'Calidad Garantizada', description: 'Equipos de primera y repuestos originales para el mejor rendimiento.' },
  { icon: <IconGauge size={32} />, title: 'Respuesta Rápida', description: 'Tiempos de respuesta óptimos para no detener tu operación.' },
  { icon: <IconHeadset size={32} />, title: 'Soporte Personalizado', description: 'Asesoramiento técnico para encontrar la mejor solución.' },
];

const stats = [
  { value: '+15', label: 'Años de trayectoria' },
  { value: '+500', label: 'Clientes atendidos' },
  { value: '+10', label: 'Marcas líderes' },
  { value: '24/7', label: 'Soporte técnico' },
];

const gallery = [
  { url: '/images/nosotros1.jpg', alt: 'RS Autoelevadores - instalaciones' },
  { url: '/images/nosotros2.jpg', alt: 'RS Autoelevadores - taller' },
  { url: '/images/nosotros3.jpg', alt: 'RS Autoelevadores - equipo' },
  { url: '/images/nosotros4.jpg', alt: 'RS Autoelevadores - operaciones' },
];

const About = () => {
  const navigate = useNavigate();

  useSEOWithOrganization(aboutSEO, schemas.breadcrumb([
    { name: 'Inicio', url: '/' },
    { name: 'Nosotros', url: '/about' },
  ]));

  const handleWhatsApp = () => {
    const msg = '¡Hola! Me gustaría conocer más sobre sus servicios.';
    window.open(`${import.meta.env.VITE_WHATSAPP_URL}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <Box>
      {/* ── HERO ── */}
      <Box style={{ position: 'relative', minHeight: '68vh', backgroundImage: 'url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&h=1080&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center' }}>
        <Box style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(160,21,62,0.88) 0%, rgba(43,43,43,0.78) 100%)' }} />
        <Container size="lg" style={{ position: 'relative', zIndex: 1, paddingTop: 80, paddingBottom: 80 }}>
          <Stack gap="md" maw={820}>
            <Text size="sm" fw={700} style={{ letterSpacing: '3px', color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase' }}>SOBRE NOSOTROS</Text>
            <Title order={1} style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'white', lineHeight: 1.15, textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
              Más que Máquinas,<br />Soluciones Integrales
            </Title>
            <Text style={{ color: 'rgba(255,255,255,0.92)', lineHeight: 1.7, maxWidth: 640, fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Empresa especializada en alquiler, mantenimiento y venta de repuestos para autoelevadores, comprometidos con la excelencia y el servicio personalizado.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* ── STATS ── */}
      <Box bg="brand.6" py={{ base: 36, md: 48 }}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 2, sm: 4 }}>
            {stats.map((s, i) => (
              <Stack
                key={i}
                gap={4}
                align="center"
                ta="center"
                style={{
                  position: 'relative',
                  padding: '8px 16px',
                }}
              >
                <Text style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900, color: 'white', lineHeight: 1 }}>{s.value}</Text>
                <Text size="xs" style={{ color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 500 }}>{s.label}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ── QUIÉNES SOMOS ── */}
      <Box bg="white" py={{ base: 72, md: 104 }}>
        <Container size="lg">
          <Grid gutter={{ base: 40, md: 72 }} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="lg">
                <Text size="sm" fw={700} c="brand" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>QUIÉNES SOMOS</Text>
                <Title order={2} fz={{ base: '1.8rem', md: '2.5rem' }} lh={1.2}>Tu Socio en Equipamiento Industrial</Title>
                <Text size="md" c="dimmed" lh={1.85}>
                  <strong style={{ color: '#2B2B2B' }}>RS Autoelevadores</strong> nace con el objetivo de acompañar el crecimiento de la industria y el comercio mediante un servicio técnico de excelencia. Con más de <strong style={{ color: '#A0153E' }}>15 años de trayectoria</strong>, nos hemos consolidado como un referente confiable en todo el país.
                </Text>
                <Text size="md" c="dimmed" lh={1.85}>
                  No solo reparamos equipos; <strong style={{ color: '#2B2B2B' }}>maximizamos la operatividad de su flota</strong>. Somos <strong style={{ color: '#A0153E' }}>importadores directos</strong> de repuestos para las marcas líderes del mercado.
                </Text>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Box style={{ borderRadius: 24, overflow: 'hidden', height: 'clamp(260px, 40vw, 440px)', boxShadow: '0 16px 48px rgba(0,0,0,0.14)', position: 'relative' }}>
                <img src="https://images.unsplash.com/photo-1581092918484-8313e1f1b5d5?w=800&h=600&fit=crop" alt="Equipo RS Autoelevadores" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <Box style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(160,21,62,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* ── MARCAS (carrusel infinito) ── */}
      <BrandsSection />

      {/* ── QUÉ HACEMOS ── */}
      <Box bg="gray.0" py={{ base: 72, md: 104 }}>
        <Container size="lg">
          <Stack align="center" ta="center" gap="xs" mb={{ base: 48, md: 64 }}>
            <Text size="sm" fw={700} c="brand" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>SOLUCIONES A LA MEDIDA DE SU LOGÍSTICA</Text>
            <Title order={2} fz={{ base: '1.8rem', md: '2.5rem' }}>Qué Hacemos</Title>
            <Text c="dimmed" size="lg" maw={680} lh={1.75}>
              Soluciones ágiles y profesionales para maximizar la operatividad de su flota y asegurar la continuidad de su cadena logística.
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 1, md: 3 }} spacing={{ base: 20, md: 32 }}>
            {services.map((s, i) => (
              <Paper key={i} withBorder p="xl" radius="xl" className="brand-card" style={{ border: '1.5px solid #e0e0e0', textAlign: 'center' }}>
                <Stack align="center" gap="md">
                  <ThemeIcon size={80} radius="xl" variant="light" color="brand">{s.icon}</ThemeIcon>
                  <Title order={4} fw={700} fz={{ base: '1.1rem', md: '1.25rem' }}>{s.title}</Title>
                  <Text size="sm" c="dimmed" lh={1.75}>{s.description}</Text>
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ── MISIÓN ── */}
      <Box bg="white" py={{ base: 72, md: 104 }}>
        <Container size="lg">
          <Stack align="center" gap="xs" mb={{ base: 48, md: 56 }}>
            <Text size="sm" fw={700} c="brand" ta="center" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>NUESTRA MISIÓN</Text>
            <Title order={2} ta="center" fz={{ base: '1.8rem', md: '2.5rem' }}>Impulsamos tu Operación</Title>
          </Stack>

          <Paper
            maw={860}
            mx="auto"
            p={{ base: 'xl', md: 60 }}
            radius="xl"
            ta="center"
            style={{ background: 'linear-gradient(135deg, #A0153E 0%, #C71F4E 100%)', color: 'white', boxShadow: '0 20px 60px rgba(160,21,62,0.3)', position: 'relative', overflow: 'hidden' }}
          >
            <Box style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', top: -100, right: -80, pointerEvents: 'none' }} />
            <Text lh={1.9} fz={{ base: '1rem', md: '1.15rem' }} style={{ position: 'relative', zIndex: 1 }}>
              Nuestra misión es <strong>brindar soluciones integrales</strong> en equipamiento industrial, garantizando <strong>calidad, seguridad y confiabilidad</strong> en cada servicio. Trabajamos día a día para ser el <strong>socio estratégico</strong> de nuestros clientes, acompañándolos en el crecimiento de sus operaciones con equipos de primera línea y un servicio técnico excepcional.
            </Text>
          </Paper>

          {/* ── VALORES ── */}
          <Stack gap="xs" align="center" mt={{ base: 72, md: 96 }} mb={{ base: 40, md: 52 }}>
            <Text size="sm" fw={700} c="brand" ta="center" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>NUESTROS VALORES</Text>
            <Title order={2} ta="center" fz={{ base: '1.8rem', md: '2.5rem' }}>Lo que nos Define</Title>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={{ base: 16, md: 24 }}>
            {values.map((v, i) => (
              <Paper key={i} withBorder p="lg" radius="xl" className="value-card" ta="center" style={{ border: '1.5px solid #e0e0e0' }}>
                <Stack align="center" gap="sm">
                  <ThemeIcon size={64} radius="xl" variant="light" color="brand">{v.icon}</ThemeIcon>
                  <Title order={5} fw={700}>{v.title}</Title>
                  <Text size="sm" c="dimmed" lh={1.65}>{v.description}</Text>
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ── GALERÍA ── */}
      <Box bg="gray.0" py={{ base: 72, md: 104 }}>
        <Container size="lg">
          <Stack align="center" gap="xs" mb={{ base: 48, md: 64 }}>
            <Text size="sm" fw={700} c="brand" ta="center" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>NUESTRA EMPRESA</Text>
            <Title order={2} ta="center" fz={{ base: '1.8rem', md: '2.5rem' }}>Conocé Nuestras Instalaciones</Title>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={{ base: 16, md: 24 }}>
            {gallery.map((img, i) => (
              <Box key={i} className="gallery-box" style={{ borderRadius: 16, overflow: 'hidden', height: 240, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <img src={img.url} alt={img.alt} className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box
        py={{ base: 88, md: 120 }}
        style={{ background: 'linear-gradient(135deg, #2B2B2B 0%, #1A1A1A 100%)', position: 'relative', overflow: 'hidden' }}
      >
        <Box style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(160,21,62,0.18) 0%, transparent 70%)', top: -200, right: -100 }} />
        <Container size="md" style={{ position: 'relative', zIndex: 1 }}>
          <Stack align="center" ta="center" gap="lg">
            <Title order={2} style={{ color: 'white', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', lineHeight: 1.2 }}>
              ¿Listo para Trabajar Juntos?
            </Title>
            <Text style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.75, maxWidth: 580, fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}>
              Contactanos hoy y descubrí cómo nuestros servicios pueden optimizar tu operación industrial. Estamos para asesorarte sin compromiso.
            </Text>
            <Group gap="md" mt="md" wrap="wrap" justify="center">
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                style={{ background: 'linear-gradient(135deg, #A0153E 0%, #C71F4E 100%)', boxShadow: '0 8px 24px rgba(160,21,62,0.45)', fontWeight: 700, paddingLeft: 40, paddingRight: 40 }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Contactanos
              </Button>
              <Button
                size="lg"
                variant="outline"
                leftSection={<IconBrandWhatsapp size={20} />}
                onClick={handleWhatsApp}
                style={{ borderColor: 'rgba(255,255,255,0.6)', borderWidth: 2, color: 'white', fontWeight: 700, paddingLeft: 40, paddingRight: 40 }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#25D366'; e.currentTarget.style.borderColor = '#25D366'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                WhatsApp
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
