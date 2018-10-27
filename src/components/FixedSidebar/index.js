import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import hexToRgba from 'hex-rgba'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  box-shadow: 0 0 15px 0 ${hexToRgba('#536727', 20)};
  background-color: ${hexToRgba('#E6D5CF', 50)};

  &:hover {
    box-shadow: 0 0 15px 0 ${hexToRgba('#536727', 60)};
  }
`

const HeaderSiteTitle = ({ siteTitle }) => {
  return <Link to="/"
    style={{
      color: '#536727',
      textDecoration: 'none',
      textAlign: 'center',
    }}
  >
    <h1 style={{ margin: '1rem 0' }}>{siteTitle}</h1>
  </Link>
}

const MenuLink = ({ to, title }) => {
  return <Link to={to} style={{ color: '#536727', textDecoration: 'none', margin: '0.5rem 0' }}>{title}</Link>
}

const SocialIcon = ({ icon }) => {
  return <div style={{ margin: '0 0.25rem' }}>
    <FontAwesomeIcon icon={['fab', icon]} color="#536727" />
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
    <SocialIcon icon={'linkedin-in'} />
    <SocialIcon icon={'instagram'} />
    <SocialIcon icon={'facebook-f'} />
    <SocialIcon icon={'github'} />
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
