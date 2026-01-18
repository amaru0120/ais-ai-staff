import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export const Trust = () => {
    return (
        <section className="py-12 bg-primary text-white">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-row items-center justify-center gap-6 p-6 bg-white/5 rounded-xl backdrop-blur-sm relative overflow-hidden max-w-2xl mx-auto w-full border border-white/10"
                >
                    {/* エンブレム背景 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-50"></div>

                    {/* 六角形風の装飾 - Smaller */}
                    <div className="relative shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent to-blue-600 rounded-full blur-lg opacity-30 scale-125"></div>
                        <div className="relative bg-gradient-to-br from-accent/20 to-blue-600/20 p-3 rounded-full border border-accent/50">
                            <ShieldCheck className="w-8 h-8 text-accent relative z-10" />
                        </div>
                    </div>

                    <div className="text-left relative z-10 flex-grow">
                        <div className="flex items-baseline gap-3 mb-1">
                            <h3 className="text-lg font-bold">全額返金保証</h3>
                            <span className="text-2xl font-black text-accent text-glow">100%</span>
                        </div>
                        <p className="text-gray-300 text-xs leading-relaxed">
                            成果にご納得いただけない場合は、初期費用を全額返金いたします。<br className="hidden sm:block" />
                            リスクなく、AIの効果をご体感ください。
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className="bg-[#050f1e] text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-2xl font-bold tracking-tight">
                    AIS <span className="text-accent">strategic</span>
                </div>
                <div className="text-gray-500 text-sm">
                    © 2026 AIS strategic. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
