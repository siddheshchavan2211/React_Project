import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },

  reducers: {
    addtocart: (state, action) => {
      state.items.push(action.payload);
    },
    removeitem: (state, action) => {
      state.items.pop();
    },
    clearcart: (state) => {
      state.items = [];
    },
  },
});
export const { addtocart, removeitem, clearcart } = CartSlice.actions;
export default CartSlice.reducer;
