import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Filters {
    price: number;
    brands: string[];
    discounts: number[];
    ratings: number[];
}

interface ProductState {
    dealProducts: any[]; // Replace `any` with the actual type
    categoryProducts: Record<string, any>; // Replace `any` with the actual type
    productInfo: any | null; // Replace `any` with the actual type
    filteredProducts: any[]; // Replace `any` with the actual type
    filters: Filters;
}

const initialState: ProductState = {
    dealProducts: [],
    categoryProducts: {},
    productInfo: null,
    filteredProducts: [],
    filters: {
        price: Infinity,
        brands: [],
        discounts: [],
        ratings: [],
    },
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addDealProducts: (state, action: PayloadAction<any[]>) => {
            state.dealProducts = action.payload;
        },
        addCategoryProducts: (state, action: PayloadAction<Record<string, any>>) => {
            state.categoryProducts = { ...state.categoryProducts, ...action.payload };
        },
        addProductInfo: (state, action: PayloadAction<any>) => {
            state.productInfo = action.payload;
        },
        addFilteredProducts: (state, action: PayloadAction<any[]>) => {
            state.filteredProducts = action.payload;
        },

        addPriceFilter: (state, action: PayloadAction<number>) => {
            state.filters.price = action.payload;
        },

        addBrandsFilter: (state, action: PayloadAction<string[]>) => {
            state.filters.brands = [...new Set([...state.filters.brands, ...action.payload])];
        },
        removeBrandsFromFilter: (state, action: PayloadAction<string>) => {
            state.filters.brands = state.filters.brands.filter(brand => brand !== action.payload);
        },

        addDiscountFilter: (state, action: PayloadAction<number[]>) => {
            state.filters.discounts = [...new Set([...state.filters.discounts, ...action.payload])];
        },

        removeDiscountFilter: (state, action: PayloadAction<number>) => {
            state.filters.discounts = state.filters.discounts.filter(discount => discount !== action.payload);
        },

        addRatingsFilter: (state, action: PayloadAction<number[]>) => {
            state.filters.ratings = action.payload;
        },
        removeRatingsFilter: (state, action: PayloadAction<number>) => {
            state.filters.ratings = state.filters.ratings.filter(rating => rating !== action.payload);
        },
    },
});

export const {
    addDealProducts,
    addCategoryProducts,
    addProductInfo,
    addFilteredProducts,
    addPriceFilter,
    addBrandsFilter,
    removeBrandsFromFilter,
    addDiscountFilter,
    removeDiscountFilter,
    addRatingsFilter,
    removeRatingsFilter,
} = productSlice.actions;
export default productSlice.reducer;
