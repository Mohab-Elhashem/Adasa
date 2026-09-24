import { Search } from "lucide-react";

export default function BlogEmptyState() {
    return (
        <div className="text-center py-20 bg-[#161616] border border-[#262626] rounded-2xl">
            <Search className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">لا توجد مقالات مطابقة</h3>
            <p className="text-neutral-400 text-sm max-w-md mx-auto">
                جرب البحث عن كلمات أخرى أو اختر تصنيفاً مختلفاً من القائمة أعلاه.
            </p>
        </div>
    );
}