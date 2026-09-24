import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "../../ui/Container";
import PingDot from "../../ui/PingDot";
import FeaturedArticleCard from "./FeaturedArticleCard";
import { featuresData } from "@/constants/featuredArticles";


export default function FeaturedArticles() {
    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-orange-500/5 to-transparent pointer-events-none" />

            <Container className="relative">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800">
                            <PingDot />
                            <span className="text-sm font-medium text-neutral-300">مميز</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">مقالات مختارة</h2>
                        <p className="text-neutral-400 max-w-lg">محتوى منتقى لبدء رحلة تعلمك</p>
                    </div>

                    <Link
                        to="/blog"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-orange-500/20"
                    >
                        <span>عرض الكل</span>
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Articles Cards */}
                <div className="space-y-8">
                    {featuresData.slice(0,3).map((article) => (
                        <FeaturedArticleCard key={article.id} article={article} />
                    ))}
                </div>
            </Container>
        </section>
    );
}