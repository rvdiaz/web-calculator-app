import React from 'react'
import styled from 'styled-components';


const ButtonCalculator = styled.button`
    font-size:1.6rem;
    color:${props => props.color };
    background-color:${props=>props.background};
    grid-area:${props=>props.area};
    border:none;
  `;
export const Buttons = (props) => {
  const {value,type,color,background,area}=props;
  
  return (
    <>
    <ButtonCalculator 
      area={area} 
      color={color} 
      background={background}
      type={type}
      >
        {value}
    </ButtonCalculator>
    </>
  )
}
