import { Link } from "react-router-dom";

export default function RelatedArticles({ articles = [] }) {
    return (
        <div className="mt-20 pt-12 border-t border-[#262626]">
            <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                    <span className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
                        <i className="fa-solid fa-images text-orange-500 text-xl"></i>
                    </span>
                    <div>
                        <h2 className="text-2xl font-bold text-white">مقالات قد تعجبك</h2>
                        <p className="text-neutral-500 text-sm">استكشف المزيد من المحتوى المميز</p>
                    </div>
                </div>
                <Link className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors group" to="/blog">
                    عرض الكل
                    <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
                </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((item) => (
                    <Link
                        key={item.id}
                        className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                        to={`/blog/${item.id}`}
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={item.image} />
                            <div className="absolute inset-0 bg-linear-to-t from-[#111111] to-transparent"></div>
                            <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">{item.category}</span>
                        </div>
                        <div className="p-5">
                            <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">{item.title}</h3>
                            <div className="flex items-center justify-between text-sm text-neutral-500">
                                <span className="flex items-center gap-2">
                                    <img alt={item.author?.name} className="w-6 h-6 rounded-full" src={item.author?.avatar} />
                                    {item.author?.name}
                                </span>
                                <span>{item.readTime}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}