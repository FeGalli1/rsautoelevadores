import { createTheme } from '@mantine/core';

const theme = createTheme({
  primaryColor: 'brand',
  colors: {
    brand: [
      '#fce8ef',
      '#f8c6d5',
      '#f0a0bc',
      '#e87aa3',
      '#dc5689',
      '#cc2e6b',
      '#A0153E',
      '#820f32',
      '#650a27',
      '#46051c',
    ],
  },
  fontFamily: 'Roboto, Arial, sans-serif',
  headings: {
    fontFamily: 'Roboto, Arial, sans-serif',
    fontWeight: '800',
  },
  radius: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
  components: {
    Button: {
      defaultProps: { radius: 'md' },
      styles: {
        root: { fontWeight: 600, transition: 'all 0.25s ease' },
      },
    },
    Paper: {
      defaultProps: { radius: 'lg' },
    },
  },
});

export default theme;
