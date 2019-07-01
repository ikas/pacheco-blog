import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    cursor: none !important;
  }
`

const Outer = styled.div`
  transition: transform 1s ease 0.3s;
  transform: scale3d(1, 1, 1);
  width: 40px;
  height: 40px;
  border: 3px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  position: absolute;
  top: 100px;
  left: 100px;
  // TODO: use styled systems
  z-index: 1;
  pointer-events: none;
`
  
const Inner = styled.div`
  transition: transform 1s ease;
  transform: scale3d(1, 1, 1);
  width: 5px;
  height: 5px;
  background: ${props => props.theme.colors.primary};
  border-radius: 50%;
  position: absolute;
  top: calc(100px + 37px/2);
  left: calc(100px + 37px/2);
  // TODO: use styled systems
  z-index: 1;
  pointer-events: none;
`

export default () => (
  <>
    <GlobalStyle />
    <Outer className="pointer-outer"></Outer>
    <Inner className="pointer-inner"></Inner>
  </>
)