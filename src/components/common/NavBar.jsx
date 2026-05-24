import { useEffect, useState } from 'react';
import { useTheme } from '../../context/useTheme';
import { navItems } from '../../features/portfolio/data';

const NavBar = () => {
    const { theme, toggleTheme } = useTheme();
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

        if (sections.length === 0) return undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between border-b border-slate-200 bg-white/92 px-4 backdrop-blur-md transition-colors duration-300 dark:border-[#2b2b18] dark:bg-[#0a0a0a]/92 md:px-[6%]">
            <a href="#hero" className="font-mono text-[11px] text-[#d49b00] dark:text-[#f5c100] sm:text-[13px]">
                [ JEFFROOXX // VOLTAGELAB ]
            </a>

            <ul className="hidden list-none items-center gap-6 xl:flex">
                {navItems.slice(1).map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            className={`font-mono text-[10px] uppercase transition-colors ${activeSection === item.id
                                ? 'text-[#d49b00] dark:text-[#f5c100]'
                                : 'text-slate-500 hover:text-[#d49b00] dark:text-[#8d8d70] dark:hover:text-[#f5c100]'
                                }`}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={toggleTheme}
                    className="font-mono text-[10px] uppercase text-slate-500 transition-colors hover:text-[#d49b00] dark:text-[#8d8d70] dark:hover:text-[#f5c100]"
                    aria-label="Toggle color theme"
                >
                    {theme === 'dark' ? 'Light' : 'Dark'}
                </button>
                <a
                    href="#contact"
                    className="border border-[#d49b00] px-3 py-1.5 font-mono text-[10px] uppercase text-[#d49b00] transition-colors hover:bg-[#d49b00] hover:text-white dark:border-[#f5c100] dark:text-[#f5c100] dark:hover:bg-[#f5c100] dark:hover:text-[#0a0a0a] sm:px-4"
                >
                    Contact
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
