const diagramStyles = {
    lab: { stroke: '#f5c100', accent: '#00a6d6' },
    wiring: { stroke: '#ff6b2b', accent: '#f5c100' },
    plc: { stroke: '#00a6d6', accent: '#f5c100' },
    panel: { stroke: '#f5c100', accent: '#00b86b' },
    site: { stroke: '#00b86b', accent: '#f5c100' },
    circuit: { stroke: '#8a6cff', accent: '#f5c100' },
    schematic: { stroke: '#e23b3b', accent: '#00a6d6' },
    team: { stroke: '#f5c100', accent: '#ff6b2b' },
};

const GalleryDiagram = ({ type }) => {
    const color = diagramStyles[type] || diagramStyles.lab;

    return (
        <svg viewBox="0 0 160 110" className="absolute inset-0 h-full w-full p-7" aria-hidden="true">
            <defs>
                <pattern id={`grid-${type}`} width="12" height="12" patternUnits="userSpaceOnUse">
                    <path d="M12 0H0V12" fill="none" stroke="#6f6f5b" strokeWidth="0.5" opacity="0.35" />
                </pattern>
            </defs>
            <rect width="160" height="110" fill={`url(#grid-${type})`} />
            <path d="M18 26H48L63 42H94L112 25H142" fill="none" stroke={color.stroke} strokeWidth="2.5" />
            <path d="M18 82H45L61 65H88L108 82H142" fill="none" stroke={color.accent} strokeWidth="2.5" />
            <rect x="64" y="25" width="34" height="34" fill="none" stroke={color.stroke} strokeWidth="2" />
            <circle cx="48" cy="26" r="5" fill={color.stroke} />
            <circle cx="94" cy="42" r="5" fill={color.accent} />
            <circle cx="108" cy="82" r="5" fill={color.stroke} />
            <line x1="30" y1="12" x2="30" y2="98" stroke="#6f6f5b" strokeWidth="0.8" opacity="0.4" />
            <line x1="130" y1="12" x2="130" y2="98" stroke="#6f6f5b" strokeWidth="0.8" opacity="0.4" />
        </svg>
    );
};

const GalleryItem = ({ item }) => {
    return (
        <article className={`fade-in group relative min-h-[220px] overflow-hidden border border-slate-200 bg-slate-50 transition-colors duration-300 hover:border-[#d49b00] dark:border-[#2b2b18] dark:bg-[#111111] dark:hover:border-[#f5c100] ${item.span ? 'sm:col-span-2' : ''}`}>
            <GalleryDiagram type={item.type} />
            <div className="absolute inset-0 bg-white/0 transition-colors duration-300 group-hover:bg-white/86 dark:group-hover:bg-[#0a0a0a]/88" />
            <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-mono text-[10px] uppercase text-[#d49b00] dark:text-[#f5c100]">{item.type}</p>
                <h3 className="mt-2 text-xl font-black uppercase text-slate-950 dark:text-[#f2f2dd]">{item.title}</h3>
                <p className="mt-1 max-w-[280px] text-[13px] leading-6 text-slate-600 dark:text-[#bdbd9b]">{item.label}</p>
            </div>
        </article>
    );
};

export default GalleryItem;
