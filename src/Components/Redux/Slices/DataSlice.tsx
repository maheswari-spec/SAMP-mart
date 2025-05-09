import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductItem } from "../../Types/Types";

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
  },
});

export const { setProductData, updateProductPrice } = dataSlice.actions;
export default dataSlice.reducer;
