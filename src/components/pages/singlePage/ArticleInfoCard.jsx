export default function ArticleInfoCard({ readTime, date }) {
    return (
        <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
            <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                    <i className="fa-regular fa-clock text-orange-500 text-xl mb-2"></i>
                    <p className="text-white font-bold">{readTime}</p>
                    <p className="text-neutral-500 text-xs">وقت القراءة</p>
                </div>
                <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                    <i className="fa-regular fa-calendar text-orange-500 text-xl mb-2"></i>
                    <p className="text-white font-bold text-sm">{date}</p>
                    <p className="text-neutral-500 text-xs">تاريخ النشر</p>
                </div>
            </div>
        </div>
    );
}