const GalleryItem = ({ item }) => {
    return (
        <div className="relative cursor-pointer aspect-square bg-transparent group fade-in [perspective:1000px]">
            {/* 3D Flip Container */}
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* --- FRONT OF CARD --- */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] border border-slate-200 dark:border-[#2b2b18] rounded-lg overflow-hidden bg-slate-50 dark:bg-[#111111]">
                    {item.image ? (
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-300 dark:text-[#333333] font-mono text-[10px] tracking-[2px]">
                            NO IMAGE
                        </div>
                    )}
                </div>

                {/* --- BACK OF CARD --- */}
                {/* Note the initial rotateY(180deg) to flip it backwards by default */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] border border-[#ff6b2b] dark:border-[#f5c100] rounded-lg overflow-hidden bg-white dark:bg-[#0a0a0a] flex flex-col items-center justify-center p-6 text-center shadow-lg shadow-[#ff6b2b]/10 dark:shadow-[#f5c100]/5">

                    {item.tag && (
                        <p className="font-mono text-[10px] tracking-[2px] text-[#ff6b2b] dark:text-[#f5c100] uppercase mb-2">
                            {item.tag}
                        </p>
                    )}

                    <h3 className="font-sans text-[20px] font-bold text-slate-900 dark:text-white tracking-[0.5px] mb-2 leading-tight">
                        {item.title}
                    </h3>

                    {item.description && (
                        <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400 mt-2 tracking-[0.5px] leading-relaxed">
                            {item.description}
                        </p>
                    )}
                </div>

            </div>
        </div>
    );
};

export default GalleryItem;