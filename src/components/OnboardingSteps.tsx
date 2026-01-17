import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Step {
    number: string;
    title: string;
    description: ReactNode;
    imageSrc: string;
}

const steps: Step[] = [
    {
        number: "01",
        title: "無料AI診断（30分）",
        description: "課題をヒアリングし、どの業務をAIに任せるか特定します。",
        imageSrc: "/images/ais-step1-think.png"
    },
    {
        number: "02",
        title: "業務プロセスの設計",
        description: "あなたの仕事に合わせた、最適なAIの動き（プロンプト）を設計します。",
        imageSrc: "/images/ais-step2-design.png"
    },
    {
        number: "03",
        title: "即戦力設定",
        description: "専門的な設定はすべてこちらで行い、今日から動ける状態にします。",
        imageSrc: "/images/ais-step3-config.png"
    },
    {
        number: "04",
        title: "操作レクチャー",
        description: "難しい知識は不要。LINEやチャットで指示を出す方法を丁寧にお伝えします。",
        imageSrc: "/images/ais-step4-welcome.png"
    },
    {
        number: "05",
        title: "業務開始",
        description: (
            <>
                <span className="text-accent font-bold text-lg">月給33,000円</span>
                の無敵のスタッフが、あなたの代わりに働き始めます。
            </>
        ),
        imageSrc: "/images/ais-step5-thumbsup.png"
    }
];

export const OnboardingSteps = () => {
    return (
        <section id="onboarding" className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Simple Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600 rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        AIの採用は、<span className="text-accent">驚くほど簡単</span>です。
                    </h2>
                    <p className="text-lg text-gray-600">
                        アイズくんがあなたの職場に馴染むまでの、スムーズな5つのステップ。
                    </p>
                </motion.div>

                {/* Grid Layout - Static with simple Fade-in */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto">
                    {steps.map((step, index) => {
                        const isLastStep = index === steps.length - 1;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`
                                    relative flex flex-col items-center text-center group transition-all duration-300
                                    ${isLastStep
                                        ? 'bg-blue-50/80 border-2 border-accent scale-105 shadow-xl z-10 rounded-2xl p-6'
                                        : 'bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-accent/30'
                                    }
                                `}
                            >
                                {isLastStep && (
                                    <div className="absolute -top-3 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full shadow-md">
                                        GOAL!
                                    </div>
                                )}

                                <div className={`text-4xl font-black mb-4 transition-transform ${isLastStep ? 'text-accent scale-110' : 'text-gray-200 group-hover:text-accent/50 group-hover:scale-110'}`}>
                                    {step.number}
                                </div>
                                <div className="mb-4 h-24 flex items-center justify-center">
                                    <motion.img
                                        src={step.imageSrc}
                                        alt={step.title}
                                        className={`${isLastStep ? 'w-28 h-28 drop-shadow-md' : 'w-24 h-24'} object-contain`}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    />
                                </div>
                                <h3 className={`text-lg font-bold mb-2 ${isLastStep ? 'text-accent' : 'text-primary'}`}>
                                    {step.title}
                                </h3>
                                <p className={`text-sm leading-relaxed ${isLastStep ? 'text-gray-700 font-medium' : 'text-gray-600'}`}>
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <a
                        href="#contact"
                        className="inline-block bg-accent text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 btn-glow shadow-xl"
                    >
                        今すぐ無料診断を予約する
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
