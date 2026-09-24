import { useMemo } from "react";
import { Container } from "../../ui/Container";
import PingDot from "../../ui/PingDot";
import CategoryCard from "./CategoryCard";
import { categoryConfigs } from "@/constants/categoryConfigs";
import { featuresData } from "@/constants/featuredArticles";


export default function Categories() {
    const categoryCounts = useMemo(() => {
        const counts = {};
        featuresData.forEach((post) => {
            counts[post.category] = (counts[post.category] || 0) + 1;
        });
        return counts;
    }, []);

    return (
        <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
            <Container>
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 before:content-[''] before:size-2 before:rounded-full before:bg-orange-500 before:animate-pulse">
                        <PingDot />
                        <span className="text-sm font-medium text-neutral-300">التصنيفات</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">استكشف حسب الموضوع</h2>
                    <p className="text-neutral-400 max-w-lg mx-auto">اعثر على محتوى مصمم حسب اهتماماتك</p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {categoryConfigs.map((category, index) => (
                        <CategoryCard
                            key={category.name}
                            category={category}
                            count={categoryCounts[category.name] || 0}
                            index={index}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}