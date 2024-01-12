<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const searchSlices = createSlice({
  name:'search',
  initialState: {
   
  },
  reducers: {
    
    searchItem : (state,action)=>{
      state = action.payload
    }
},
});

export const  { searchItem} = searchSlices.actions
export default searchSlices.reducer;
=======
import { createSlice } from "@reduxjs/toolkit";

const searchSlices = createSlice({
  name:'search',
  initialState: {
   
  },
  reducers: {
    
    searchItem : (state,action)=>{
      state = state.action.payload
    }
},
});

export const  { searchItem} = searchSlices.actions
export default searchSlices.reducer;
>>>>>>> a961a138bba5c8247523ddbf9c3b6d1012917cc9
