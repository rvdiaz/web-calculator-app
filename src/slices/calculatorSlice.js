import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice=createSlice({
    name:'calculator',
    initialState:{
        firstOperator:'',
        secondOperator:'',
        operation:'',
        result:'0'
    },
    reducers:{
        resetCalculator(state){
            state.firstOperator='';
            state.secondOperator='';
            state.operation='';
            state.result='0';
        },
        numberSelections(state,newValue){
            if(state.operation==''){
                if(state.result=='0')
                    state.result=newValue.payload;
                else
                    state.result=state.result+''+newValue.payload;
            }
        },
        oppositeCalculator(state){
            const resAux=parseFloat(state.result);
            if(state.result!='0'){
                state.result='' + -resAux;
            }
        }
    }
})

export const calculatorActions=calculatorSlice.actions;

export default calculatorSlice;