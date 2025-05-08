import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "../Slices/CartSlice";
import productDataReducer from "../Slices/DataSlice";

export const store = configureStore({
  reducer: {
    cart: cartItemReducer,
    productData: productDataReducer,
  },
});
