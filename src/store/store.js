import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "../slices/calculatorSlice";

const store=configureStore({
    reducer:{
        calculator:calculatorSlice.reducer
    }
})
export default store;