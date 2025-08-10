import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem('cart')) || [],
}

const cartslice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    addItem: (state,action)=>{
    state.value.push({...action.payload,quantity:1,total:action.payload.price});
    },
    updateItem:(state,action)=>{
     state.value = state.value.map((items)=>{ 

        if(items._id===action.payload._id){
          return {...items,quantity:items.quantity+1,total:action.payload.price*(items.quantity+1)};
        }
        return items;
        })

    },
   updatebyid:(state,action)=>{
     state.value = state.value.map((items)=>{ 
        if(items._id===action.payload){
          return {...items,quantity:items.quantity+1,total:items.price*(items.quantity+1)};
        }
        return items;
        })
   },
   decreasebyid:(state,action)=>{
     state.value = state.value.map((items)=>{ 
        if(items._id===action.payload){
          return {...items,quantity:items.quantity<=0?0:items.quantity-1,total:items.quantity<=0?0:items.price*(items.quantity-1)};
        }
        return items;
        })
   },
   removeItem:(state,action)=>{
    console.log(action.payload)
    state.value = state.value.filter((items)=> items._id!==action.payload);
   }
   
  },
})

export const {addItem,updateItem,updatebyid,decreasebyid,removeItem} = cartslice.actions;
export default cartslice.reducer;
