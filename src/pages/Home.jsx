import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturedMachines from '../components/FeaturedMachines';
import BrandsSection from '../components/BrandsSection';
import CTASection from '../components/CTASection';
import { useSEOWithOrganization } from '../hooks/useSEO';
import { homeSEO } from '../config/seoConfig';

const Home = () => {
  useSEOWithOrganization(homeSEO);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedMachines />
      <BrandsSection />
      <CTASection />
    </>
  );
};

export default Home;
