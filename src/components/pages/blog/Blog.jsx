import { useMemo, useState } from "react";
import BlogHero from "./BlogHero";
import BlogFilters from "./BlogFilters";
import { Container } from "../../ui/Container";
import BlogHeaderControls from "./BlogHeaderControls";
import ArticleCard from "./ArticleCard";
import BlogPagination from "./BlogPagination";
import {categoryConfigs} from "@/constants/categoryConfigs"
import { featuresData } from "../../../constants/featuredArticles";
import BlogEmptyState from "./BlogEmptyState";


const ItemsInPage = 6;

export default function Blog() {
    const [viewMode, setViewMode] = useState("grid");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("الكل");
    const [currentPage, setCurrentPage] = useState(1);

    // filter items
    const filteredArticles = useMemo(() => {
        return featuresData.filter((article) => {
            const matchesCategory =
                selectedCategory === "الكل" || article.category === selectedCategory;
            const matchesSearch =
                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [searchQuery, selectedCategory]);

    const totalPages = Math.ceil(filteredArticles.length / ItemsInPage) || 1;

    // paginate items
    const paginatedArticles = useMemo(() => {
        const startIndex = (currentPage - 1) * ItemsInPage;
        return filteredArticles.slice(startIndex, startIndex + ItemsInPage);
    }, [filteredArticles, currentPage]);

    // Handlers
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleClearSearch = () => {
        setSearchQuery("");
        setCurrentPage(1);
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            {/* Hero Section */}
            <BlogHero />

            {/* Sticky Search & Filter Bar */}
            <BlogFilters
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                onClearSearch={handleClearSearch}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                categories={categoryConfigs}
            />

            {/* Main Content */}
            <Container className="py-12">
                <BlogHeaderControls
                    totalCount={filteredArticles.length}
                    viewMode={viewMode}
                    onViewModeChange={setViewMode}
                />

                {filteredArticles.length === 0 ? (
                    <BlogEmptyState />
                ) : (
                    <>
                        <div
                            className={
                                viewMode === "grid"
                                    ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                                    : "flex flex-col gap-6"
                            }
                        >
                            {paginatedArticles.map((article, index) => (
                                <ArticleCard
                                    key={article.id}
                                    article={article}
                                    viewMode={viewMode}
                                    index={index}
                                />
                            ))}
                        </div>

                        <BlogPagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    </>
                )}
            </Container>
        </div>
    );
}