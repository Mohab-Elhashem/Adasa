import { Link } from "react-router-dom";
import { Clock, ArrowLeft } from "lucide-react";

export default function ArticleCard({ article, index }) {
    return (
        <article
            className="group bg-[#161616] rounded-2xl border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <Link to={`/blog/${article.slug}`} className="block">
                {/* Cover Image & Category Badge */}
                <div className="relative h-52 overflow-hidden">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                            {article.category}
                        </span>
                    </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-neutral-400" />
                            <span>{article.readTime}</span>
                        </span>
                        <span className="w-1 h-1 bg-neutral-600 rounded-full" />
                        <span>{article.date}</span>
                    </div>

                    {/* Title & Excerpt */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                        {article.title}
                    </h3>
                    <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                        {article.excerpt}
                    </p>

                    {/* Author Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                        <div className="flex items-center gap-3">
                            <img
                                src={article.author.avatar}
                                alt={article.author.name}
                                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                            />
                            <div>
                                <p className="text-sm font-medium text-white">{article.author.name}</p>
                                <p className="text-xs text-neutral-500">{article.author.role || "كاتب"}</p>
                            </div>
                        </div>

                        <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                            <ArrowLeft className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300" />
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );
}