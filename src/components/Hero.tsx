import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">


            {/* Sophisticated Corporate Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/corporate-hero-bg.png"
                    alt="Modern Corporate Office Boardroom"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/90 via-[#1e293b]/80 to-[#0f172a]/90 z-10 mix-blend-multiply" />
            </div>

            <div className="container mx-auto px-6 relative z-30 pt-20 pb-32">
                <div className="max-w-5xl mx-auto text-center relative">
                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-12"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white tracking-tight drop-shadow-2xl">
                            「どのAIを使えばいいか、<br className="sm:hidden" />正直わからない。」
                        </h1>
                        <p className="text-lg sm:text-xl md:text-3xl font-medium text-blue-100/90 leading-normal tracking-wide">
                            その迷いが、あなたのビジネスを<br className="hidden sm:block" />
                            <span className="text-white font-bold border-b-2 border-blue-400 pb-1">停滞させていませんか？</span>
                        </p>
                    </motion.div>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-sm sm:text-base md:text-lg text-gray-300 mb-16 leading-loose max-w-3xl mx-auto font-normal tracking-wider"
                    >
                        ツールは溢れている。でも、自社に最適な『スタメン』が誰かは誰も教えてくれない。<br className="hidden md:block" />
                        営業現場の視点で、あなたに今すぐ必要なAIの配属先（スタメン）を特定します。
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative bg-white text-[#0A192F] font-bold py-5 px-12 rounded-full text-lg md:text-xl flex items-center gap-4 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10 tracking-wider">30分で解決する、AIスタメン診断</span>
                            <div className="relative z-10 bg-[#0A192F] rounded-full p-1">
                                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                            </div>

                            {/* Shine effect */}
                            <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:animate-shine" />
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Floating Decoration Lights */}
            <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-blue-400/20 blur-[100px] rounded-full z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-indigo-400/20 blur-[100px] rounded-full z-10 pointer-events-none" />
        </section>
    );
};
