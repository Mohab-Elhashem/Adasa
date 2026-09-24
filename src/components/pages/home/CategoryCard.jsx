import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function CategoryCard({ category, count, index }) {
    const Icon = category.icon;

    return (
        <Link
            to={`/blog?category=${encodeURIComponent(category.name)}`}
            className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Background Hover Gradient */}
            <div
                className={`absolute inset-0 bg-linear-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                    <Icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Category Details */}
                <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                    {category.name}
                </h3>
                <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                    {count} {count === 1 ? "مقالة" : count === 2 ? "مقالتان" : count >= 3 && count <= 10 ? "مقالات" : "مقالة"}
                </p>

                {/* Top Left Arrow */}
                <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                    <ArrowLeft className="w-4 h-4 text-white" />
                </div>
            </div>
        </Link>
    );
}