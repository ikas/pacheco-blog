import React from 'react'
import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

import Container from '../container'
import Copy from '../copy'

const Footer = styled.footer`
  ${space}
  ${layout}
  ${color}
`

export default () => (
  <Footer bg="primary">
    <Container>
      <Copy color="white" mx={0} my={2}>Henrique Pacheco</Copy>
    </Container>
  </Footer>
)