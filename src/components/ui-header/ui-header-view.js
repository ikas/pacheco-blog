import React from 'react'
import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

import Anchor from '../anchor'
import Container from '../container'

const Header = styled.header`
  ${space}
  ${layout}
  ${color}
  display: flex;
  justify-content: space-between;
  z-index: ${props => props.theme.zIndexes.header};
`

const HeaderAnchors = styled(Anchor)`
  text-decoration: none;
  font-weight: 600;

  &::after {
    content: '';
    display: block;
    background: ${props => props.theme.colors.primary};
    width: calc(100% - 10px);
    height: 3px;
    left: 0;
    transform: translateX(5px) scale3d(0,1,1);
    transition: transform 0.25s ease;
  }

  &.active::after, &:hover::after {
    transform: translateX(5px) scale3d(1,1,1);
  }
`

const UIHeaderView = ({ currentUrl }) => (
  <Container>
    <Header px={[3, 4]} pt={5}>
      <HeaderAnchors to="/" className={currentUrl === '/' ? 'active' : ''}>Home</HeaderAnchors>
      <HeaderAnchors to="/about" className={currentUrl === '/about' ? 'active' : ''}>About</HeaderAnchors>
    </Header>
  </Container>
)

export default UIHeaderView;