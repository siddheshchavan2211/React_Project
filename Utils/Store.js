import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Utils/CartSlice";
const Store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
export default Store;
