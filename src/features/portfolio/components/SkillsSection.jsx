import SectionHeader from './SectionHeader';
import { skills } from '../data';

const SkillsSection = () => {
    return (
        <section id="skills" className="px-[6%] py-24 transition-colors duration-300">
            <div className="mx-auto max-w-[1200px]">
                <SectionHeader number="02" title="Technical Skills" eyebrow="Meters" />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {skills.map((skill, index) => (
                        <div key={skill.name} className="fade-in border border-slate-200 bg-white/85 p-5 backdrop-blur-sm transition-colors duration-300 dark:border-[#2b2b18] dark:bg-[#111111]/85" style={{ transitionDelay: `${index * 60}ms` }}>
                            <div className="mb-3 flex items-start justify-between gap-4">
                                <div>
                                    <p className="font-mono text-[10px] uppercase text-[#d49b00] dark:text-[#f5c100]">{skill.group}</p>
                                    <h3 className="mt-1 text-[15px] font-bold text-slate-950 dark:text-[#f2f2dd]">{skill.name}</h3>
                                </div>
                                <span className="font-mono text-[12px] text-[#b05d00] dark:text-[#ffb02e]">{skill.level}%</span>
                            </div>
                            <div className="h-1.5 bg-slate-200 dark:bg-[#1a1a13]">
                                <div className="h-full bg-gradient-to-r from-[#f5c100] via-[#ff6b2b] to-[#00a6d6]" style={{ width: `${skill.level}%` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
