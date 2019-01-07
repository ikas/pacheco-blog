import React from 'react'
import styled from 'styled-components'
import * as Colors from '../../style/colors'

const FixedWrapper = styled.div`
  border-top: 1px solid ${Colors.PRIMARY_COLOR};
  padding: 0.5rem;
  display: flex;
  justify-content: center;
`

const FooterText = styled.span`
  color: ${Colors.PRIMARY_COLOR};
`

const Footer = ({ siteTitle }) => (
  <FixedWrapper>
    <FooterText>{siteTitle}, 2019</FooterText>
  </FixedWrapper>
)

export default Footer
