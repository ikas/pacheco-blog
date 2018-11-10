import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import hexToRgba from 'hex-rgba'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as Colors from '../../style/colors'
import MainImage from '../MainImage'

const Container = styled.div`
  position: fixed;
  margin: 1rem;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  box-shadow: 0 0 15px 0 ${hexToRgba(Colors.PRIMARY_COLOR, 20)};
  background-color: ${hexToRgba(Colors.SECONDARY_COLOR, 50)};

  &:hover {
    box-shadow: 0 0 15px 0 ${hexToRgba(Colors.PRIMARY_COLOR, 60)};
  }
`

const HeaderSiteTitle = ({ siteTitle }) => {
  return <Link to="/"
    style={{
      color: Colors.PRIMARY_COLOR,
      textDecoration: 'none',
      textAlign: 'center',
    }}
  >
    <h1 style={{ margin: '1rem 0' }}>{siteTitle}</h1>
  </Link>
}

const MenuLink = ({ to, title }) => {
  return <Link to={to} style={{ color: Colors.PRIMARY_COLOR, textDecoration: 'none', margin: '0.5rem 0' }}>{title}</Link>
}

const SocialIcon = ({ icon }) => {
  return <div style={{ margin: '0 0.25rem' }}>
    <FontAwesomeIcon icon={['fab', icon]} color={Colors.PRIMARY_COLOR} />
  </div>
}

const SocialIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`

const SocialLinks = () => {
  return <SocialIconsWrapper>
    <a href="https://www.linkedin.com/in/henrique-pacheco/">
      <SocialIcon icon={'linkedin-in'} />
    </a>
    <a href="https://www.instagram.com/henriquejcpacheco/">
      <SocialIcon icon={'instagram'} />
    </a>
    <a href="https://www.facebook.com/henrique.pacheco.948">
      <SocialIcon icon={'facebook-f'} />
    </a>
    <a href="https://github.com/ikas">
      <SocialIcon icon={'github'} />
    </a>
  </SocialIconsWrapper>
}

const FixedSidebar = ({ siteTitle }) => (
  <Container>
    <MainImage />
    <HeaderSiteTitle siteTitle={siteTitle} />
    <MenuLink to="/#blog" title="Blog" />
    <MenuLink to="/#timeline" title="Timeline" />
    <MenuLink to="/#about" title="About" />
    <MenuLink to="/#getintouch" title="Get in touch" />

    <SocialLinks />
  </Container>
)

export default FixedSidebar
