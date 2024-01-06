import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlices";
import { productsSlice } from "./slices/products/productsSlices";




export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        products: productsSlice.reducer
    }
})