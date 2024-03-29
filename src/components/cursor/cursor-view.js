import React from 'react'
import styled from 'styled-components'

const Outer = styled.div`
  transition: transform 1s ease 0.3s;
  transform: scale3d(1, 1, 1);
  width: 45px;
  height: 45px;
  border: 3px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  position: absolute;
  top: 100px;
  left: 100px;
  pointer-events: none;
  z-index: ${props => props.theme.zIndexes.cursor};
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
  pointer-events: none;
  z-index: ${props => props.theme.zIndexes.header};
`

const CursorView = () => (
  <div>
    <Outer className="pointer-outer"></Outer>
    <Inner className="pointer-inner"></Inner>
  </div>
)

export default CursorView;