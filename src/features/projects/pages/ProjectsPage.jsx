import GallerySection from '../../portfolio/components/GallerySection';
import PortfolioSection from '../../portfolio/components/PortfolioSection';
import useFadeInOnScroll from '../../portfolio/hooks/useFadeInOnScroll';

const ProjectsPage = () => {
    useFadeInOnScroll();

    return (
        <>
            <div className="h-14" />
            <PortfolioSection />
            <GallerySection />
        </>
    );
};

export default ProjectsPage;
