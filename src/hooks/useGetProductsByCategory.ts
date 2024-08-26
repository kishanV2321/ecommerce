import { useDispatch, useSelector } from 'react-redux';
import { PRODUCTS_BY_CATEGORY_API } from '../utils/apis';
import { addCategoryProducts } from '../store/productSlice';
import { useEffect } from 'react';
import { RootState, AppDispatch } from '../store/appStore';

interface Product {
    id: number;
    name: string;
}

export const useGetProductsByCategory = (category: string) => {
    const dispatch: AppDispatch = useDispatch();

    const categoryProducts = useSelector((store: RootState) => store.product.categoryProducts);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(`${PRODUCTS_BY_CATEGORY_API}${category}`);
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                const data: { products: Product[] } = await res.json();
                console.log("Fetched category products:", data);

                dispatch(
                    addCategoryProducts({
                        [category]: data.products,
                    })
                );
            } catch (error) {
                console.error("Failed to fetch products by category:", error);
            }
        };

        if (category && !Object.prototype.hasOwnProperty.call(categoryProducts, category)) {
            getData();
        }
    }, [category, dispatch, categoryProducts]);
};
