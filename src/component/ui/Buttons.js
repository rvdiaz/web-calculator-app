import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { calculatorActions } from '../../slices/calculatorSlice';
import data from '../../data/data.json';

const ButtonCalculator = styled.button`
    font-size:1.6rem;
    color:${props => props.color };
    background-color:${props=>props.background};
    grid-area:${props=>props.area};
    border:none;
  `;
export const Buttons = (props) => {
  const {value,type,color,background,area}=props;
  const {theme,mediumOperations,basicOperations}=data;
  const dispatch=useDispatch();
  
  const mediumHandler=()=>{
    switch (value) {
      case 'AC':
        dispatch(calculatorActions.resetCalculator());
        break; 
      default:
        break;
    }
  }
  
  const handleClick=()=>{
    switch (type) {
      case 'basic':
        dispatch(calculatorActions.addingOperation(value));
        break;
      case 'medium':  
        mediumHandler();
        break;
      default:
        dispatch(calculatorActions.numberSelections(value));
        break;
    }
  }

  return (
    <>
    <ButtonCalculator 
      area={area} 
      color={color} 
      background={background}
      type={type}
      onClick={handleClick}
      >
        {value}
    </ButtonCalculator>
    </>
  )
}
