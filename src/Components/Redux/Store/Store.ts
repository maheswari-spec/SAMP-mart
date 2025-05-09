import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "../Slices/CartSlice";
import productDataReducer from "../Slices/DataSlice";

export const Store = configureStore({
  reducer: {
    cart: cartItemReducer,
    productData: productDataReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
