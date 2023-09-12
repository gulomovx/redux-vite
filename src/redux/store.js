import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./features/basketSlice";
import basketReducer from './features/basketSlice'
export const store = configureStore({
    reducer: {
         basket: basketReducer 
    }
})








