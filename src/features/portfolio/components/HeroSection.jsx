import { student } from '../data';

const MeterLine = ({ label, value }) => (
    <div>
        <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase text-[#6f6f5b] dark:text-[#8d8d70]">
            <span>{label}</span>
            <span>{value}%</span>
        </div>
        <div className="h-1 bg-slate-200 dark:bg-[#1a1a13]">
            <div className="h-full bg-gradient-to-r from-[#f5c100] via-[#ff6b2b] to-[#00a6d6]" style={{ width: `${value}%` }} />
        </div>
    </div>
);

const HeroVisual = () => (
    <div className="relative mx-auto h-[330px] w-full max-w-[320px] border border-[#d49b00] bg-white/80 p-5 shadow-[0_0_40px_rgba(212,155,0,0.12)] dark:border-[#f5c100] dark:bg-[#111111]/90">
        <div className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-[#f5c100]" />
        <div className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-[#f5c100]" />
        <div className="flex h-full flex-col justify-between border border-slate-200 p-5 dark:border-[#2b2b18]">
            <div>
                <p className="font-mono text-[10px] uppercase text-[#d49b00] dark:text-[#f5c100]">Live Lab Board</p>
                <h3 className="mt-3 text-3xl font-black uppercase text-slate-950 dark:text-[#f2f2dd]">Voltage</h3>
                <h3 className="text-3xl font-black uppercase text-transparent [-webkit-text-stroke:1px_#f5c100]">Control</h3>
            </div>

            <svg viewBox="0 0 220 86" className="h-24 w-full" role="img" aria-label="Circuit board line diagram">
                <path d="M12 18H54L72 36H119L142 18H208" fill="none" stroke="#d49b00" strokeWidth="3" />
                <path d="M12 64H48L69 45H104L125 64H208" fill="none" stroke="#00a6d6" strokeWidth="3" />
                <circle cx="54" cy="18" r="6" fill="#f5c100" />
                <circle cx="119" cy="36" r="6" fill="#ff6b2b" />
                <circle cx="142" cy="18" r="6" fill="#00a6d6" />
                <circle cx="69" cy="45" r="6" fill="#00b86b" />
                <rect x="88" y="8" width="44" height="44" fill="none" stroke="#6f6f5b" strokeWidth="2" />
            </svg>

            <div className="space-y-4">
                <MeterLine label="Safety" value={95} />
                <MeterLine label="Wiring" value={90} />
                <MeterLine label="Controls" value={85} />
            </div>
        </div>
    </div>
);

const HeroSection = () => {
    return (
        <section id="hero" className="relative flex min-h-screen items-center overflow-hidden border-t border-slate-200 px-5 pb-20 pt-32 transition-colors duration-300 dark:border-[#2b2b18] sm:px-[6%]">
            <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_360px]">
                <div className="fade-in">
                    <p className="mb-5 border-l-2 border-[#d49b00] pl-4 font-mono text-[11px] uppercase text-[#d49b00] dark:border-[#f5c100] dark:text-[#f5c100]">
                        BSIT-ET // Electrical Technology Portfolio
                    </p>
                    <h1 className="mb-5 text-4xl font-black uppercase leading-none text-slate-950 dark:text-[#f2f2dd] sm:text-7xl lg:text-8xl">
                        JEFFROOXX
                        <span className="block text-transparent [-webkit-text-stroke:1px_#d49b00] dark:[-webkit-text-stroke:1px_#f5c100]">
                            VoltageLAB
                        </span>
                    </h1>
                    <p className="mb-4 font-mono text-[12px] uppercase text-[#b05d00] dark:text-[#ffb02e]">
                        Electrical systems &middot; wiring layouts &middot; control circuits
                    </p>
                    <p className="mb-9 max-w-[560px] text-[15px] leading-8 text-slate-600 dark:text-[#bdbd9b]">
                        A focused portfolio for {student.name}, covering electrical installation,
                        PLC fundamentals, motor controls, safety practice, and hands-on field training.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a href="#projects" className="bg-[#d49b00] px-6 py-3 font-mono text-[11px] uppercase text-white transition-colors hover:bg-[#f5c100] hover:text-[#0a0a0a] dark:bg-[#f5c100] dark:text-[#0a0a0a]">
                            View Projects
                        </a>
                        <a href="#contact" className="border border-[#d49b00] px-6 py-3 font-mono text-[11px] uppercase text-[#d49b00] transition-colors hover:bg-[#d49b00] hover:text-white dark:border-[#f5c100] dark:text-[#f5c100] dark:hover:bg-[#f5c100] dark:hover:text-[#0a0a0a]">
                            Connect
                        </a>
                    </div>
                </div>

                <div className="fade-in">
                    <HeroVisual />
                </div>
            </div>

            <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
                <span className="font-mono text-[9px] uppercase text-slate-400 dark:text-[#6f6f5b]">Scroll</span>
                <div className="h-8 w-px bg-gradient-to-b from-[#f5c100] to-transparent" />
            </div>
        </section>
    );
};

export default HeroSection;
