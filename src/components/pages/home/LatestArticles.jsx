import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "../../ui/Container";
import PingDot from "../../ui/PingDot";
import ArticleCard from "./ArticleCard";
import { featuresData } from "@/constants/featuredArticles";


export default function LatestArticles() {
    const latestArticles = featuresData.slice(0, 3);

    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-linear-to-r from-orange-500/5 to-transparent pointer-events-none" />

            <Container className="relative">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <div>
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 before:content-[''] before:size-2 before:rounded-full before:bg-orange-500 before:animate-pulse">
                            <PingDot />
                            <span className="text-sm font-medium text-neutral-300">الأحدث</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">أحدث المقالات</h2>
                        <p className="text-neutral-400 max-w-lg">محتوى جديد طازج من المطبعة</p>
                    </div>

                    <Link
                        to="/blog"
                        className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
                    >
                        <span>عرض جميع المقالات</span>
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestArticles.map((article, index) => (
                        <ArticleCard key={article.id} article={article} index={index} />
                    ))}
                </div>
            </Container>
        </section>
    );
}