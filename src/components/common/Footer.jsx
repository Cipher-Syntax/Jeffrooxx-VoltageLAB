import { student } from '../../features/portfolio/data';

const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-white px-[6%] py-7 transition-colors duration-300 dark:border-[#2b2b18] dark:bg-[#0a0a0a]">
            <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-center font-mono text-[10px] uppercase text-slate-500 dark:text-[#7b7b5a] md:text-left">
                    &copy; 2026 {student.name} &middot; BSIT-ET Portfolio
                </p>
                <div className="flex flex-wrap justify-center gap-5">
                    <a href="#hero" className="font-mono text-[10px] uppercase text-slate-500 transition-colors hover:text-[#d49b00] dark:text-[#8d8d70] dark:hover:text-[#f5c100]">
                        Back to Top &uarr;
                    </a>
                    <a href="#projects" className="font-mono text-[10px] uppercase text-slate-500 transition-colors hover:text-[#d49b00] dark:text-[#8d8d70] dark:hover:text-[#f5c100]">
                        Projects
                    </a>
                    <a href="#contact" className="font-mono text-[10px] uppercase text-slate-500 transition-colors hover:text-[#d49b00] dark:text-[#8d8d70] dark:hover:text-[#f5c100]">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
