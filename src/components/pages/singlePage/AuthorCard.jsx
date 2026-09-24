export default function AuthorCard({ author }) {
    return (
        <div className="mt-6 p-8 bg-linear-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                    alt={author?.name}
                    className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20"
                    src={author?.avatar}
                />
                <div className="text-center sm:text-right flex-1">
                    <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">كاتب المقال</span>
                    <h3 className="text-xl font-bold text-white mt-1">{author?.name}</h3>
                    <p className="text-neutral-500 text-sm mb-3">{author?.role}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                        {author?.bio || "مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي."}
                    </p>
                </div>
            </div>
        </div>
    );
}