import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductItem, ReviewType } from "../../Types/Types";

type ProductData = {
  data: ProductItem[];
};

const initialState: ProductData = {
  data: [],
};

const dataSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductData: (state, action: PayloadAction<ProductItem[]>) => {
      state.data = action.payload;
    },
    deleteProductData: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter(
        (product) => product.id !== action.payload
      );
    },

    updateProductPrice: (
      state,
      action: PayloadAction<{ id: number; value: number }>
    ) => {
      const { id, value } = action.payload;
      const product = state.data.find((p) => p.id === id);
      if (product) {
        product.price = value;
      }
    },
    updateProductTitle: (
      state,
      action: PayloadAction<{ id: number; title: string }>
    ) => {
      const { id, title } = action.payload;
      const product = state.data.find((p) => p.id === id);
      if (product) {
        product.title = title;
      }
    },
    updateProductStock: (
      state,
      action: PayloadAction<{ id: number; stock: number }>
    ) => {
      const { id, stock } = action.payload;
      const product = state.data.find((p) => p.id === id);
      if (product) {
        product.stock = stock;
      }
    },
    addNewReview: (
      state,
      action: PayloadAction<{ productId: number; review: ReviewType }>
    ) => {
      const { productId, review } = action.payload;
      const product = state.data.find((p) => p.id === productId);
      if (product) {
        product.reviews?.push(review);
      }
    },
    addNewProduct: (
      state,
      action: PayloadAction<{ newProduct: ProductItem }>
    ) => {
      state.data.push(action.payload.newProduct);
    },
  },
});

export const {
  setProductData,
  updateProductPrice,
  updateProductTitle,
  updateProductStock,
  addNewReview,
  addNewProduct,
  deleteProductData,
} = dataSlice.actions;
export default dataSlice.reducer;
