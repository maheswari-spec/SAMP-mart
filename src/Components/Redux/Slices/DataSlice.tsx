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
  },
});

export const { setProductData } = dataSlice.actions;
export default dataSlice.reducer;
