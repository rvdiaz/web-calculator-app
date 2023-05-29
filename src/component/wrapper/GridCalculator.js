import React from 'react'
import styled from 'styled-components'

const GridCalculatorWrap=styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    grid-gap:1px;
    background-color:${props=>props.background};
    height:100vh;
  `  

export const GridCalculator = (props) => {
  return (
    <>
    <GridCalculatorWrap
        background={props.background}
    >
        {props.children}
    </GridCalculatorWrap>
    </>
  )
}
