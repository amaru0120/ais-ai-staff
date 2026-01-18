import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { BOOKING_URL } from '../constants';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'サービス', href: '#service' },
        { name: '導入の流れ', href: '#onboarding' },
        { name: 'AI一覧', href: '#ai-tools' },
        { name: 'FAQ', href: '#faq' },
        { name: '実績', href: '#case-studies' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2">
                    <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
                        AIS <span className="text-accent">strategic</span>
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? 'text-primary' : 'text-white'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 btn-glow"
                    >
                        無料診断を予約
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`md:hidden p-2 ${isScrolled ? 'text-primary' : 'text-white'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-6 md:hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-primary text-lg font-medium py-2 border-b border-gray-50 last:border-0"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href={BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="bg-accent text-white text-center py-4 rounded-xl font-bold mt-4"
                            >
                                無料診断を予約
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
