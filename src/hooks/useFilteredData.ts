import { getCalculatedAmount } from "../utils/helper";

interface Product {
    price: number;
    discountPercentage: number;
}

export const useFilteredData = (products: Product[] | null): [number, number][] | undefined => {
    if (products) {
        return products.map((product) => {
            return getCalculatedAmount(product.price, product.discountPercentage);
        });
    }
    return undefined;
};
