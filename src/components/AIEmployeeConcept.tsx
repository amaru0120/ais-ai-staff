import { motion } from 'framer-motion';
import { Clock, CheckCircle, TrendingDown, Users, FileText, Search, PenTool } from 'lucide-react';

export const AIEmployeeConcept = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden text-gray-800">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 self-center">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-bold text-blue-600 tracking-wide">AIチーム構築</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight text-[#0A192F] text-balance leading-tight">
                        「ツール導入」ではなく、<br className="hidden md:block" />
                        業務ごとに適した「AI従業員」と<br className="sm:hidden" />チームを一緒に作り上げる。
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto text-balance leading-loose font-medium">
                        私たちが提供するのは、単なるソフトウェアの操作説明ではありません。<br className="hidden md:block" />
                        御社の業務を深く理解し、適材適所に配属された「AI従業員」が、<br className="hidden md:block" />
                        不平不満なく24時間働き続ける「最強のチーム」を、あなたと共に構築します。
                    </p>
                </motion.div>

                {/* 3 Specialist Staff Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
                    {/* Staff 1: Creation (Green) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-300" />
                        <div className="relative bg-white p-2 rounded-2xl border border-emerald-100 shadow-sm overflow-hidden">
                            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl overflow-hidden aspect-[4/5] relative mb-4">
                                <img
                                    src="/ais-creation.jpg"
                                    alt="資料作成・分析担当のアイズくん"
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-emerald-900/80 to-transparent">
                                    <div className="flex items-center gap-2 text-white/90">
                                        <FileText className="w-4 h-4" />
                                        <span className="text-xs font-bold tracking-wider">ANALYST</span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-center text-gray-900 py-2 border-b-2 border-emerald-500 inline-block w-full">
                                資料作成・分析 担当
                            </h3>
                        </div>
                    </motion.div>

                    {/* Staff 2: Research (Blue) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-500/10 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-300" />
                        <div className="relative bg-white p-2 rounded-2xl border border-blue-100 shadow-sm overflow-hidden">
                            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl overflow-hidden aspect-[4/5] relative mb-4">
                                <img
                                    src="/ais-research.jpg"
                                    alt="リサーチ・情報収集担当のアイズくん"
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-blue-900/80 to-transparent">
                                    <div className="flex items-center gap-2 text-white/90">
                                        <Search className="w-4 h-4" />
                                        <span className="text-xs font-bold tracking-wider">RESEARCHER</span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-center text-gray-900 py-2 border-b-2 border-blue-500 inline-block w-full">
                                リサーチ・情報収集 担当
                            </h3>
                        </div>
                    </motion.div>

                    {/* Staff 3: Design (Orange) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-500/10 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-300" />
                        <div className="relative bg-white p-2 rounded-2xl border border-orange-100 shadow-sm overflow-hidden">
                            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl overflow-hidden aspect-[4/5] relative mb-4">
                                <img
                                    src="/ais-design.jpg"
                                    alt="クリエイティブ・図解担当のアイズくん"
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-orange-900/80 to-transparent">
                                    <div className="flex items-center gap-2 text-white/90">
                                        <PenTool className="w-4 h-4" />
                                        <span className="text-xs font-bold tracking-wider">CREATOR</span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-center text-gray-900 py-2 border-b-2 border-orange-500 inline-block w-full">
                                クリエイティブ・図解 担当
                            </h3>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Offer Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative"
                >
                    <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

                    <div className="p-8 md:p-12 text-center">
                        <div className="mb-10">
                            <p className="text-gray-500 font-bold mb-2 tracking-widest text-sm">COST PERFORMANCE</p>
                            <div className="flex items-baseline justify-center gap-2 mb-2">
                                <span className="text-2xl font-bold text-gray-700">月給</span>
                                <span className="text-6xl md:text-7xl font-black text-[#2563eb] tracking-tighter">
                                    33,000
                                </span>
                                <span className="text-2xl font-bold text-gray-700">円から</span>
                            </div>
                            <span className="inline-block bg-blue-50 text-blue-700 px-6 py-2 rounded-full font-bold text-sm md:text-base">
                                パート1人分の給与で、無限の働き手
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                            <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                <div className="shrink-0 p-3 bg-white rounded-lg shadow-sm text-blue-600 h-fit">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">24時間稼働、休みなし</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        深夜・休日も文句なし。<br />残業代・深夜手当0。
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                <div className="shrink-0 p-3 bg-white rounded-lg shadow-sm text-blue-600 h-fit">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">不平不満なし、完璧品質</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        感情に左右されず精度100%。<br />退職リスクもゼロ。
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                <div className="shrink-0 p-3 bg-white rounded-lg shadow-sm text-blue-600 h-fit">
                                    <TrendingDown className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">採用リスクとコスト激減</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        社保・交通費・福利厚生など<br />隠れたコストをすべてカット。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
