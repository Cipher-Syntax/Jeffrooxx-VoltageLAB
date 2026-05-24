const SectionHeader = ({ number, title, eyebrow }) => {
    return (
        <div className="fade-in mb-12">
            <span className="font-mono text-[10px] uppercase text-[#d49b00] dark:text-[#f5c100]">
                SEC. {number}{eyebrow ? ` / ${eyebrow}` : ''}
            </span>
            <div className="mt-3 flex items-center gap-4">
                <h2 className="m-0 text-3xl font-black uppercase text-slate-950 dark:text-[#f2f2dd] sm:text-4xl">
                    {title}
                </h2>
                <div className="h-px flex-1 bg-slate-200 dark:bg-[#2b2b18]" />
            </div>
        </div>
    );
};

export default SectionHeader;
