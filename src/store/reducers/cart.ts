import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dish } from "../../services/api";

type CartState = {
  items: Dish[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Dish>) => {
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1);
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { add, remove, open, close, clear } = cartSlice.actions;
export default cartSlice.reducer;
