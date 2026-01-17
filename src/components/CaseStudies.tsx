import { motion } from 'framer-motion';
import { BookOpen, Headset, BarChart3, ArrowRight } from 'lucide-react';

interface UseCase {
    title: string;
    description: string;
    imageSrc: string;
    icon: React.ReactNode;
    benefits: string[];
}

const useCases: UseCase[] = [
    {
        title: "社内資料の即時回答（NotebookLM）",
        description: "数万件の資料から、必要な情報を1秒で特定。会議の準備や技術情報の検索を自動化します。",
        imageSrc: "/images/ais-step1-think.png",
        icon: <BookOpen className="w-6 h-6" />,
        benefits: ["検索時間 90% 削減", "新人の即戦力化", "ナレッジ共有の自動化"]
    },
    {
        title: "24時間カスタマーサポート",
        description: "深夜・早朝の問い合わせにも即レス。顧客満足度を向上させつつ、担当者の負担をゼロにします。",
        imageSrc: "/images/ais-step4-welcome.png",
        icon: <Headset className="w-6 h-6" />,
        benefits: ["応答速度 0.5秒", "成約への取りこぼし防止", "人的コスト 80% 削減"]
    },
    {
        title: "経営判断リサーチ",
        description: "競合分析や市場トレンドを収集し、意思決定に必要なデータを整理。経営者の「参謀」として機能します。",
        imageSrc: "/images/ais-step2-design.png",
        icon: <BarChart3 className="w-6 h-6" />,
        benefits: ["リサーチ工数 70% 削減", "データに基づいた戦略策定", "最新情報の常時監視"]
    }
];

export const CaseStudies = () => {
    return (
        <section id="use-cases" className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 px-6"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 text-balance break-keep">
                        AI<span className="text-accent">活用事例</span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto text-balance leading-relaxed">
                        あなたの業務を劇的に変える、AI従業員の具体的な「働き方」をご紹介します。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
                        >
                            {/* Image Area */}
                            <div className="relative mb-8 rounded-2xl overflow-hidden bg-accent/5 aspect-square flex items-center justify-center p-6">
                                <motion.img
                                    src={useCase.imageSrc}
                                    alt={useCase.title}
                                    className="w-full h-full object-contain drop-shadow-lg"
                                    whileHover={{ scale: 1.05 }}
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                                    <div className="text-accent">
                                        {useCase.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-primary mb-4">
                                {useCase.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                {useCase.description}
                            </p>

                            {/* Benefits */}
                            <div className="space-y-3 pt-6 border-t border-gray-100">
                                {useCase.benefits.map((benefit, bIndex) => (
                                    <div key={bIndex} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                        {benefit}
                                    </div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ x: 5 }}
                                className="mt-8 flex items-center gap-2 text-accent font-bold text-sm"
                            >
                                詳しく見る <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* Section Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-500 text-sm mb-6">
                        ※ これらは一般的な活用例であり、貴社の業務に合わせたカスタマイズが可能です。
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

