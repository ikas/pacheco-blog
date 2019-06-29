import React from 'react'
import styled from 'styled-components'

import Anchor from '../../anchor'
import Heading from '../../heading'

const Wrapper = styled.div`
  margin-bottom: 128px;
`

const StyledAnchor = styled(Anchor)`
  color: ${props => props.theme.colors.primary};
  font-weight: normal;
  text-decoration: none;
`

export default () => (
  <Wrapper>
    <Heading level={2} mt={4} mb={3}>Social</Heading>
    <StyledAnchor href="https://github.com/ikas">
      <Heading level={4} mt={0} mb={2}>Github</Heading>
    </StyledAnchor>
    <StyledAnchor href="https://www.linkedin.com/in/henrique-pacheco/">
      <Heading level={4} mt={0} mb={2}>Linkedin</Heading>
    </StyledAnchor>
    <StyledAnchor href="https://www.instagram.com/henriquejcpacheco">
      <Heading level={4} mt={0} mb={2}>Instagram</Heading>
    </StyledAnchor>
  </Wrapper>
)
