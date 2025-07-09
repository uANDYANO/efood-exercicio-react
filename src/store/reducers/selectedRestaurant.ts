import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Restaurant } from "../../services/api";

type SelectedRestaurantState = {
  restaurant: Restaurant | null;
};

const initialState: SelectedRestaurantState = {
  restaurant: null,
};

const SelectedRestaurantSlice = createSlice({
  name: "selectedRestaurant",
  initialState,
  reducers: {
    selectRestaurant: (state, action: PayloadAction<Restaurant>) => {
      state.restaurant = action.payload;
    },
    clear: (state) => {
      state.restaurant = null;
    },
  },
});

export const { selectRestaurant, clear } = SelectedRestaurantSlice.actions;
export default SelectedRestaurantSlice.reducer;
