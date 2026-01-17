import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Calendar, Clock, FileText, Mail } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text & CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 drop-shadow-xl text-balance">
                            毎日<span className="text-accent text-5xl md:text-7xl">2時間</span>の事務作業が、<br />
                            あなたの「稼ぐ時間」を<br />
                            奪っていませんか？
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0 text-balance">
                            月給<span className="text-white font-bold text-2xl mx-1">33,000円</span>から雇える、24時間働くAI従業員という選択肢。<br />
                            営業現場で実際に使われているAI活用術を、あなたの隣に配属します。
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#2563eb] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2 group"
                            >
                                30分で分かる、業務自動化の処方箋
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                href="#service"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
                            >
                                まずはサービスを見る
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Column: Visuals */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center"
                    >
                        {/* Busy Schedule Diagram Background */}
                        <div className="absolute inset-0 z-0 opacity-40 lg:opacity-60 transform rotate-6 scale-90 lg:scale-100">
                            <div className="grid grid-cols-3 gap-3 p-4 bg-white/5 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl w-full max-w-md mx-auto">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className={`h-24 rounded-xl p-3 flex flex-col justify-between ${i % 2 === 0 ? 'bg-red-500/20 border-red-500/30' : 'bg-orange-500/20 border-orange-500/30'} border`}>
                                        <div className="flex justify-between items-start opacity-70">
                                            {i % 3 === 0 ? <Mail className="w-4 h-4" /> : i % 3 === 1 ? <FileText className="w-4 h-4" /> : <Calendar className="w-4 h-4" />}
                                            <span className="text-xs bg-black/30 rounded px-1">BUSY</span>
                                        </div>
                                        <div className="h-2 w-2/3 bg-white/20 rounded"></div>
                                        <div className="h-2 w-1/2 bg-white/20 rounded"></div>
                                    </div>
                                ))}
                                <div className="absolute -top-6 -right-6 bg-red-600 text-white font-bold px-4 py-2 rounded-lg shadow-lg rotate-12 animate-pulse whitespace-nowrap">
                                    Overworked!
                                </div>
                            </div>
                        </div>

                        {/* AI Character Overlay */}
                        <motion.img
                            src="/ais-hero-welcome.png"
                            alt="AI Staff Iz-kun"
                            className="absolute bottom-0 z-10 h-[90%] object-contain drop-shadow-2xl"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        />

                        {/* Floating Tech Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-20 right-10 z-20 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg"
                        >
                            <Clock className="w-8 h-8 text-blue-400 mb-2" />
                            <div className="text-xs text-blue-200">Time Saved</div>
                            <div className="text-xl font-bold text-white">+2h/day</div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-white/50 hover:text-white transition-colors"
                >
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <ChevronDown className="w-6 h-6" />
                </motion.div>
            </div>
        </section>
    );
};
