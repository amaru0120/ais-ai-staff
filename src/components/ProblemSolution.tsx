import { motion } from 'framer-motion';
import { HelpCircle, Layers, AlertTriangle } from 'lucide-react';

export const ProblemSolution = () => {
    return (
        <section className="py-24 bg-white overflow-hidden text-gray-800">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-primary text-balance">
                        AI、便利そうなのは分かるけど...<br />
                        <span className="text-2xl md:text-4xl text-gray-500 mt-4 block">「結局、どれか正解なの？」</span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto text-balance leading-relaxed">
                        ChatGPT, Gemini, Claude, Perplexity... <br className="hidden md:block" />
                        毎日のように現れる新ツール。選択肢が多すぎて、逆に動けなくなっていませんか？
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            icon: <Layers className="w-10 h-10 text-blue-600" />,
                            title: "選択肢が多すぎる",
                            desc: "「このAIがすごい！」というニュースを見るたびに、また新しいツールが増えている。情報を追うだけで疲れてしまう。",
                            delay: 0
                        },
                        {
                            icon: <HelpCircle className="w-10 h-10 text-blue-600" />,
                            title: "自社への「最適解」が不明",
                            desc: "機能はすごいけど、それが「うちの不動産業務」や「製造現場」で具体的にどう役に立つのか？事例が専門的すぎて分からない。",
                            delay: 0.1
                        },
                        {
                            icon: <AlertTriangle className="w-10 h-10 text-blue-600" />,
                            title: "導入しても使われない不安",
                            desc: "「とりあえずChatGPTを契約したけど、誰も使っていない...」ツール代だけが毎月消えていく、そんな失敗はしたくない。",
                            delay: 0.2
                        }
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: card.delay }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                                {card.icon}
                            </div>
                            <div className="mb-6 p-4 bg-white rounded-full w-fit shadow-sm text-blue-600">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <p className="text-xl md:text-2xl font-bold text-blue-600">
                        その「迷い」、私たちが整理します。
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
