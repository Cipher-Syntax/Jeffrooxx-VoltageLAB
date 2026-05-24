import AboutSection from '../components/AboutSection';
import CertificatesSection from '../components/CertificatesSection';
import ContactSection from '../components/ContactSection';
import GallerySection from '../components/GallerySection';
import HeroSection from '../components/HeroSection';
import OjtSection from '../components/OjtSection';
import PortfolioSection from '../components/PortfolioSection';
import SkillsSection from '../components/SkillsSection';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const LandingPage = () => {
    useFadeInOnScroll();

    return (
        <>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <PortfolioSection />
            <OjtSection />
            <CertificatesSection />
            <GallerySection />
            <ContactSection />
        </>
    );
};

export default LandingPage;
