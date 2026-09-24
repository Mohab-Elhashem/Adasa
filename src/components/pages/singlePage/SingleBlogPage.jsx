import { useParams, Link } from "react-router-dom";
import { featuresData } from "../../../constants/featuredArticles";
import ArticleHero from "./ArticleHero";
import ArticleShare from "./ArticleShare";
import AuthorCard from "./AuthorCard";
import TableOfContents from "./TableOfContents";
import ArticleInfoCard from "./ArticleInfoCard";
import NewsletterCard from "./NewsletterCard";
import RelatedArticles from "./RelatedArticles";


export default function SingleBlogPage() {
    const { id } = useParams();

    const article = featuresData.find((item) => String(item.id) === String(id)) || featuresData[0];
    const related = featuresData.filter((item) => String(item.id) !== String(article.id)).slice(0, 3);

    if (!article) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-bold">المقال غير موجود</h2>
                <Link to="/blog" className="px-5 py-2 bg-orange-500 rounded-xl text-white">
                    العودة للمدونة
                </Link>
            </div>
        );
    }

    return (
        <main className="grow pt-20 bg-[#0a0a0a] min-h-screen">
            <article>
                {/* 1. Hero Section */}
                <ArticleHero article={article} />

                {/* 2. Main Content Container */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid lg:grid-cols-[1fr_300px] gap-12">

                        {/* Left Content Area */}
                        <div className="order-2 lg:order-1">
                            {article.summary && (
                                <div className="p-6 bg-linear-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
                                    <p className="text-lg text-neutral-200 leading-relaxed italic">
                                        "{article.summary}"
                                    </p>
                                </div>
                            )}

                            {/* Body Content */}
                            <div className="prose-custom text-neutral-300 leading-relaxed text-lg space-y-6">
                                {article.content || <p>{article.excerpt}</p>}
                            </div>

                            {/* Tags */}
                            {article.tags?.length > 0 && (
                                <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                                    <div className="flex items-center gap-3 mb-4">
                                        <i className="fa-solid fa-tags text-orange-500"></i>
                                        <h3 className="font-bold text-white">الوسوم</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {article.tags.map((tag, i) => (
                                            <span key={i} className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626]">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Share & Author Card */}
                            <ArticleShare />
                            <AuthorCard author={article.author} />
                        </div>

                        {/* Right Sticky Sidebar */}
                        <aside className="order-1 lg:order-2">
                            <div className="lg:sticky lg:top-24 space-y-6">
                                <TableOfContents sections={article.sections} />
                                <ArticleInfoCard readTime={article.readTime} date={article.date} />
                                <NewsletterCard />
                            </div>
                        </aside>

                    </div>

                    {/* 3. Related Articles Bottom Section */}
                    <RelatedArticles articles={related} />
                </div>
            </article>
        </main>
    );
}