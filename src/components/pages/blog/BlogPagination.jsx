import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BlogPagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;

    return (
        <div className="mt-12">
            <div className="flex justify-center items-center gap-2">
                {/* Previous Page Button (Right Arrow for RTL) */}
                <button
                    onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                    disabled={currentPage === 1}
                    className={`p-3 rounded-xl border transition-all duration-300 ${currentPage === 1
                            ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                            : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
                        }`}
                    title="الصفحة السابقة"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, index) => {
                        const pageNumber = index + 1;
                        const isActive = currentPage === pageNumber;

                        return (
                            <button
                                key={pageNumber}
                                onClick={() => onPageChange(pageNumber)}
                                className={`min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
                                        ? "bg-linear-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"
                                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                                    }`}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}
                </div>

                {/* Next Page Button (Left Arrow for RTL) */}
                <button
                    onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`p-3 rounded-xl border transition-all duration-300 ${currentPage === totalPages
                            ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                            : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
                        }`}
                    title="الصفحة التالية"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
            </div>

            <p className="text-center text-neutral-500 mt-4 text-sm">
                صفحة <span className="text-white font-medium">{currentPage}</span> من{" "}
                <span className="text-white font-medium">{totalPages}</span>
            </p>
        </div>
    );
}