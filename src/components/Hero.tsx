import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">


            {/* Complexity/Labyrinth Background */}
            <div className="absolute inset-0 z-0 bg-[#0B1120]">
                {/* Abstract Grid/Network Pattern to represent "Too many tools" */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 bg-repeat" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-black/80" />

                {/* Spotlight effect for "Solution/Escape" */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 relative z-30">
                <div className="max-w-5xl mx-auto text-center relative">
                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="drop-shadow-2xl"
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 mx-auto max-w-6xl text-white text-balance tracking-tight">
                            「どのAIを使えばいいか、正直わからない。」<br />
                            その迷いが、あなたのビジネスを停滞させていませんか？
                        </h1>
                    </motion.div>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto px-6 font-medium text-balance"
                    >
                        ツールは溢れている。でも、自社に最適な『スタメン』が誰かは誰も教えてくれない。<br className="hidden md:block" />
                        営業現場の視点で、あなたに今すぐ必要なAIの配属先（スタメン）を特定します。
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
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-5 px-10 rounded-full text-lg md:text-xl flex items-center gap-3 shadow-2xl hover:shadow-blue-500/50 transition-all border border-blue-400/30"
                        >
                            <span className="relative z-10">30分で解決する、AIスタメン診断を受ける</span>
                            <ArrowRight className="w-6 h-6 relative z-10" />
                            {/* Inner glow */}
                            <div className="absolute inset-0 rounded-full bg-white/10 blur-md opacity-0 hover:opacity-100 transition-opacity" />
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
