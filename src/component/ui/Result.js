import React from 'react'
import styled from 'styled-components'

const WrapperSpan=styled.div`
grid-area: 1 / 1 / span 1 / span 4;
display:flex;
align-items:center;
justify-content:end;
padding:0 20px;
`

const ResultText=styled.div`
    font-size:1.8rem;
    color:${props=>props.color}
`

export const Result = (props) => {
  return (
    <WrapperSpan>
        <ResultText
        color={props.color}
        >
            0
        </ResultText>
    </WrapperSpan>
  )
}
