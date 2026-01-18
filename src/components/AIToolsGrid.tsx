import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { MessageSquare, Search, Image, FileText, Sparkles, X, Palette, BookOpen } from 'lucide-react';

interface AITool {
    name: string;
    category: string;
    usage: string;
    feature: string;
    icon: React.ReactNode;
    colorBase: string; // Tailwind color name like 'blue', 'orange'
}

const aiTools: AITool[] = [
    {
        name: "Gemini",
        category: "テキスト生成",
        usage: "文章作成・メール自動化",
        feature: "Googleの威力 / 長文も得意です",
        icon: <Sparkles className="w-6 h-6" />,
        colorBase: "blue"
    },
    {
        name: "ChatGPT",
        category: "テキスト生成",
        usage: "文章作成・メール自動化",
        feature: "定番中の定番。使いやすさNo.1",
        icon: <MessageSquare className="w-6 h-6" />,
        colorBase: "blue"
    },
    {
        name: "Claude",
        category: "テキスト生成",
        usage: "文章作成・メール自動化",
        feature: "丁寧で正確な回答が魅力です",
        icon: <MessageSquare className="w-6 h-6" />,
        colorBase: "blue"
    },
    {
        name: "Perplexity",
        category: "リサーチ",
        usage: "最新情報の高速検索",
        feature: "リアルタイム検索ならこれ！",
        icon: <Search className="w-6 h-6" />,
        colorBase: "cyan"
    },
    {
        name: "NanoBanana",
        category: "画像生成",
        usage: "プロ級の図解・宣伝画像",
        feature: "日本語に強い速度主義AI",
        icon: <Image className="w-6 h-6" />,
        colorBase: "orange"
    },
    {
        name: "Midjourney",
        category: "画像生成",
        usage: "プロ級の図解・宣伝画像",
        feature: "圧倒的なクオリティで人気",
        icon: <Palette className="w-6 h-6" />,
        colorBase: "orange"
    },
    {
        name: "Notebook LM",
        category: "資料作成",
        usage: "スライド・Webサイトの自動生成",
        feature: "資料を読み込んで要約を可能",
        icon: <BookOpen className="w-6 h-6" />,
        colorBase: "green"
    },
    {
        name: "Gamma",
        category: "資料作成",
        usage: "スライド・Webサイトの自動生成",
        feature: "美しいプレゼン資料が一瞬で",
        icon: <FileText className="w-6 h-6" />,
        colorBase: "green"
    }
];

const AIToolCard = ({ tool, index }: { tool: AITool; index: number }) => {
    // Helper to get color classes safely
    const getColorClasses = (base: string) => {
        switch (base) {
            case 'blue': return { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', iconBg: 'bg-blue-100' };
            case 'orange': return { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100', iconBg: 'bg-orange-100' };
            case 'cyan': return { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-100', iconBg: 'bg-cyan-100' };
            case 'green': return { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100', iconBg: 'bg-green-100' };
            default: return { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-100', iconBg: 'bg-gray-100' };
        }
    };

    const colors = getColorClasses(tool.colorBase);

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className={`group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border ${colors.border} flex flex-col h-full`}
        >
            <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${colors.iconBg} ${colors.text} flex items-center justify-center`}>
                    {tool.icon}
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-900">{tool.name}</h3>
                    <div className={`text-xs font-bold ${colors.text} uppercase tracking-wider`}>{tool.category}</div>
                </div>
            </div>

            <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                <span className="font-bold text-gray-700 block mb-1 text-xs opacity-80">用途:</span>
                {tool.usage}
            </p>

            <div className={`mt-auto p-3 rounded-xl ${colors.bg} border border-opacity-50 ${colors.border}`}>
                <p className={`text-xs font-bold ${colors.text}`}>
                    <span className="block opacity-70 text-[10px] mb-0.5">特徴</span>
                    {tool.feature}
                </p>
            </div>
        </motion.div>
    );
};

export const AIToolsGrid = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="ai-tools" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 text-balance">
                        レクチャー可能な<span className="text-blue-600">AI一覧</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 text-balance leading-relaxed px-6 font-medium">
                        最新のAIツールを使いこなし、あなたのビジネスを加速させます。
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
                    {aiTools.map((tool, index) => (
                        <AIToolCard key={index} tool={tool} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 mb-8"
                >
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="relative inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-10 py-5 rounded-full font-bold text-lg md:text-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 active:scale-95 group"
                    >
                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-400"></span>
                        </span>
                        <Sparkles className="w-6 h-6 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                        <span>【実はこのサイトも…】</span>
                    </button>
                </motion.div>
            </div>

            {/* Modal Overlay */}
            {isModalOpen && createPortal(
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl p-8 max-w-lg w-full relative shadow-2xl overflow-hidden"
                            style={{ maxHeight: '90vh', overflowY: 'auto' }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 rounded-full p-1 z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Content */}
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full mb-4 md:mb-6">
                                    <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-snug text-balance">
                                    戦略があれば、<br className="hidden md:block" />
                                    技術の壁は超えられる
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-balance text-left md:text-center text-sm md:text-base mb-6">
                                    実はこのサイト、営業一筋の私が以下のAIたちを『スタメン』として采配し、わずか3日で実装しました。<br className="hidden md:block" />
                                    コードは一行も書いていません。AIを使いこなせば、あなたのビジネスもここまで加速できる。その実証例がこのサイトです。
                                </p>

                                {/* AI Team List */}
                                <div className="bg-gray-50 rounded-xl p-5 mb-8 text-left border border-gray-100 shadow-inner">
                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 text-center">AIスタメン役割リスト</h4>
                                    <ul className="space-y-3">
                                        {[
                                            { name: "Anti Gravity", role: "高速コーディング・サイト実装 担当" },
                                            { name: "Claude", role: "戦略的ライティング・論理構築 担当" },
                                            { name: "Gemini", role: "企画構成・アイデア出し 担当" },
                                            { name: "Notebook LM", role: "膨大なナレッジの整理・要約 担当" },
                                            { name: "Deep Research", role: "市場調査・競合分析 担当" },
                                            { name: "NanoBanana", role: "デザイン要素・ビジュアル 担当" },
                                        ].map((item, i) => (
                                            <li key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-sm border-b border-gray-200/50 last:border-0 pb-2 last:pb-0">
                                                <span className="font-bold text-blue-600 min-w-[120px]">{item.name}</span>
                                                <span className="text-gray-700">{item.role}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-2">
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl active:scale-95 transform duration-150"
                                    >
                                        閉じる
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>,
                document.body
            )}
        </section >
    );
};
