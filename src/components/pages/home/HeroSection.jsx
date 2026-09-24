import { Link } from "react-router-dom";
import { Container } from "../../ui/Container";
import Button from "../../ui/Button";
import { ArrowLeft, Info } from "lucide-react";
import { defaultStats } from "@/constants/viewsCard";
import PingDot from "../../ui/PingDot";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
            {/* Background pattern & Blurs */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Content */}
            <Container className="relative py-20">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 before:content-[''] before:size-2 before:rounded-full before:bg-orange-500 before:animate-pulse">
                        <PingDot />
                        <span className="text-sm font-medium text-neutral-300">مرحباً بك في عدسة</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                        اكتشف{" "}
                        <span className="bg-linear-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                            فن
                        </span>
                        <br />
                        التصوير الفوتوغرافي
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                        <Link to="/blog" className="w-full sm:w-auto">
                            <Button variant="primary" className="w-full sm:w-auto group">
                                <span>استكشف المقالات</span>
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            </Button>
                        </Link>

                        <Link to="/about" className="w-full sm:w-auto">
                            <Button variant="secondary" className="w-full sm:w-auto">
                                <Info className="w-5 h-5" />
                                <span>اعرف المزيد</span>
                            </Button>
                        </Link>
                    </div>

                    {/* Views Card / Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        {defaultStats.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.id}
                                    className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800/80 rounded-2xl p-4 hover:scale-105 hover:border-neutral-700 transition-all duration-300 flex flex-col items-center text-center shadow-lg"
                                >
                                    <Icon className="w-6 h-6 text-orange-500 mb-1" />
                                    <p className="text-2xl md:text-3xl font-bold bg-linear-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                                        {item.value}
                                    </p>
                                    <p className="text-neutral-500 text-sm mt-1">{item.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}