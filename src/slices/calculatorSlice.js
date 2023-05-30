import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice=createSlice({
    name:'calculator',
    initialState:{
        firstOperator:'',
        secondOperator:'',
        operation:'',
        result:0
    },
    recucers:{
        resetCalculator(state){
            state.firstOperator='';
            state.secondOperator='';
            state.operation='';
            state.result=0;
        }
    }
})

export const calculatorActions=calculatorSlice.actions;

export default calculatorSlice;