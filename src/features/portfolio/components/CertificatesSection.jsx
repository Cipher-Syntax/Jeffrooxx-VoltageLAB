import SectionHeader from './SectionHeader';
import { certificates } from '../data';

const CertificatesSection = () => {
    return (
        <section id="certificates" className="border-t border-slate-200 bg-white px-[6%] py-24 transition-colors duration-300 dark:border-[#2b2b18] dark:bg-[#0a0a0a]">
            <div className="mx-auto max-w-[1200px]">
                <SectionHeader number="05" title="Certificates" eyebrow="Proof" />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((certificate, index) => (
                        <article key={certificate.title} className="fade-in border border-slate-200 bg-slate-50 p-6 transition-transform duration-300 hover:-translate-y-1 dark:border-[#2b2b18] dark:bg-[#111111]" style={{ borderLeft: `4px solid ${certificate.color}`, transitionDelay: `${index * 60}ms` }}>
                            <p className="font-mono text-[10px] uppercase" style={{ color: certificate.color }}>{certificate.year}</p>
                            <h3 className="mt-3 text-xl font-black uppercase text-slate-950 dark:text-[#f2f2dd]">{certificate.title}</h3>
                            <p className="mt-2 text-[13px] leading-6 text-slate-600 dark:text-[#bdbd9b]">{certificate.sub}</p>
                            <p className="mt-5 font-mono text-[10px] uppercase" style={{ color: certificate.color }}>Certified</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;
