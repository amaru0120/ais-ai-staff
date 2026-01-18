import { motion } from 'framer-motion';
import { Zap, MessageCircleQuestion, TrendingUp, ArrowRight } from 'lucide-react';

export const AISBenefits = () => {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden text-gray-800">
            <div className="container mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0A192F] mb-6 tracking-tight text-balance">
                        AIS利用メリット
                    </h2>
                    <p className="text-xl md:text-2xl text-blue-600 font-bold mb-8 text-balance">
                        導入したその日から、あなたのビジネスが加速する3つの理由。
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
                        className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 mx-auto md:mx-0">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center md:text-left">
                            最新情報の提供
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify md:text-left">
                            日々進化するAIトレンドをキャッチアップし、御社のビジネスに直結する重要情報だけを厳選してお届けします。情報の洪水に溺れることはもうありません。
                        </p>
                    </motion.div>

                    {/* Merit 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 mx-auto md:mx-0">
                            <MessageCircleQuestion className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center md:text-left">
                            AIに関する問い合わせが可能<br />
                            <span className="text-sm font-normal text-gray-500">（細かい質問OK）</span>
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify md:text-left">
                            「ちょっとした操作が分からない」「エラーが出た」そんな現場の些細な疑問に、チャットで即座にお答えします。つまづきをその場で解消し、業務を止めません。
                        </p>
                    </motion.div>

                    {/* Merit 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 mx-auto md:mx-0">
                            <TrendingUp className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center md:text-left">
                            「教える」ではなく<br />「使いこなす」までのサポート
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify md:text-left">
                            単なる操作レクチャーで終わりません。実際の業務フローにAIを組み込み、現場が自走して成果を出せるようになるまで、徹底的に伴走支援します。
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
