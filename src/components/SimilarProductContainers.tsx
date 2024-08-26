import { useSelector } from "react-redux";
import { RootState } from "../store/appStore"; // Update with your actual path
import { useGetProductsByCategory } from "../hooks/useGetProductsByCategory";
import HomePageProductCard from "./HomePageProductCard";

// Define the type for product data if not already defined
interface Product {
    id: string;
    title: string;
    images: string[];
    price: number;
    discountPercentage: number;
    rating: number;
    brand: string;
    availabilityStatus: string;
    // Add other fields if necessary
}

interface SimilarProductsContainerProps {
    category: string;
}

const SimilarProductsContainer: React.FC<SimilarProductsContainerProps> = ({ category }) => {
    // Retrieve category products from the Redux store
    const categoryProducts = useSelector((store: RootState) => store.product.categoryProducts);

    // Fetch products by category using custom hook
    useGetProductsByCategory(category);

    // Get the products for the specified category
    const products: Product[] | undefined = categoryProducts[category];

    return (
        <div className="bg-white mx-2 my-2">
            <div className="p-4">
                <h1 className="font-semibold text-2xl mb-3">Similar Products</h1>

                <div className="flex items-center overflow-x-scroll remove-scrollbar">
                    {products ? (
                        products.map((product) => (
                            <HomePageProductCard
                                key={product.id}
                                category={"Similar Products"}
                                productData={product}
                            />
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SimilarProductsContainer;
