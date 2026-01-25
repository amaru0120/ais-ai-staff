import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Clock, CheckCircle, TrendingDown, Users, User, ArrowDown, FileText, Search, PenTool, Sparkles, X } from 'lucide-react';

export const AIEmployeeConcept = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden text-gray-800">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(#444 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 self-center">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-bold text-blue-600 tracking-wide">AIチーム構築</span>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0A192F] text-balance leading-tight text-left">
                            「バラバラのツール」ではなく<br />
                            <span className="text-blue-600">「一丸となって働くチーム」</span>へ。
                        </h2>

                        <div className="bg-white/80 backdrop-blur border border-blue-100 p-6 rounded-2xl shadow-sm max-w-md text-left relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Users className="w-24 h-24 text-blue-600" />
                            </div>
                            <p className="text-gray-500 text-xs font-bold tracking-widest mb-1">COST PERFORMANCE</p>
                            <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                                コストはパート1人と同等。<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">戦力は、無限大。</span>
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Organizational Chart Diagram */}
                <div className="max-w-5xl mx-auto mb-24 relative">

                    {/* Top: Human Manager */}
                    <div className="!flex !flex-col items-center relative z-20 mb-8 md:mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Manager Node - Mobile Optimized Size */}
                            <div className="w-20 h-20 md:w-32 md:h-32 bg-white rounded-full border-4 border-blue-100 shadow-lg flex items-center justify-center relative z-20">
                                <User className="w-8 h-8 md:w-12 md:h-12 text-blue-600" />
                            </div>
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#0A192F] text-white text-[10px] md:text-sm font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full whitespace-nowrap z-30 shadow-md">
                                Human Manager (あなた)
                            </div>
                        </motion.div>

                        {/* Connection Line (Mobile Vertical Start) */}
                        <div className="h-8 md:h-16 w-0.5 bg-blue-200 mt-2 relative overflow-hidden">
                            <motion.div
                                animate={{ y: ["0%", "100%"] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-blue-500"
                            />
                        </div>
                    </div>

                    {/* Org Chart Lines (Desktop Only) */}
                    <div className="hidden md:block absolute top-[180px] left-0 w-full h-8 z-0">
                        {/* Horizontal Line */}
                        <div className="absolute top-0 left-[16.66%] right-[16.66%] h-0.5 bg-blue-200"></div>
                        {/* Vertical Lines to Employees */}
                        <div className="absolute top-0 left-[16.66%] h-8 w-0.5 bg-blue-200"></div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-8 w-0.5 bg-blue-200"></div>
                        <div className="absolute top-0 right-[16.66%] h-8 w-0.5 bg-blue-200"></div>
                    </div>

                    {/* AI Employees Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {/* Mobile Connecting Lines (Vertical Flow Background) - connects all cards */}
                        <div className="md:hidden absolute top-[-30px] bottom-10 left-1/2 -translate-x-1/2 w-0.5 bg-blue-200 -z-10" />

                        {[
                            {
                                role: "資料作成・分析",
                                roleEn: "ANALYST",
                                image: "/ais-creation.jpg",
                                color: "emerald",
                                badges: ["24時間稼働", "ミス0%"]
                            },
                            {
                                role: "リサーチ・情報収集",
                                roleEn: "RESEARCHER",
                                image: "/ais-research.jpg",
                                color: "blue",
                                badges: ["多言語対応", "神速調査"]
                            },
                            {
                                role: "クリエイティブ・図解",
                                roleEn: "CREATOR",
                                image: "/ais-design.jpg",
                                color: "orange",
                                badges: ["高品質", "修正無制限"]
                            }
                        ].map((staff, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 + 0.2 }}
                                className="flex flex-col items-center bg-white p-4 rounded-xl shadow-lg border border-gray-100 relative group max-w-xs mx-auto md:max-w-none w-full"
                            >
                                {/* Mobile Arrow Icon for vertical flow */}
                                <div className="md:hidden absolute -top-10 left-1/2 -translate-x-1/2 text-blue-300 bg-slate-50 rounded-full p-1 z-0">
                                    <ArrowDown className="w-4 h-4" />
                                </div>

                                <div className="absolute -top-3 left-4 flex gap-2 z-20">
                                    {staff.badges.map((badge, i) => (
                                        <span key={i} className={`text-[10px] font-bold px-2 py-1 rounded-md text-white shadow-sm
                                            ${staff.color === 'emerald' ? 'bg-emerald-500' :
                                                staff.color === 'blue' ? 'bg-blue-500' : 'bg-orange-500'}`}>
                                            {badge}
                                        </span>
                                    ))}
                                </div>

                                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-4 relative">
                                    <img
                                        src={staff.image}
                                        alt={staff.role}
                                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end p-3">
                                        <p className="text-white text-xs font-bold tracking-widest opacity-90">{staff.roleEn}</p>
                                    </div>
                                </div>

                                <div className="text-center w-full">
                                    <h3 className="font-bold text-gray-900 border-b pb-2 mb-2">{staff.role}</h3>
                                    <p className="text-xs text-gray-500">
                                        あなたの指示一つで、<br />最高のアウトプットを提供。
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Offer Section (Compact) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-full mb-3">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm mb-1">24時間365日稼働</h4>
                            <p className="text-xs text-gray-500">深夜・休日も即対応</p>
                        </div>

                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-full mb-3">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm mb-1">精度100%の実行力</h4>
                            <p className="text-xs text-gray-500">人的ミス・感情のブレなし</p>
                        </div>

                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-full mb-3">
                                <TrendingDown className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm mb-1">採用・教育コスト0</h4>
                            <p className="text-xs text-gray-500">初日から即戦力として活躍</p>
                        </div>
                    </div>
                </motion.div>

                {/* Production Secret Modal Trigger (Bottom) */}
                <div className="text-center mt-16">
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
                </div>

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
        </section>
    );
};
