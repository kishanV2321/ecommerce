import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import appSlice from "./appSlice";
import cartSlice from "./cartSlice";

const appStore = configureStore({
    reducer: {
        app: appSlice,
        product: productSlice,
        cart: cartSlice,
    },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export default appStore;
