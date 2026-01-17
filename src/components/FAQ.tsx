import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "なぜ月額33,000円なのですか？",
        answer: "AIの徹底活用により、小規模事業者が「即決できる価格」と「高品質な支援」の両立を実現しました。"
    },
    {
        question: "導入までどのくらい時間がかかりますか？",
        answer: "初回の診断から最短即日で、最初のAI従業員があなたの業務を開始できます。"
    },
    {
        question: "本当に全額返金してくれますか？",
        answer: "はい。初回のレクチャーで「実務に役立たない」と判断された場合、全額返金いたします。"
    }
];

const FAQItemComponent = ({ item }: { item: FAQItem }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-accent" />
                    </div>
                    <h3 className="text-base font-bold text-primary">{item.question}</h3>
                </div>
                <ChevronDown className={`w-5 h-5 text-accent transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="px-6 pb-4 pl-16 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FAQ = () => {
    return (
        <section id="faq" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 text-center lg:text-left px-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 text-balance">よくあるご質問</h2>
                        <p className="text-gray-600 text-balance leading-relaxed">お客様からよくいただくご質問にお答えします。</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{
                            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 0.8 }
                        }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <img
                            src="/ais-faq-question.png"
                            alt="Iz-kun questioning"
                            className="w-full max-w-sm mx-auto object-contain drop-shadow-xl"
                        />
                    </motion.div>
                </div>

                <div className="max-w-3xl mx-auto space-y-3 mb-24">
                    {faqData.map((item, index) => (
                        <FAQItemComponent key={index} item={item} />
                    ))}
                </div>

                {/* Final CTA Area */}
                <div className="relative max-w-5xl mx-auto bg-primary rounded-3xl p-12 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="mb-8"
                        >
                            <img
                                src="/ais-cta-invite.png"
                                alt="Iz-kun inviting"
                                className="w-48 h-48 md:w-64 md:h-64 mx-auto object-contain drop-shadow-2xl"
                            />
                        </motion.div>

                        <h2 className="text-2xl md:text-5xl font-bold text-white mb-6 text-balance">
                            あなたの隣に、<span className="text-accent">最強のAI従業員</span>を。
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto text-balance leading-relaxed px-6">
                            まずは30分の無料診断で、どの業務が自動化できるか確認してみませんか？
                        </p>

                        <a
                            href="#contact"
                            className="inline-block bg-accent text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-accent/90 transition-all hover:scale-105 shadow-2xl active:scale-95 btn-glow"
                        >
                            無料診断を予約する
                        </a>
                    </motion.div>

                    {/* Decorative Background Circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
                </div>
            </div>
        </section>
    );
};
