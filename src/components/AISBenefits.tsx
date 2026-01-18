
import { motion } from 'framer-motion';
import { Zap, MessageCircleQuestion, TrendingUp } from 'lucide-react';

export const AISBenefits = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden text-gray-800">
            <div className="container mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-bold tracking-wider mb-4 border border-blue-100">
                        WHY AIS?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0A192F] mb-6 tracking-tight text-balance">
                        AIS利用メリット
                    </h2>
                    <p className="text-xl md:text-2xl text-blue-600 font-bold mb-8 text-balance">
                        導入したその日から、<br className="sm:hidden" />あなたのビジネスが加速する3つの理由。
                    </p>
                    <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto text-balance leading-relaxed">
                        AIは導入して終わりではありません。<br className="hidden md:block" />
                        私たちが提供するのは、ツールではなく「成果」を出し続けるための環境です。
                    </p>
                </motion.div>

                {/* 3 Benefits Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Merit 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                            <Zap className="w-24 h-24 text-blue-600" />
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0A192F] mb-4">
                            最新情報の提供
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            日々進化するAIトレンドをキャッチアップし、御社のビジネスに直結する重要情報だけを厳選してお届けします。情報の洪水に溺れることはもうありません。
                        </p>
                    </motion.div>

                    {/* Merit 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                            <MessageCircleQuestion className="w-24 h-24 text-indigo-600" />
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                            <MessageCircleQuestion className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0A192F] mb-4">
                            専門家チャットサポート
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            「ちょっとした操作が分からない」「エラーが出た」そんな現場の些細な疑問に、チャットで即座にお答えします。つまづきをその場で解消し、業務を止めません。
                        </p>
                    </motion.div>

                    {/* Merit 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                            <TrendingUp className="w-24 h-24 text-teal-600" />
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform duration-300">
                            <TrendingUp className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0A192F] mb-4">
                            「使いこなす」まで伴走
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            単なる操作レクチャーで終わりません。実際の業務フローにAIを組み込み、現場が自走して成果を出せるようになるまで、徹底的に伴走支援します。
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
