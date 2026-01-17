import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">


            {/* Corporate Office Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/corporate-hero-bg.png"
                    alt="Modern Corporate Office Boardroom"
                    className="w-full h-full object-cover object-center"
                />
                {/* Blue/Primary Overlay for Trust & Readability */}
                <div className="absolute inset-0 bg-primary/70 z-10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/20 z-10" />
            </div>

            <div className="container mx-auto px-6 relative z-30">
                <div className="max-w-5xl mx-auto text-center relative">
                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="drop-shadow-2xl"
                    >
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 mx-auto max-w-6xl text-white text-balance tracking-tight">
                            毎日2時間の事務作業が、<br className="hidden md:block" />
                            あなたの「稼ぐ時間」を奪っていませんか？
                        </h1>
                    </motion.div>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-12 leading-relaxed max-w-4xl mx-auto px-6 drop-shadow-lg font-medium text-balance"
                    >
                        月給33,000円から雇える、24時間働くAI従業員という選択肢。
                        <br className="hidden md:block" />
                        営業現場で実際に使われているAI活用術を、あなたの隣に配属します。
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center mt-12"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-accent hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full text-lg md:text-xl flex items-center gap-3 btn-glow transition-all shadow-2xl hover:shadow-blue-500/50"
                        >
                            【無料】AI営業診断を予約する
                            <ArrowRight className="w-6 h-6" />
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
