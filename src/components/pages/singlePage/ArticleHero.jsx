import { Link } from "react-router-dom";

export default function ArticleHero({ article }) {
    return (
        <div className="relative h-[60vh] min-h-125 overflow-hidden">
            <img
                src={article.image || article.coverImage}
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
            <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a]/30 to-transparent"></div>

            {/* Breadcrumbs */}
            <div className="absolute top-8 right-8 left-8">
                <nav className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm border border-white/10">
                    <Link to="/" className="text-white/70 hover:text-white transition-colors">
                        <i className="fa-solid fa-home"></i>
                    </Link>
                    <i className="fa-solid fa-chevron-left text-white/30 text-xs"></i>
                    <Link to="/blog" className="text-white/70 hover:text-white transition-colors">
                        المدونة
                    </Link>
                    <i className="fa-solid fa-chevron-left text-white/30 text-xs"></i>
                    <span className="text-orange-400 font-medium truncate max-w-50">
                        {article.category}
                    </span>
                </nav>
            </div>

            {/* Article Meta Header */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <Link
                            to={`/blog?category=${article.category}`}
                            className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-colors"
                        >
                            {article.category}
                        </Link>
                        <div className="flex items-center gap-4 text-white/70 text-sm">
                            <span className="flex items-center gap-2">
                                <i className="fa-regular fa-calendar"></i>{article.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <i className="fa-regular fa-clock"></i>{article.readTime}
                            </span>
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                        {article.title}
                    </h1>
                    <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
                        <img
                            src={article.author?.avatar}
                            alt={article.author?.name}
                            className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
                        />
                        <div>
                            <p className="font-bold text-white">{article.author?.name}</p>
                            <p className="text-sm text-white/60">{article.author?.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}