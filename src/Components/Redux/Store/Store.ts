import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "../Slices/CartSlice";
import productDataReducer from "../Slices/DataSlice";
import authReducer from "../Slices/AuthSlice";

export const Store = configureStore({
  reducer: {
    cart: cartItemReducer,
    productData: productDataReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
