import SectionHeader from './SectionHeader';
import { stats, student } from '../data';

const infoRows = [
    { label: 'Full Name', value: student.name },
    { label: 'Program', value: student.program },
    { label: 'School', value: student.school },
    { label: 'Year Level', value: student.year },
    { label: 'Location', value: student.location },
    { label: 'Status', value: student.availability, highlight: true },
];

const AboutSection = () => {
    return (
        <section id="about" className="bg-white px-[6%] py-24 transition-colors duration-300 dark:bg-[#0a0a0a]">
            <div className="mx-auto max-w-[1200px]">
                <SectionHeader number="01" title="About" eyebrow="Profile" />

                <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
                    <div>
                        <div className="fade-in space-y-5 text-[15px] leading-8 text-slate-600 dark:text-[#bdbd9b]">
                            {student.bio.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                            <p>
                                The work here highlights practical training: reading plans, calculating loads,
                                wiring panels, documenting circuits, and checking every connection before power-up.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="fade-in border border-slate-200 bg-slate-50 p-5 text-center transition-colors duration-300 dark:border-[#2b2b18] dark:bg-[#111111]">
                                    <div className="text-3xl font-black text-slate-950 dark:text-[#f2f2dd]">{stat.value}</div>
                                    <div className="mt-1 font-mono text-[9px] uppercase text-slate-500 dark:text-[#7b7b5a]">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="fade-in border-t border-slate-200 dark:border-[#2b2b18]">
                        {infoRows.map((row) => (
                            <div key={row.label} className="grid gap-2 border-b border-slate-200 py-4 transition-colors duration-300 dark:border-[#2b2b18] sm:grid-cols-[140px_1fr]">
                                <span className="font-mono text-[10px] uppercase text-slate-500 dark:text-[#7b7b5a]">{row.label}</span>
                                <span className={`text-[14px] leading-6 ${row.highlight ? 'font-semibold text-[#d49b00] dark:text-[#f5c100]' : 'text-slate-700 dark:text-[#dfdfc8]'}`}>
                                    {row.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
