import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { useGetProductsByCategory } from "../hooks/useGetProductsByCategory";
import { categoryList } from "../utils/categoryList"
import { useGetAllProducts } from "../hooks/useGetAllProducts";
import { HomePageProductContainer, HomeProductSuggestions, HomePageSlider } from "../components";
import { RootState } from "../store/appStore"; // Import your RootState type

const HomeContainer = () => {
    const dealProducts = useSelector((store: RootState) => store.product.dealProducts);
    const categoryProducts = useSelector((store: RootState) => store.product.categoryProducts);
    const isSideBar = useSelector((store: RootState) => store.app.isSideBar);

    useGetAllProducts(); // Fetch all products (top deals)
    useGetProductsByCategory(categoryList[13]); // Smart phones
    useGetProductsByCategory(categoryList[7]); // Men's shirts
    useGetProductsByCategory(categoryList[3]); // Groceries

    // Handle body overflow when sidebar is opened
    document.body.style.overflow = isSideBar ? "hidden" : "auto";

    // Check if necessary category products are available
    if (Object.keys(categoryProducts).length >= 3) {
        return (
            <div
                className={
                    "px-2.5 sm:px-4 " +
                    (isSideBar ? "opacity-40 pointer-events-none" : "")
                }
            >
                <HomePageSlider />

                <HomePageProductContainer
                    products={dealProducts}
                    category={"Top Deals"}
                />

                <HomePageProductContainer
                    products={categoryProducts["smartphones"]}
                    category={"Best of Smartphones"}
                />

                <HomeProductSuggestions
                    products={categoryProducts["mens-shirts"]}
                    category={"Trending in Men's Fashion"}
                />

                <HomePageProductContainer
                    products={categoryProducts["groceries"]}
                    category={"Top Deals on Grocery"}
                />
            </div>
        );
    }

    // Fallback UI if the required category products are not yet available
    return (
        <div className="px-2.5 sm:px-4">
            <p>Loading products...</p>
        </div>
    );
};

export default HomeContainer;
