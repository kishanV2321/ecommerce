import { useDispatch, useSelector } from "react-redux";
import { SEARCH_PRODUCT_API } from "../utils/apis";
import { addCategoryProducts } from "../store/productSlice";
import { useEffect } from "react";
import { RootState, AppDispatch } from "../store/appStore"; // Import the necessary types

// Define a type for the product structure if needed
interface Product {
    id: number;
    name: string;
    // Add other fields based on your actual product structure
}

// Define a type for the category products object


// Define the hook
export const useGetProductsByQuery = (query: string) => {
    const dispatch: AppDispatch = useDispatch();

    const categoryProducts = useSelector((store: RootState) => store.product.categoryProducts);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(`${SEARCH_PRODUCT_API}${query}`);
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                const data: { products: Product[] } = await res.json(); // Type the fetched data

                dispatch(
                    addCategoryProducts({
                        [query]: data.products,
                    })
                );
            } catch (error) {
                console.error("Failed to fetch products by query:", error);
            }
        };

        // If products for this query are already in the store, no need to call the API
        if (!Object.prototype.hasOwnProperty.call(categoryProducts, query)) {
            getData();
        }
    }, [query, dispatch, categoryProducts]); // Ensure `dispatch` and `categoryProducts` are included in the dependency array
};
