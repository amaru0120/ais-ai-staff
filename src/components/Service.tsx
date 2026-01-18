import { motion } from 'framer-motion';
import { Check, ArrowRight, Calendar } from 'lucide-react';

export const Service = () => {
    return (
        <section id="service" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight text-balance">
                        リスク最小限で始められる、3ステップ。
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto text-balance font-medium leading-relaxed">
                        大手コンサルは不要です。御社の規模感に合わせて、最適な配属プランを選べます。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
                    {/* STEP 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col h-full"
                    >
                        <div className="mb-6">
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                                まずは1業務から
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">STEP 1：AI構築パッケージ</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-bold text-gray-900">33,000</span>
                            <span className="text-sm font-bold text-gray-500">円 /スポット</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                            業務のボトルネックを特定し、最適なAIツールを即座に導入・設定します
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                                <Check className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>ツール選定・導入</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                                <Check className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>初期設定サポート</span>
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-xl border border-blue-600 text-blue-600 font-bold text-sm hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                            詳細を見る <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>

                    {/* STEP 2 (Recommended) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -8 }}
                        className="bg-white p-10 rounded-3xl border-2 border-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col z-10 scale-105"
                    >
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <span className="bg-yellow-400 text-gray-900 px-6 py-1.5 rounded-full text-sm font-bold shadow-sm">
                                オススメ
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-2">STEP 2：AI活用顧問</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-5xl font-bold text-blue-600">110,000</span>
                            <span className="text-sm font-bold text-gray-500">円 /月</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                            月次ミーティングで運用を改善。常に最新のAIトレンドを業務に落とし込みます
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3 text-sm text-gray-700 font-bold">
                                <Check className="w-5 h-5 text-blue-600 shrink-0" />
                                <span>月次コンサルティング</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-700 font-bold">
                                <Check className="w-5 h-5 text-blue-600 shrink-0" />
                                <span>プロンプト改善提案</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-700 font-bold">
                                <Check className="w-5 h-5 text-blue-600 shrink-0" />
                                <span>最新ツール情報提供</span>
                            </li>
                        </ul>
                        <button className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                            詳細を見る <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>

                    {/* STEP 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col h-full"
                    >
                        <div className="mb-6">
                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                                経営戦略レベル
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">STEP 3：戦略顧問プラン</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-bold text-gray-900">550,000</span>
                            <span className="text-sm font-bold text-gray-500">円 /月</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                            経営戦略レベルでのAI活用。全社的なDX推進と新規事業開発を並走支援します
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                                <Check className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>経営課題のAI解決策定</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                                <Check className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>新規事業開発パートナー</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                                <Check className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>全社DXプロジェクトリード</span>
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-xl border border-blue-600 text-blue-600 font-bold text-sm hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                            詳細を見る <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                </div>

                {/* Schedule Notice - Standard Design */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 max-w-4xl mx-auto"
                >
                    <div className="bg-white rounded-2xl p-8 md:p-12 border border-blue-100 shadow-lg relative overflow-hidden flex flex-col items-center text-center gap-6">
                        {/* Subtle blue accent background */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>

                        <div className="shrink-0 p-4 bg-blue-50 rounded-full">
                            <Calendar className="w-8 h-8 text-blue-600" />
                        </div>

                        <div className="max-w-2xl relative z-10 text-gray-600 leading-relaxed">
                            <h3 className="text-gray-900 text-xl font-bold mb-4 tracking-tight">
                                対応可能日時のご案内
                            </h3>
                            <p className="text-gray-600 leading-loose text-balance text-sm font-medium">
                                <span className="text-gray-900 font-bold">平日：現場実務に専念 ／ 休日：完全予約制サポート</span>
                                <br />
                                実戦で磨いた知見を直接お届けするための、週末限定の体制です。
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
