export default function ArticleShare() {
    return (
        <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
            <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                        <i className="fa-solid fa-share-nodes text-orange-500"></i>
                    </div>
                    <h3 className="font-bold text-white">شارك المقال</h3>
                </div>
                <div className="flex gap-2">
                    <button aria-label="Share on X" className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white transition-all">
                        <i className="fa-brands fa-x-twitter"></i>
                    </button>
                    <button aria-label="Share on LinkedIn" className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white transition-all">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </button>
                    <button aria-label="Share on WhatsApp" className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#25d366] hover:text-white transition-all">
                        <i className="fa-brands fa-whatsapp"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}