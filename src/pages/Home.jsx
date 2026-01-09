import { Box } from '@mui/material';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturedMachines from '../components/FeaturedMachines';
import BrandsSection from '../components/BrandsSection';
import CTASection from '../components/CTASection';
import { useSEOWithOrganization } from '../hooks/useSEO';
import { homeSEO } from '../config/seoConfig';

const Home = () => {
  // Aplicar SEO de la página Home con schema de organización
  useSEOWithOrganization(homeSEO);

  return (
    <Box>
      <HeroSection />
      <AboutSection />
      <FeaturedMachines />
      <BrandsSection />
      <CTASection />
    </Box>
  );
};

export default Home;
