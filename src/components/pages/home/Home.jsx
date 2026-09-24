import Categories from "./Categories";
import FeaturedArticles from "./FeaturedArticle";
import HeroSection from "./HeroSection";
import LatestArticles from "./LatestArticles";
import Newsletter from "./Newsletter";


export default function Home() {
    return <>
        <HeroSection />
        <FeaturedArticles />
        <Categories/>
        <LatestArticles/>
        <Newsletter/>
    </>
}