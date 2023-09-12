import { createSlice } from "@reduxjs/toolkit";
import {storeData} from '../../Data'
import { store } from "../store";

const initialState = {
    products: storeData,
    amount: 0 ,
    total:0
}
const basketSlice = createSlice({
    name: 'basket',
    initialState
      
})

export default basketSlice.reducer
