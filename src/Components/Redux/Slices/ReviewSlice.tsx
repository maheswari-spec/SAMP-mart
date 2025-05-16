import { useSelector } from "react-redux";
import type { RootState } from "../Store/Store";
import { createSlice } from "@reduxjs/toolkit";

const products = useSelector((state: RootState) => state.productData.data);

const reviewSlice = createSlice({
  name: "review",
  initialState,
});
