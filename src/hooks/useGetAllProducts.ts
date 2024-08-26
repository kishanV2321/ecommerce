import { useEffect } from "react";
import { ALL_PRODUCTS_API } from "../utils/apis";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/appStore";
import { addDealProducts } from "../store/productSlice";

export const useGetAllProducts = () => {
    const dealProducts = useSelector((state: RootState) => state.product.dealProducts);

    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(ALL_PRODUCTS_API);
                const data = await res.json();
                dispatch(addDealProducts(data.products));
            } catch (error) {
                console.error("Failed to fetch products", error);
            }
        };

        if (dealProducts.length === 0) {
            getData();
        }
    }, [dealProducts.length, dispatch]);
};
