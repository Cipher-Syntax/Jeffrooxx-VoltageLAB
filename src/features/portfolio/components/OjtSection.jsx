import SectionHeader from './SectionHeader';
import { ojt } from '../data';

const OjtSection = () => {
    return (
        <section id="ojt" className="px-[6%] py-24 transition-colors duration-300">
            <div className="mx-auto max-w-[1200px]">
                <SectionHeader number="04" title="On-the-Job Training" eyebrow="Field" />

                <div className="fade-in border border-slate-200 bg-white/85 p-7 transition-colors duration-300 dark:border-[#2b2b18] dark:bg-[#111111]/85 md:p-10">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_220px]">
                        <div>
                            <p className="mb-2 font-mono text-[10px] uppercase text-[#d49b00] dark:text-[#f5c100]">Company</p>
                            <h3 className="text-3xl font-black uppercase text-slate-950 dark:text-[#f2f2dd]">{ojt.company}</h3>
                            <p className="mt-2 text-[13px] text-slate-500 dark:text-[#8d8d70]">
                                {ojt.location} &middot; {ojt.duration}
                            </p>
                            <p className="mt-6 max-w-[760px] text-[14px] leading-8 text-slate-600 dark:text-[#bdbd9b]">{ojt.summary}</p>

                            <div className="mt-8">
                                <p className="mb-4 font-mono text-[10px] uppercase text-[#d49b00] dark:text-[#f5c100]">Key Tasks</p>
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {ojt.tasks.map((task) => (
                                        <div key={task} className="flex items-center gap-3 text-[14px] text-slate-700 dark:text-[#dfdfc8]">
                                            <span className="h-2 w-2 bg-[#f5c100]" />
                                            <span>{task}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="border border-slate-200 bg-slate-50 p-6 text-center transition-colors duration-300 dark:border-[#2b2b18] dark:bg-[#0a0a0a]">
                            <div className="text-6xl font-black text-[#d49b00] dark:text-[#f5c100]">{ojt.hours}</div>
                            <p className="font-mono text-[10px] uppercase text-slate-500 dark:text-[#7b7b5a]">Hours</p>
                            <div className="my-6 h-px bg-slate-200 dark:bg-[#2b2b18]" />
                            <div className="text-5xl font-black text-slate-950 dark:text-[#f2f2dd]">{ojt.rating}</div>
                            <p className="font-mono text-[10px] uppercase text-slate-500 dark:text-[#7b7b5a]">Rating</p>
                        </div>
                    </div>
                </div>

                <blockquote className="fade-in mt-5 border-l-4 border-[#d49b00] bg-white/80 p-6 text-[14px] leading-8 text-slate-600 transition-colors duration-300 dark:border-[#f5c100] dark:bg-[#111111]/80 dark:text-[#bdbd9b]">
                    {ojt.reflection}
                </blockquote>
            </div>
        </section>
    );
};

export default OjtSection;
