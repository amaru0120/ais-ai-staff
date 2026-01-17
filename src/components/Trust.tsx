import { motion } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';

export const Trust = () => {
    return (
        <section className="py-20 bg-primary text-white">
            <div className="container mx-auto px-6 text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm"
                    >
                        <Award className="w-12 h-12 text-accent mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-balance px-4">現役営業管理職</h3>
                        <p className="text-gray-300 text-sm leading-relaxed px-4 text-balance">現場で実際活用</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col items-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm relative overflow-hidden"
                    >
                        {/* エンブレム背景 */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-50"></div>

                        {/* 六角形風の装飾 */}
                        <div className="relative mb-4">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent to-blue-600 rounded-full blur-xl opacity-30 scale-150"></div>
                            <div className="relative bg-gradient-to-br from-accent/20 to-blue-600/20 p-6 rounded-full border-2 border-accent/50">
                                <ShieldCheck className="w-16 h-16 text-accent relative z-10" />
                            </div>
                        </div>

                        {/* 100%バッジ */}
                        <div className="relative mb-3">
                            <span className="text-5xl font-black text-accent text-glow">100%</span>
                        </div>

                        <h3 className="text-xl font-bold mb-2 relative z-10 text-balance px-4">全額返金保証</h3>
                        <p className="text-gray-300 text-sm relative z-10 leading-relaxed px-4 text-balance">成果にご納得いただけない場合は全額返金</p>

                        {/* 装飾ライン */}
                        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
                    </motion.div>
                </div>
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
