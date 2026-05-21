import { Paper, Stack, Title, Text, ThemeIcon } from '@mantine/core';

const ServiceCard = ({ icon, title, description }) => (
  <Paper
    withBorder
    p="xl"
    radius="xl"
    className="brand-card service-card"
    style={{ height: '100%', border: '1.5px solid #eeeeee' }}
  >
    <Stack gap="md" align="center" ta="center">
      <ThemeIcon
        className="service-icon"
        size={72}
        radius="xl"
        variant="light"
        color="brand"
      >
        {icon}
      </ThemeIcon>
      <Title order={3} fw={700} fz={{ base: '1.1rem', md: '1.3rem' }}>
        {title}
      </Title>
      <Text size="sm" c="dimmed" lh={1.75}>
        {description}
      </Text>
    </Stack>
  </Paper>
);

export default ServiceCard;
