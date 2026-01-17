import { motion } from 'framer-motion';
import { Clock, CheckCircle, TrendingDown } from 'lucide-react';

export const AIEmployeeConcept = () => {
    return (
        <section className="py-24 bg-white overflow-hidden text-gray-800">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-primary text-balance leading-snug">
                        「ツール」ではなく、<br />
                        「従業員」としてAIを迎える。
                    </h2>
                </motion.div>

                {/* Central Price & Character */}
                <div className="relative max-w-5xl mx-auto mb-20">
                    <div className="flex flex-col items-center justify-center relative z-10">
                        {/* Price Tag */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center mb-8 relative"
                        >
                            <p className="text-xl md:text-2xl font-bold text-gray-500 mb-2">月給</p>
                            <h3 className="text-6xl md:text-8xl font-black text-[#2563eb] tracking-tighter leading-none">
                                33,000<span className="text-3xl md:text-5xl font-bold ml-2 text-gray-800">円から</span>
                            </h3>
                            <p className="mt-4 text-base md:text-xl font-bold text-gray-600 bg-gray-100 px-6 py-2 rounded-full inline-block">
                                パート1人分の給与で、無限の働き手
                            </p>
                        </motion.div>

                        {/* Center Character Image */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative w-64 md:w-80 h-auto z-10"
                        >
                            <img
                                src="/ais-hero-welcome.png"
                                alt="AI Employee"
                                className="w-full h-auto drop-shadow-2xl"
                            />
                            {/* Glow Effect behind character */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100 rounded-full blur-3xl -z-10 opacity-60"></div>
                        </motion.div>
                    </div>

                    {/* Features - Surrounding Elements (Desktop: Absolute, Mobile: Stacked) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:absolute md:inset-0 md:items-center pointer-events-none mt-12 md:mt-0">

                        {/* Feature 1: Left */}
                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center md:text-right pointer-events-auto md:mr-auto md:max-w-xs relative z-20 md:-translate-x-12 lg:-translate-x-0"
                        >
                            <div className="flex flex-col md:flex-row-reverse items-center justify-center md:justify-start gap-3 mb-2">
                                <div className="p-2 bg-blue-50 rounded-lg text-[#2563eb]">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold">24時間稼働、休みなし</h4>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                深夜でも休日でも、文句ひとつ言わず働き続けます。<br />残業代も深夜手当も一切不要。
                            </p>
                        </motion.div>

                        {/* Spacer for center */}
                        <div className="hidden md:block"></div>

                        {/* Feature 2: Right */}
                        <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center md:text-left pointer-events-auto md:ml-auto md:max-w-xs relative z-20 md:translate-x-12 lg:translate-x-0"
                        >
                            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 mb-2">
                                <div className="p-2 bg-blue-50 rounded-lg text-[#2563eb]">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold">不平不満なし、完璧品質</h4>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                感情に左右されず、教えられた業務を100%の精度で遂行。<br />退職リスクもゼロです。
                            </p>
                        </motion.div>

                        {/* Feature 3: Bottom Center (Mobile: Stacked last, Desktop: Absolute Bottom) */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center pointer-events-auto md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:max-w-sm w-full md:mb-[-40px] z-20"
                        >
                            <div className="flex flex-col items-center justify-center gap-3 mb-2">
                                <div className="p-2 bg-blue-50 rounded-lg text-[#2563eb]">
                                    <TrendingDown className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold">採用リスクとコストを激減</h4>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                社会保険、交通費、福利厚生...見えない雇用コストをすべてカット。<br />圧倒的なコストパフォーマンスを実現します。
                            </p>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
};
