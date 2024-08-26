import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: string;
    title: string;
    brand: string;
    price: number;
    discountPercentage: number;
    availabilityStatus: string;
    minimumOrderQuantity: number;
    images: string[];
}

interface CartState {
    cartItems: Product[]; // Updated to Product[]
    subtotals: number[];
    discounts: number[];
}

const initialState: CartState = {
    cartItems: [],
    subtotals: [],
    discounts: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => { // Updated to Product
            state.cartItems.push(action.payload);
        },
        addSubTotalsWithoutDiscount: (
            state,
            action: PayloadAction<{ index: number; price: number }>
        ) => {
            const { index, price } = action.payload;
            state.subtotals[index] = price;
        },
        addDiscounts: (
            state,
            action: PayloadAction<{ index: number; discount: number }>
        ) => {
            const { index, discount } = action.payload;
            state.discounts[index] = discount;
        },
        removeCartItem: (state, action: PayloadAction<string>) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
    },
});

export const {
    addToCart,
    removeCartItem,
    clearCart,
    addSubTotalsWithoutDiscount,
    addDiscounts,
} = cartSlice.actions;
export default cartSlice.reducer;
