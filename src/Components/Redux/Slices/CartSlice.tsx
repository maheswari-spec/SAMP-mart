import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type CartItem = {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
  [key: string]: any;
};

type CartState = CartItem[];

const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const initialState: CartState = cartLocalStorage;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (itemExists) {
        toast.error("Item already in cart");
      } else {
        state.push({ ...action.payload, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify([...state]));
        toast.success("Added to cart");
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      const newProducts = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify([...newProducts]));
      return newProducts;
    },
    buyItem() {
      localStorage.setItem("cart", JSON.stringify([]));
      return [];
    },
    clearCartItem() {
      localStorage.setItem("cart", JSON.stringify([]));
      return [];
    },
    increaseQuantity(state, action: PayloadAction<string>) {
      const item = state.find((item) => item.id == action.payload);
      if (item) {
        item.quantity += 1;
        localStorage.setItem("cart", JSON.stringify([...state]));
      }
    },
    decreaseQuantity(state, action: PayloadAction<string>) {
      const item = state.find((item) => item.id == action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify([...state]));
      }
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeItem,
  buyItem,
  clearCartItem,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
