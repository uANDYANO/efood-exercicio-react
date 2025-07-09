import { createSlice } from "@reduxjs/toolkit";

type DetailsModalState = {
  isOpen: boolean;
};

const initialState: DetailsModalState = {
  isOpen: false,
};

const detailsModalSlice = createSlice({
  name: "detailsModal",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = detailsModalSlice.actions;
export default detailsModalSlice.reducer;
