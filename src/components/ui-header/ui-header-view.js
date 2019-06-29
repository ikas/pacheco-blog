import React from 'react'
import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

import Anchor from '../anchor'

const Header = styled.header`
  ${space}
  ${layout}
  ${color}
  display: flex;
  justify-content: space-between;
`

const HeaderAnchors = styled(Anchor)`
  text-decoration: none;
  font-weight: 600;

  &.active {
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }
`

export default ({ currentUrl }) => (
  <Header px={[3, 4]} pt={5}>
    <HeaderAnchors href="/" className={currentUrl === '/' ? 'active' : ''}>Home</HeaderAnchors>
    <HeaderAnchors href="/about" className={currentUrl === '/about' ? 'active' : ''}>About</HeaderAnchors>
  </Header>
)