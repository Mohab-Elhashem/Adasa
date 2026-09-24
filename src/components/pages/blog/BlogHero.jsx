
import { Newspaper } from "lucide-react";
import { Container } from "../../ui/Container";
import PingDot from "../../ui/PingDot";

export default function BlogHero() {
    return (
        <div className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px] opacity-80 pointer-events-none" />

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
            </div>

            <Container className="relative text-center">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-orange-500 text-sm font-medium">
                    <PingDot />
                    <Newspaper className="w-4 h-4 text-orange-500" />
                    <span>مدونتنا</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                    استكشف{" "}
                    <span className="bg-linear-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                        مقالاتنا
                    </span>
                </h1>

                <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                    اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
                </p>
            </Container>
        </div>
    );
}