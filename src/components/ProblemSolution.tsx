import { motion } from 'framer-motion';
import { AlertTriangle, Zap, ArrowRight, TrendingDown, TrendingUp } from 'lucide-react';

export const ProblemSolution = () => {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden text-gray-800">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl md:text-5xl font-bold mb-6 tracking-tight text-primary text-balance leading-snug">
                        2026年、AIを使わないことは
                        <br className="hidden md:block" />
                        <span className="text-red-600 block mt-2">「撤退」を意味します。</span>
                    </h2>
                    <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed text-balance">
                        市場のスピードは加速し続けています。<br className="hidden md:block" />
                        人間だけの力では、もう追いつけません。
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8 items-stretch max-w-6xl mx-auto relative">

                    {/* Before Card (Risk) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 bg-gradient-to-br from-[#4A2525] to-[#2a1515] p-8 md:p-10 rounded-3xl border border-red-900/50 shadow-2xl relative overflow-hidden group"
                    >
                        {/* Background Texture */}
                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="p-3 bg-red-950/50 rounded-full border border-red-800">
                                <TrendingDown className="w-8 h-8 text-red-500" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-red-200">AI非導入</h3>
                                <p className="text-red-400 text-sm font-bold">（競争力の喪失）</p>
                            </div>
                        </div>

                        <div className="space-y-4 relative z-10">
                            {[
                                'ヒューマンエラーによる信頼失墜と手戻り',
                                '検討中に競合他社が顧客を奪取',
                                '営業時間外の機会損失が拡大',
                                '担当者の退職でノウハウが消失'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 bg-red-950/30 p-4 rounded-xl border border-red-900/50">
                                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                                    <span className="text-red-100/90 font-medium text-sm md:text-base">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Arrow Section */}
                    <div className="flex flex-col items-center justify-center relative z-20 md:-mx-4 my-4 md:my-0">
                        <div className="bg-gray-900 p-3 rounded-full border border-gray-700 shadow-xl">
                            <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-gray-400 rotate-90 md:rotate-0" />
                        </div>
                        <p className="absolute md:-bottom-8 bottom-auto top-16 md:top-auto w-48 text-center text-xs text-red-400 font-bold tracking-wider animate-pulse whitespace-nowrap">
                            この格差は、毎日広がり続けます
                        </p>
                    </div>

                    {/* After Card (Hope/Advantage) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-10 rounded-3xl border border-[#00f2ff]/30 shadow-[0_0_40px_rgba(0,242,255,0.1)] relative overflow-hidden group"
                    >
                        {/* Glowing Effect */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#00f2ff]/10 rounded-full blur-[80px] group-hover:bg-[#00f2ff]/20 transition-all duration-700"></div>

                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="p-3 bg-cyan-950/50 rounded-full border border-[#00f2ff]/50 shadow-[0_0_15px_rgba(0,242,255,0.3)]">
                                <Zap className="w-8 h-8 text-[#00f2ff]" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">AIS導入</h3>
                                <p className="text-[#00f2ff] text-sm font-bold shadow-cyan-glow">（圧倒的な競争優位）</p>
                            </div>
                        </div>

                        <div className="space-y-4 relative z-10">
                            {[
                                'ミスゼロの正確性で信頼を構築',
                                '即座に提案・クロージングし、シェアを独占',
                                '24時間365日、機会を一切逃さない即時対応',
                                'AIがノウハウを蓄積し、永久に成長し続ける'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 bg-cyan-950/30 p-4 rounded-xl border border-[#00f2ff]/20 group-hover:border-[#00f2ff]/40 transition-colors">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                    >
                                        <TrendingUp className="w-5 h-5 text-[#00f2ff] shrink-0" />
                                    </motion.div>
                                    <span className="text-white font-bold text-sm md:text-base tracking-wide">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
