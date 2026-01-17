import { motion } from 'framer-motion';
import { MessageSquare, Search, Image, FileText, Sparkles } from 'lucide-react';

interface AITool {
    name: string;
    category: string;
    benefit: string;
    comment: string;
    icon: React.ReactNode;
    color: string;
}

const aiTools: AITool[] = [
    {
        name: "Gemini",
        category: "テキスト生成",
        benefit: "文章作成・メール自動化",
        comment: "Googleの最新AI！長文も得意です",
        icon: <Sparkles className="w-6 h-6" />,
        color: "from-blue-500 to-purple-600"
    },
    {
        name: "ChatGPT",
        category: "テキスト生成",
        benefit: "文章作成・メール自動化",
        comment: "定番中の定番。使いやすさNo.1",
        icon: <MessageSquare className="w-6 h-6" />,
        color: "from-green-500 to-teal-600"
    },
    {
        name: "Claude",
        category: "テキスト生成",
        benefit: "文章作成・メール自動化",
        comment: "丁寧で正確な回答が魅力です",
        icon: <MessageSquare className="w-6 h-6" />,
        color: "from-orange-500 to-red-600"
    },
    {
        name: "Perplexity",
        category: "リサーチ",
        benefit: "最新情報の高速検索",
        comment: "リアルタイム検索ならこれ！",
        icon: <Search className="w-6 h-6" />,
        color: "from-cyan-500 to-blue-600"
    },
    {
        name: "NanoBanana",
        category: "画像生成",
        benefit: "プロ級の図解・宣伝画像",
        comment: "日本語に強い画像生成AI",
        icon: <Image className="w-6 h-6" />,
        color: "from-yellow-500 to-orange-600"
    },
    {
        name: "Midjourney",
        category: "画像生成",
        benefit: "プロ級の図解・宣伝画像",
        comment: "圧倒的なクオリティで人気",
        icon: <Image className="w-6 h-6" />,
        color: "from-pink-500 to-purple-600"
    },
    {
        name: "Notebook LM",
        category: "資料作成",
        benefit: "スライド・Webサイトの自動生成",
        comment: "資料を読み込んで要約も可能",
        icon: <FileText className="w-6 h-6" />,
        color: "from-indigo-500 to-blue-600"
    },
    {
        name: "Gamma",
        category: "資料作成",
        benefit: "スライド・Webサイトの自動生成",
        comment: "美しいプレゼン資料が一瞬で",
        icon: <FileText className="w-6 h-6" />,
        color: "from-violet-500 to-purple-600"
    }
];

const AIToolCard = ({ tool, index }: { tool: AITool; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="group relative bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tool.color} rounded-t-xl`}></div>
            <div className={`mb-4 w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center text-white shadow-sm`}>
                {tool.icon}
            </div>
            <h3 className="text-xl font-bold text-primary mb-1">{tool.name}</h3>
            <div className="text-accent text-xs font-bold mb-2 uppercase tracking-wider">{tool.category}</div>
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">{tool.benefit}</p>
            <div className="pt-3 border-t border-gray-50 flex items-start gap-2">
                <MessageSquare className="w-4 h-4 text-accent/40 mt-0.5" />
                <p className="text-xs text-gray-500 italic">{tool.comment}</p>
            </div>
        </motion.div>
    );
};

export const AIToolsGrid = () => {
    return (
        <section id="ai-tools" className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        レクチャー可能な<span className="text-accent">AI一覧</span>
                    </h2>
                    <p className="text-lg text-gray-600">最新のAIツールを使いこなし、あなたのビジネスを加速させます。</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {aiTools.map((tool, index) => (
                        <AIToolCard key={index} tool={tool} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-16"
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
