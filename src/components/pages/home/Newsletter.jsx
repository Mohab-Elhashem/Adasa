import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { Container } from "../../ui/Container";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setIsSubscribed(true);
            setEmail("");
        }
    };

    return (
        <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <Container className="relative">
                <div className="bg-[#161616] rounded-3xl border border-[#262626] p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto">
                    {/* Icon Badge */}
                    <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/20">
                        <Mail className="w-8 h-8 text-white" />
                    </div>

                    {/* Heading & Subtitle */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        اشترك في{" "}
                        <span className="bg-linear-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                            نشرتنا الإخبارية
                        </span>
                    </h2>
                    <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                        احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
                    </p>

                    {/* Form / Success State */}
                    {isSubscribed ? (
                        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 max-w-lg mx-auto mb-6 flex items-center justify-center gap-2 text-orange-400">
                            <CheckCircle2 className="w-5 h-5 shrink-0" />
                            <span className="font-medium text-sm sm:text-base">تم الاشتراك بنجاح! شكراً لانضمامك إلينا.</span>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="أدخل بريدك الإلكتروني"
                                className="flex-1 px-5 py-4 rounded-xl bg-[#0a0a0a] border border-[#262626] focus:outline-none focus:border-orange-500/50 text-white placeholder-neutral-500 transition-colors"
                            />
                            <button
                                type="submit"
                                className="px-8 py-4 bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/20 active:scale-95 shrink-0"
                            >
                                اشترك الآن
                            </button>
                        </form>
                    )}

                    {/* Social Proof & Features */}
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2 space-x-reverse">
                                <img
                                    className="w-8 h-8 rounded-full border-2 border-[#161616] object-cover"
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
                                    alt="مستخدم"
                                />
                                <img
                                    className="w-8 h-8 rounded-full border-2 border-[#161616] object-cover"
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
                                    alt="مستخدم"
                                />
                                <img
                                    className="w-8 h-8 rounded-full border-2 border-[#161616] object-cover"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                                    alt="مستخدم"
                                />
                            </div>
                            <span>
                                انضم لـ <span className="text-white font-medium">+10,000</span> مصور
                            </span>
                        </div>

                        <span className="hidden sm:inline text-[#262626]">•</span>
                        <span>بدون إزعاج</span>
                        <span className="hidden sm:inline text-[#262626]">•</span>
                        <span>إلغاء الاشتراك في أي وقت</span>
                    </div>
                </div>
            </Container>
        </section>
    );
}