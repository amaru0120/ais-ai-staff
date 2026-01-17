import { motion } from 'framer-motion';
import { Bot, Users, TrendingUp, CheckCircle2, Calendar } from 'lucide-react';

export const Service = () => {
    return (
        <section id="service" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-20 left-0 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight text-balance">Service Plans</h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto text-balance px-6 leading-relaxed">
                        企業の成長フェーズに合わせた、極めてシンプルな3つのステップへのアプローチ
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
                    {/* Step 1 & 2 share column space in typical bento, but here we want a specific layout 
                        Let's try: Step 1 (4 cols), Step 2 (4 cols), Step 3 (4 cols) - wait, that's just a row.
                        Bento Grid usually implies varied sizes. 
                        Let's do: Step 1 & 2 on the left (stacked or side-by-side), Step 3 on the right (tall).
                        Actually, existing plans are 1, 2, 3. Step 3 is the "High Tier".
                        Let's make Step 3 prominent.
                    */}

                    {/* Step 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="col-span-1 md:col-span-1 lg:col-span-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Bot className="w-24 h-24 text-blue-600" />
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                                Step 1
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">AI構築パッケージ</h3>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-3xl font-bold text-gray-900">33,000円</span>
                            <span className="text-sm text-gray-500">/スポット</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            業務のボトルネックを特定し、最適なAIツールを即座に導入・設定します。
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                <span>業務フロー分析</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                <span>ツール選定・導入</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                <span>初期設定サポート</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="col-span-1 md:col-span-1 lg:col-span-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Users className="w-24 h-24 text-indigo-600" />
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                                Step 2
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">AI活用顧問</h3>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-3xl font-bold text-gray-900">110,000円</span>
                            <span className="text-sm text-gray-500">/月</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            月次ミーティングで運用を改善。常に最新のAIトレンドを業務に落とし込みます。
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                                <span>月次コンサルティング</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                                <span>プロンプト改善提案</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                                <span>最新ツール情報提供</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Step 3 (Featured) */}
                    {/* Step 3 (Standardized) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="col-span-1 md:col-span-2 lg:col-span-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <TrendingUp className="w-24 h-24 text-emerald-600" />
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                                Step 3
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">戦略顧問プラン</h3>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-3xl font-bold text-gray-900">550,000円</span>
                            <span className="text-sm text-gray-500">/月</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            経営戦略レベルでのAI活用。全社的なDX推進と新規事業開発を並走支援します。
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span>経営課題のAI解決策定</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span>新規事業開発パートナー</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span>全社DXプロジェクトリード</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Schedule Notice - Standard Design */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 max-w-4xl mx-auto"
                >
                    <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg relative overflow-hidden flex flex-col items-center text-center gap-6">
                        {/* Subtle blue accent background */}
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600"></div>

                        <div className="shrink-0 p-4 bg-blue-50 border border-blue-100 rounded-full">
                            <Calendar className="w-10 h-10 text-blue-600" />
                        </div>

                        <div className="max-w-2xl relative z-10 text-gray-600 leading-relaxed">
                            <h3 className="text-gray-900 text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                                対応可能日時のご案内
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-balance text-sm md:text-base px-6">
                                現場実装の最前線で常に知見をアップデートし続けるため、平日は実務に専念しております。
                                そのため、クライアント様との直接対話は、専念ができる
                                <strong className="text-blue-700 font-bold mx-1 text-base md:text-lg block md:inline mt-1 md:mt-0">
                                    【土曜・日曜・祝日】の完全予約制
                                </strong>
                                に限定させていただいております。
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
