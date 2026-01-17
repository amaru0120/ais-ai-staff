import { motion } from 'framer-motion';
import { Clock, Calendar, TrendingDown } from 'lucide-react';

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
                        社長、こんな時間の使い方を<br className="md:hidden" />していませんか？
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            icon: <Clock className="w-10 h-10 text-[#2563eb]" />,
                            title: "毎日2時間の事務作業",
                            desc: "メール返信、資料探し、日報作成... 日々繰り返される単純作業が、あなたの思考時間を削り取ります。",
                            delay: 0
                        },
                        {
                            icon: <Calendar className="w-10 h-10 text-[#2563eb]" />,
                            title: "年間480時間の損失",
                            desc: "その時間は本来、新しいお客様に会い、会社の未来戦略を練るための時間のはずでした。",
                            highlight: "480時間",
                            delay: 0.1
                        },
                        {
                            icon: <TrendingDown className="w-10 h-10 text-[#2563eb]" />,
                            title: "売上機会の損失",
                            desc: "事務作業に時間を取られ、本来の経営・営業活動にお金と時間を投資できない悪循環。",
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
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="mb-6 p-4 bg-blue-50 rounded-full w-fit mx-auto md:mx-0">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                {card.highlight ? (
                                    <>
                                        その時間は本来、新しいお客様に会い、<br className="hidden lg:block" />
                                        <span className="text-[#2563eb] font-bold text-lg">{card.highlight}</span>
                                        分、戦略を練るための時間のはずでした。
                                    </>
                                ) : (
                                    card.desc
                                )}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
