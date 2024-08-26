import { useEffect } from "react";
import { SINGLE_PRODUCT_API } from "../utils/apis";
import { useDispatch } from "react-redux";
import { addProductInfo } from "../store/productSlice";
import { AppDispatch } from "../store/appStore"; // Import your AppDispatch type

// Define a type for the product information if you have one, else use `any`
interface Product {
    id: number;
    name: string;
    price: number;
    // Add other fields as per your actual product structure
}

// Define the hook
export const useGetProductInfo = (id?: number) => { // Make id optional
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        if (id === undefined) return; // Return early if id is undefined

        const getData = async () => {
            try {
                const res = await fetch(`${SINGLE_PRODUCT_API}${id}`);
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                const data: Product = await res.json();
                dispatch(addProductInfo(data));
            } catch (error) {
                console.error("Failed to fetch product data:", error);
            }
        };

        getData();
    }, [id, dispatch]);
};
