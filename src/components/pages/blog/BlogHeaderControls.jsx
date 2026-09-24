import { LayoutGrid, List } from "lucide-react";

export default function BlogHeaderControls({ totalCount, viewMode, onViewModeChange }) {
    return (
        <div className="mb-8 flex items-center justify-between">
            <p className="text-neutral-400">
                عرض <span className="font-bold text-white mx-1">{totalCount}</span> مقالات
            </p>
            <div className="flex items-center gap-2">
                <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                    <button
                        onClick={() => onViewModeChange("grid")}
                        className={`p-2 rounded-lg transition-all duration-300 ${
                            viewMode === "grid" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"
                        }`}
                        title="عرض شبكي"
                    >
                        <LayoutGrid className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => onViewModeChange("list")}
                        className={`p-2 rounded-lg transition-all duration-300 ${
                            viewMode === "list" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"
                        }`}
                        title="عرض قائمة"
                    >
                        <List className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}