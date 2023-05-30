import { createSlice } from "@reduxjs/toolkit";
import { getResult } from "../helpers/getResult";

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
            if(state.operation===''){
                if(state.result==='0')
                    state.result=newValue.payload;
                else
                    state.result=state.result+''+newValue.payload;
            }else {
                if(state.secondOperator===''){
                    state.result=newValue.payload;
                    state.secondOperator=parseFloat(state.result);
                }
                else{
                    state.result=state.result+''+newValue.payload;
                    state.secondOperator=parseFloat(state.result);
                }
            }
        },
        oppositeCalculator(state){
            const resAux=parseFloat(state.result);
            if(state.result!=='0'){
                if(state.secondOperator!==''){
                    state.result='' + -resAux;
                    state.secondOperator=parseFloat(state.result);
                }else
                state.result='' + -resAux;
            }
        },
        percentCalculator(state,newValue){
            const resAux=parseFloat(state.result);
            if(state.result!=='0'){
                state.result='' + resAux/100;
            } 
            else{
                if(state.secondOperator===''){
                    state.result=newValue.payload;
                    state.secondOperator=parseFloat(state.result);
                }
                else{
                    state.result=state.result+''+newValue.payload;
                    state.secondOperator=parseFloat(state.result);
                }
                    
            }
        },
        addingOperation(state,operation){
            if(operation.payload!=='='){
                if(state.secondOperator===''){
                    state.operation=operation.payload;
                    state.firstOperator=parseFloat(state.result);
            }
            }else{
                if(state.firstOperator!=='' && state.secondOperator!=='' && state.operation!=='')
                state.result=getResult(state.firstOperator,state.secondOperator,state.operation);
                state.firstOperator='';
                state.secondOperator='';
                state.operation='';
            }
        }
    }
})

export const calculatorActions=calculatorSlice.actions;

export default calculatorSlice;