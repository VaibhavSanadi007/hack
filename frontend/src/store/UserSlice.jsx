import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:'',
}

const userslice = createSlice({
  name:'user',
  initialState,
  reducers:{
    userdetails(state,action){
      state.value = action.payload;
    },
  }
})

export const {userdetails} = userslice.actions;
export default userslice.reducer;