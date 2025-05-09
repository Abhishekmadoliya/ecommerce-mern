import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      state.cart.push(action.payload);
    },
    removecart: (state, action) => {
      state.cart = state.cart.filter((i) => i.id != action.payload);
    },
  },
});

export const isLoggedinSlice = createSlice(
  {
    name:"isloggedin",
    initialState:{
      value:false,
      username:'User'
    },
    reducers:{
      login:(state,action)=>{
        state.value = true
        state.username=action.payload
      },
      logout:(state)=>{
        state.value = false
        state.username= 'User'
      }
    }
  
  }
)

// Action creators are generated for each case reducer function
export const { addTocart,removecart } = cartSlice.actions;
export const { login, logout } = isLoggedinSlice.actions;


// export default  cartSlice.reducer
export const cartReducer = cartSlice.reducer;
export const isLoggedinReducer = isLoggedinSlice.reducer;
