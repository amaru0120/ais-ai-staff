import { motion } from 'framer-motion';
import { MessageSquare, Search, Image, FileText, Sparkles, Palette, BookOpen } from 'lucide-react';

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
                    <a
                        href="#contact"
                        className="inline-block bg-accent text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105"
                    >
                        今すぐ無料診断を予約する
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
