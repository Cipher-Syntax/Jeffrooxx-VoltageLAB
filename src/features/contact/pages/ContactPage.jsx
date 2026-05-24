import ContactSection from '../../portfolio/components/ContactSection';
import useFadeInOnScroll from '../../portfolio/hooks/useFadeInOnScroll';

const ContactPage = () => {
    useFadeInOnScroll();

    return (
        <>
            <div className="h-14" />
            <ContactSection />
        </>
    );
};

export default ContactPage;
