<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const appSlices = createSlice({
  name:'app',
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
   
  },
});

export const  { toggleMenu,closeMenu} = appSlices.actions
export default appSlices.reducer;
=======
import { createSlice } from "@reduxjs/toolkit";

const appSlices = createSlice({
  name:'app',
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
   
  },
});

export const  { toggleMenu,closeMenu} = appSlices.actions
export default appSlices.reducer;
>>>>>>> a961a138bba5c8247523ddbf9c3b6d1012917cc9
