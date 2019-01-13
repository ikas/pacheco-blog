import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import * as Colors from '../../style/colors'

const HeaderText = styled.h1`
  margin: 0.75rem;
  font-size: 1.5rem;
`;

const HeaderSiteTitle = ({ siteTitle }) => {
  return <Link to="/"
    style={{
      color: Colors.SECONDARY_COLOR,
      textDecoration: 'none',
      textAlign: 'center',
    }}
  >
    <HeaderText>{siteTitle}</HeaderText>
  </Link>
}

const MenuLink = ({ to, title }) => {
  return <Link to={to} style={{
    color: Colors.SECONDARY_COLOR,
    textDecoration: 'none',
    margin: '1rem',
    marginLeft: '2rem',
  }}>{title}</Link>
}

const FixedWrapper = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.PRIMARY_COLOR};
  z-index: 100;
`

const FixedNavbar = ({ siteTitle }) => (
  <FixedWrapper>
    <HeaderSiteTitle siteTitle={siteTitle} />
    <MenuLink to="/#blog" title="Blog" />
    <MenuLink to="/#timeline" title="Timeline" />
    <MenuLink to="/#about" title="About" />
  </FixedWrapper>
)

export default FixedNavbar
