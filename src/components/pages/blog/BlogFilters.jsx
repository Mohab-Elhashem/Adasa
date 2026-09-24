
import { Search, X } from "lucide-react";
import { Container } from "../../ui/Container";

export default function BlogFilters({
    searchQuery,
    onSearchChange,
    onClearSearch,
    selectedCategory,
    onCategoryChange,
    categories = [],
}) {
    return (
        <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
            <Container className="py-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Search Input */}
                    <div className="relative w-full md:w-80">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={onSearchChange}
                            placeholder="ابحث في المقالات..."
                            className="w-full px-5 py-3 pr-12 pl-10 bg-[#161616] border border-[#262626] rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/50 transition-colors text-sm"
                        />
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 pointer-events-none" />
                        {searchQuery && (
                            <button
                                onClick={onClearSearch}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    {/* Category Buttons */}
                    <div className="flex flex-wrap justify-center gap-2">
                        <button
                            onClick={() => onCategoryChange("الكل")}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${selectedCategory === "الكل"
                                    ? "bg-linear-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"
                                    : "bg-[#161616] border border-[#262626] text-neutral-400 hover:text-white hover:border-neutral-700"
                                }`}
                        >
                            الكل
                        </button>

                        {categories.map((item) => {
                            const isActive = selectedCategory === item.name;
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => onCategoryChange(item.name)}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
                                            ? "bg-linear-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"
                                            : "bg-[#161616] border border-[#262626] text-neutral-400 hover:text-white hover:border-neutral-700"
                                        }`}
                                >
                                    {item.name}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </div>
    );
}