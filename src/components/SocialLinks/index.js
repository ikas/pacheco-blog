import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as Colors from '../../style/colors'

const SocialIcon = ({ icon }) => {
  return <div style={{ margin: '0 0.5rem' }}>
    <FontAwesomeIcon icon={['fab', icon]} color={Colors.PRIMARY_COLOR} />
  </div>
}

const SocialIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 3rem;
`

const SocialLinks = () => {
  return (
    <SocialIconsWrapper>
      <a href="https://www.linkedin.com/in/henrique-pacheco/" aria-label="LinkedIn de Henrique Pacheco">
        <SocialIcon icon={'linkedin-in'} />
      </a>
      <a href="https://www.instagram.com/henriquejcpacheco/" aria-label="Instagram de Henrique Pacheco">
        <SocialIcon icon={'instagram'} />
      </a>
      <a href="https://www.facebook.com/henrique.pacheco.948" aria-label="Facebook de Henrique Pacheco">
        <SocialIcon icon={'facebook-f'} />
      </a>
      <a href="https://github.com/ikas" aria-label="GitHub de Henrique Pacheco">
        <SocialIcon icon={'github'} />
      </a>
    </SocialIconsWrapper>)
}

export default SocialLinks
