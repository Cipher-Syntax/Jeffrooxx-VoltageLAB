import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { projects } from '../data';

const PortfolioSection = () => {
    return (
        <section id="projects" className="border-t border-slate-200 bg-white px-[6%] py-24 transition-colors duration-300 dark:border-[#2b2b18] dark:bg-[#0a0a0a]">
            <div className="mx-auto max-w-[1200px]">
                <SectionHeader number="03" title="Projects" eyebrow="Builds" />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <article key={project.slug} className="fade-in group relative overflow-hidden border border-slate-200 bg-slate-50 p-7 transition-colors duration-300 hover:border-[#d49b00] dark:border-[#2b2b18] dark:bg-[#111111] dark:hover:border-[#f5c100]" style={{ transitionDelay: `${index * 70}ms` }}>
                            <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#f5c100] via-[#ff6b2b] to-[#00a6d6] transition-transform duration-300 group-hover:scale-x-100" />
                            <div className="mb-4 flex items-center justify-between gap-4 font-mono text-[10px] uppercase text-slate-500 dark:text-[#7b7b5a]">
                                <span>Project {String(index + 1).padStart(2, '0')}</span>
                                <span className="text-[#d49b00] dark:text-[#f5c100]">{project.year}</span>
                            </div>
                            <h3 className="mb-3 text-2xl font-black uppercase text-slate-950 dark:text-[#f2f2dd]">{project.title}</h3>
                            <p className="mb-5 text-[14px] leading-7 text-slate-600 dark:text-[#bdbd9b]">{project.description}</p>
                            <div className="mb-6 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="border border-[#d49b00]/40 bg-[#d49b00]/5 px-2.5 py-1 font-mono text-[10px] uppercase text-[#b05d00] dark:border-[#f5c100]/40 dark:bg-[#f5c100]/5 dark:text-[#f5c100]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link to={`/projects/${project.slug}`} className="font-mono text-[11px] uppercase text-[#d49b00] transition-colors hover:text-[#b05d00] dark:text-[#f5c100] dark:hover:text-[#ffb02e]">
                                View Details &rarr;
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
