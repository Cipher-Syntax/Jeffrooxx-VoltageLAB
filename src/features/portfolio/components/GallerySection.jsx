import SectionHeader from './SectionHeader';
import GalleryItem from './GalleryItem';
import { galleryItems } from '../data';

const GallerySection = () => {
    return (
        <section id="gallery" className="px-[6%] py-24 transition-colors duration-300">
            <div className="mx-auto max-w-[1200px]">
                <SectionHeader number="06" title="Gallery" eyebrow="Lab Notes" />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {galleryItems.map((item) => (
                        <GalleryItem key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;