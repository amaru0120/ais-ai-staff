import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, Send } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 px-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 text-balance">
                            まずは<span className="text-accent">30分の無料診断</span>から
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 text-balance leading-relaxed">
                            あなたのビジネスに、AIがどう貢献できるか具体的に提案します。
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
                        >
                            <h3 className="text-2xl font-bold text-primary mb-8">お問い合わせ</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Calendar className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 font-medium mb-1 uppercase tracking-wider">Appointment</div>
                                        <div className="text-primary font-bold">オンライン無料診断（Zoom/Meet）</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 font-medium mb-1 uppercase tracking-wider">Email</div>
                                        <div className="text-primary font-bold">contact@ais-strategic.com</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 font-medium mb-1 uppercase tracking-wider">Phone</div>
                                        <div className="text-primary font-bold">03-XXXX-XXXX</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 p-6 bg-primary rounded-2xl text-white">
                                <p className="text-sm font-medium opacity-80 mb-2">診断内容の例：</p>
                                <ul className="text-sm space-y-2">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                        現在手作業で行っているルーチン業務の特定
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                        導入に最適なAIツールの選定
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                        導入後の期待される削減時間・コストのシミュレーション
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Simplified Form / CTA Area */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-center"
                        >
                            <div className="bg-gradient-to-br from-primary to-[#050f1e] p-10 rounded-3xl text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[60px] rounded-full group-hover:bg-accent/30 transition-all duration-700" />

                                <h3 className="text-3xl font-bold mb-6 relative z-10">今すぐ予約する</h3>
                                <p className="text-gray-300 mb-10 relative z-10 leading-relaxed">
                                    カレンダーからご都合の良い日程を選択してください。
                                    その場で予約が確定します。
                                </p>

                                <div className="space-y-4 relative z-10">
                                    <button className="w-full bg-accent hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 btn-glow">
                                        <Calendar className="w-5 h-5" />
                                        カレンダーから予約
                                    </button>
                                    <button className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 border border-white/10 transition-all">
                                        <Send className="w-5 h-5" />
                                        メールで問い合わせ
                                    </button>
                                </div>

                                <p className="text-[10px] text-gray-500 mt-8 text-center uppercase tracking-widest font-bold">
                                    AIS STRATEGIC AI SOLUTIONS
                                </p>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-4 text-gray-400">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-gray-50 bg-gray-200" />
                                    ))}
                                </div>
                                <span className="text-xs font-medium">現在38名の方が診断待ちです</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
