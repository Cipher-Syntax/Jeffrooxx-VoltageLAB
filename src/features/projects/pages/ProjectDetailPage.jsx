import { Link, useParams } from 'react-router-dom';
import SectionHeader from '../../portfolio/components/SectionHeader';
import { projects } from '../../portfolio/data';
import useFadeInOnScroll from '../../portfolio/hooks/useFadeInOnScroll';

const ProjectDetailPage = () => {
    useFadeInOnScroll();
    const { slug } = useParams();
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return (
            <section className="min-h-screen px-[6%] py-32">
                <div className="mx-auto max-w-[900px]">
                    <SectionHeader number="404" title="Project Not Found" />
                    <Link to="/projects" className="font-mono text-[11px] uppercase text-[#d49b00] dark:text-[#f5c100]">
                        Back to Projects
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen px-[6%] py-32">
            <div className="mx-auto max-w-[1000px]">
                <SectionHeader number="PROJECT" title={project.title} eyebrow={project.year} />
                <div className="fade-in grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
                    <div className="border border-slate-200 bg-white p-7 transition-colors duration-300 dark:border-[#2b2b18] dark:bg-[#111111]">
                        <p className="text-[15px] leading-8 text-slate-600 dark:text-[#bdbd9b]">{project.description}</p>
                        <div className="mt-7 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="border border-[#d49b00]/40 bg-[#d49b00]/5 px-2.5 py-1 font-mono text-[10px] uppercase text-[#b05d00] dark:border-[#f5c100]/40 dark:bg-[#f5c100]/5 dark:text-[#f5c100]">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <aside className="border border-slate-200 bg-slate-50 p-7 transition-colors duration-300 dark:border-[#2b2b18] dark:bg-[#0a0a0a]">
                        <p className="font-mono text-[10px] uppercase text-slate-500 dark:text-[#7b7b5a]">Year</p>
                        <p className="mt-1 text-3xl font-black text-[#d49b00] dark:text-[#f5c100]">{project.year}</p>
                        <div className="my-6 h-px bg-slate-200 dark:bg-[#2b2b18]" />
                        <Link to="/projects" className="font-mono text-[11px] uppercase text-[#d49b00] dark:text-[#f5c100]">
                            Back to Projects
                        </Link>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailPage;
