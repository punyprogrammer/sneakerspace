import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/dummyData";
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: products,
    allProducts: products,
  },
  reducers: {
    changeProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { changeProducts } = productSlice.actions;
export default productSlice.reducer;
