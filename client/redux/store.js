import { configureStore } from '@reduxjs/toolkit'
import   { cartReducer, isLoggedinReducer }  from './cartSlice'

// const persistConfig = {
//   key: 'root',
//   storage:localStorage
// }

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    isLoggedin: isLoggedinReducer
  },
})

// const export {cartSlice}

// const persistedReducer = persistReducer(persistConfig, reducers);
