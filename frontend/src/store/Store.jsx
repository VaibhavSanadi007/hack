import {configureStore} from '@reduxjs/toolkit';
import userReducer from './UserSlice.jsx';
import cartReducer from './CartSlice.jsx';
export const rtkstore = configureStore({
 reducer:{
   user:userReducer,
   cart:cartReducer,
 }
})

rtkstore.subscribe(()=>{
  const state = rtkstore.getState();
  localStorage.setItem('cart',JSON.stringify(state.cart.value));
})