import Footer from '../../../components/common/Footer';
import SectionHeader from './SectionHeader';
import { contacts } from '../data';

const ContactSection = () => {
    return (
        <section id="contact" className="border-t border-slate-200 bg-white pt-24 transition-colors duration-300 dark:border-[#2b2b18] dark:bg-[#0a0a0a]">
            <div className="mx-auto max-w-[1200px] px-[6%] pb-20">
                <SectionHeader number="07" title="Contact" eyebrow="Connect" />

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
                    <div className="fade-in">
                        <h3 className="mb-5 text-4xl font-black uppercase leading-none text-slate-950 dark:text-[#f2f2dd] sm:text-5xl">
                            Let's connect
                        </h3>
                        <p className="mb-8 max-w-[480px] text-[14px] leading-8 text-slate-600 dark:text-[#bdbd9b]">
                            Open for internship opportunities, practical electrical work,
                            drafting support, collaborations, and project inquiries.
                        </p>

                        <div className="flex flex-col gap-3">
                            {contacts.map((contact) => (
                                <a key={contact.label} href={contact.href} className="grid gap-1 border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-slate-700 transition-colors hover:border-[#d49b00] hover:text-[#d49b00] dark:border-[#2b2b18] dark:bg-[#111111] dark:text-[#dfdfc8] dark:hover:border-[#f5c100] dark:hover:text-[#f5c100] sm:grid-cols-[90px_1fr]">
                                    <span className="font-mono text-[10px] uppercase text-[#d49b00] dark:text-[#f5c100]">{contact.label}</span>
                                    <span>{contact.value}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="fade-in border border-slate-200 bg-slate-50 p-7 transition-colors duration-300 dark:border-[#2b2b18] dark:bg-[#111111]">
                        <p className="mb-6 font-mono text-[10px] uppercase text-[#d49b00] dark:text-[#f5c100]">Send a Message</p>
                        <form className="flex flex-col gap-4">
                            <label className="block">
                                <span className="mb-2 block font-mono text-[10px] uppercase text-slate-500 dark:text-[#7b7b5a]">Name</span>
                                <input className="w-full border border-slate-200 bg-white px-4 py-3 font-mono text-[12px] text-slate-950 outline-none transition-colors focus:border-[#d49b00] dark:border-[#2b2b18] dark:bg-[#0a0a0a] dark:text-[#f2f2dd] dark:focus:border-[#f5c100]" type="text" placeholder="Your name" />
                            </label>
                            <label className="block">
                                <span className="mb-2 block font-mono text-[10px] uppercase text-slate-500 dark:text-[#7b7b5a]">Email</span>
                                <input className="w-full border border-slate-200 bg-white px-4 py-3 font-mono text-[12px] text-slate-950 outline-none transition-colors focus:border-[#d49b00] dark:border-[#2b2b18] dark:bg-[#0a0a0a] dark:text-[#f2f2dd] dark:focus:border-[#f5c100]" type="email" placeholder="email@example.com" />
                            </label>
                            <label className="block">
                                <span className="mb-2 block font-mono text-[10px] uppercase text-slate-500 dark:text-[#7b7b5a]">Message</span>
                                <textarea className="min-h-32 w-full resize-y border border-slate-200 bg-white px-4 py-3 font-mono text-[12px] text-slate-950 outline-none transition-colors focus:border-[#d49b00] dark:border-[#2b2b18] dark:bg-[#0a0a0a] dark:text-[#f2f2dd] dark:focus:border-[#f5c100]" placeholder="Tell me about your project or inquiry" />
                            </label>
                            <button className="self-start bg-[#d49b00] px-6 py-3 font-mono text-[11px] uppercase text-white transition-colors hover:bg-[#f5c100] hover:text-[#0a0a0a] dark:bg-[#f5c100] dark:text-[#0a0a0a]" type="button">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default ContactSection;
