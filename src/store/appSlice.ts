import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchCache {
    [key: string]: any;
}

interface GeminiFilteredSearch {
    price?: number | null;
    isPriceUnder?: boolean | null;
    brand?: string | null;
    [key: string]: any;
}

interface AppState {
    isSideBar: boolean;
    loginPopUp: boolean;
    searchCache: SearchCache;
    geminiFilteredSearch: GeminiFilteredSearch;
}

const initialState: AppState = {
    isSideBar: false,
    loginPopUp: false,
    searchCache: {},
    geminiFilteredSearch: {},
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleSideBar: (state) => {
            state.isSideBar = !state.isSideBar;
        },
        addLoginPopUp: (state) => {
            state.loginPopUp = !state.loginPopUp;
        },
        addSearchCache: (state, action: PayloadAction<SearchCache>) => {
            if (Object.keys(state.searchCache).length > 5) {
                const firstKey = Object.keys(state.searchCache)[0];
                delete state.searchCache[firstKey];
            }
            state.searchCache = { ...state.searchCache, ...action.payload };
        },
        addGeminiFilteredSearch: (state, action: PayloadAction<GeminiFilteredSearch>) => {
            state.geminiFilteredSearch = action.payload;
        },
        removeGeminiFilter: (state) => {
            state.geminiFilteredSearch = {};
        },
        removeGeminiPriceFilter: (state) => {
            state.geminiFilteredSearch.price = null;
        },
        removeGeminiIsPriceUnder: (state) => {
            state.geminiFilteredSearch.isPriceUnder = null;
        },
        removeGeminiBrandFilter: (state) => {
            state.geminiFilteredSearch.brand = null;
        },
    },
});

export const {
    toggleSideBar,
    addLoginPopUp,
    addSearchCache,
    addGeminiFilteredSearch,
    removeGeminiPriceFilter,
    removeGeminiIsPriceUnder,
    removeGeminiBrandFilter,
} = appSlice.actions;
export default appSlice.reducer;
