import React from 'react'
import styled from 'styled-components'

import SocialLinks from '../SocialLinks'
import * as Colors from '../../style/colors'

const FixedWrapper = styled.div`
  background: ${Colors.SECONDARY_COLOR};
  border-top: 2px solid ${Colors.PRIMARY_COLOR};
  padding: 0.5rem;
  display: flex;
  justify-content: center;
`

const FooterText = styled.span`
  color: ${Colors.PRIMARY_COLOR};
  font-weight: bold;
`

const Footer = ({ siteTitle }) => (
  <FixedWrapper>
    <FooterText>{siteTitle}, 2019</FooterText>
    <SocialLinks />
  </FixedWrapper>
)

export default Footer
