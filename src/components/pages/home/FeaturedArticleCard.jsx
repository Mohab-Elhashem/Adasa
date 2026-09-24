import { Link } from "react-router-dom";
import { Clock, Star, ArrowLeft } from "lucide-react";

export default function FeaturedArticleCard({ article, index }) {
    return (
        <article
            className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
            style={{ animationDelay: `${index * 150}ms` }}
        >
            <Link to={`/blog/${article.slug}`} className="block">
                <div className="grid md:grid-cols-2 gap-0">
                    {/* Cover Image */}
                    <div className="relative h-72 md:h-100 overflow-hidden">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {article.isFeatured && (
                            <div className="absolute top-4 right-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-amber-500 text-white text-xs font-semibold rounded-full shadow-md">
                                    <Star className="w-3.5 h-3.5 fill-current" />
                                    <span>مميز</span>
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Details Content */}
                    <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
                        {/* Meta */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                                {article.category}
                            </span>
                            <span className="flex items-center gap-1.5 text-sm text-neutral-500">
                                <Clock className="w-4 h-4" />
                                <span>{article.readTime}</span>
                            </span>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                            {article.title}
                        </h3>
                        <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
                            {article.description}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-800/50">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <img
                                        src={article.author.avatar}
                                        alt={article.author.name}
                                        className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                                    />
                                    <div className="absolute -bottom-0.5 -left-0.5 size-3.5 bg-orange-500 rounded-full border-2 border-[#161616]" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">{article.author.name}</p>
                                    <p className="text-xs text-neutral-500">{article.author.date}</p>
                                </div>
                            </div>

                            <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                <span>اقرأ المقال</span>
                                <ArrowLeft className="w-5 h-5" />
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );
}