import { Link } from "react-router-dom";

export default function NewsletterCard() {
    return (
        <div className="p-6 bg-linear-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">
            <div className="text-center">
                <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-envelope text-orange-500 text-xl"></i>
                </div>
                <h3 className="font-bold text-white mb-2">لا تفوّت جديدنا</h3>
                <p className="text-neutral-400 text-sm mb-4">اشترك للحصول على أحدث المقالات</p>
                <Link className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center" to="/blog">
                    تصفح المزيد
                </Link>
            </div>
        </div>
    );
}