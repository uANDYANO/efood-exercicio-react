import { configureStore } from "@reduxjs/toolkit";

import api from "../services/api";
import cartReducer from "./reducers/cart";
import selectedRestaurantReducer from "./reducers/selectedRestaurant";
import selectedDishReducer from "./reducers/selectedDish";
import detailsModalReducer from "./reducers/detailsModal";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    selectedRestaurant: selectedRestaurantReducer,
    selectedDish: selectedDishReducer,
    detailsModal: detailsModalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootReducer = ReturnType<typeof store.getState>;
