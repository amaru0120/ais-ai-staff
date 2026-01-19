import { motion } from 'framer-motion';
import { FileText, Users, Building2, ArrowRight, Quote } from 'lucide-react';

interface UseCase {
    category: string;
    title: string;
    description: string;
    effect: string;
    icon: React.ReactNode;
    color: string; // Tailwind color class base (e.g. 'purple', 'green', 'orange')
    image: string;
}

const useCases: UseCase[] = [
    {
        category: "不動産・建設",
        title: "社内資料の即時回答\n（NotebookLM）",
        description: "数万件の資料から、必要な情報を1秒で特定。会議の準備や技術情報の検索を自動化します。",
        effect: "反響対応は5分以内。リサーチは3分以内。",
        icon: <Building2 className="w-8 h-8 text-white" />,
        color: "purple", // Accent Color
        image: "/images/ais-step1-think.png"
    },
    {
        category: "製造・士業",
        title: "複雑なマニュアルも、\n瞬時に『答え』に変わる",
        description: "膨大なマニュアルや過去の判例から、瞬時に回答を抽出。",
        effect: "『あの資料どこだっけ？』という探し物の時間は、今日からゼロになります。",
        icon: <FileText className="w-8 h-8 text-white" />,
        color: "green",
        image: "/images/ais-step2-design.png"
    },
    {
        category: "フリーランス・小規模事業者",
        title: "24時間\nカスタマーサポート",
        description: "深夜・早朝の問い合わせにも即レス。顧客満足度を向上させ、担当者の負担をゼロにします。",
        effect: "一人社長でも、『チーム』として動ける",
        icon: <Users className="w-8 h-8 text-white" />,
        color: "orange",
        image: "/images/ais-step4-welcome.png"
    }
];

export const CaseStudies = () => {
    // Helper to get color classes based on the 'color' prop
    const getColorClasses = (color: string) => {
        switch (color) {
            case 'purple': return { bg: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-200', light: 'bg-purple-50' };
            case 'green': return { bg: 'bg-green-500', text: 'text-green-600', border: 'border-green-200', light: 'bg-green-50' };
            case 'orange': return { bg: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-200', light: 'bg-orange-50' };
            default: return { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200', light: 'bg-blue-50' };
        }
    };

    return (
        <section className="hidden md:block py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-primary text-balance">
                        AI活用事例
                    </h2>
                    <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed text-balance">
                        あなたの業務を劇的に変える、AI従業員の具体的な「働き方」をご紹介します。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {useCases.map((useCase, index) => {
                        const colors = getColorClasses(useCase.color);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ y: -10 }}
                                className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border ${colors.border} group flex flex-col`}
                            >
                                {/* Header / Image Area */}
                                <div className={`h-48 relative overflow-hidden ${colors.light}`}>
                                    {/* Icon Badge */}
                                    <div className={`absolute top-4 left-4 z-10 p-3 rounded-xl shadow-lg ${colors.bg}`}>
                                        {useCase.icon}
                                    </div>
                                    <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-gray-600 shadow-sm border border-gray-100">
                                        {useCase.category}
                                    </div>

                                    {/* Image with overlay */}
                                    <div className="w-full h-full flex items-center justify-center p-6">
                                        <motion.img
                                            src={useCase.image}
                                            alt={useCase.title}
                                            className="w-full h-full object-contain mb-[-20px] drop-shadow-xl opacity-90 group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 whitespace-pre-line leading-tight min-h-[3.5rem]">
                                        {useCase.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                        {useCase.description}
                                    </p>

                                    {/* Effect Box */}
                                    <div className={`mt-auto p-4 rounded-xl ${colors.light} border border-opacity-50 ${colors.border}`}>
                                        <div className="flex items-start gap-2">
                                            <Quote className={`w-4 h-4 ${colors.text} shrink-0 mt-1`} />
                                            <p className={`text-sm font-bold ${colors.text} leading-relaxed`}>
                                                {useCase.effect}
                                            </p>
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className={`mt-6 flex items-center gap-2 font-bold text-sm ${colors.text} group-hover:opacity-80 transition-opacity`}
                                    >
                                        詳しく見る <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

