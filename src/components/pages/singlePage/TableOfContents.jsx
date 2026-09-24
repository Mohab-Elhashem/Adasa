export default function TableOfContents({ sections = [] }) {
    return (
        <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                    <i className="fa-solid fa-list text-orange-500"></i>
                </div>
                <h3 className="font-bold text-white">محتويات المقال</h3>
            </div>
            <nav className="space-y-2">
                {sections.map((sec, index) => (
                    <a
                        key={index}
                        href={`#section-${index}`}
                        className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                    >
                        <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                            {index + 1}
                        </span>
                        <span className="text-sm">{sec.title}</span>
                    </a>
                ))}
            </nav>
        </div>
    );
}