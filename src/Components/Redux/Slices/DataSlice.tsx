import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../Types/Types";

type ProductData = {
  data: Product[];
};

const initialState: ProductData = {
  data: [],
};

const dataSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductData: (state, action: PayloadAction<Product[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setProductData } = dataSlice.actions;
export default dataSlice.reducer;
