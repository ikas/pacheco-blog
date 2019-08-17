import { detect } from 'detect-browser'
import React from 'react'
import styled from 'styled-components'

import Heading from '../heading'
import Copy from '../copy'

const StyledHeading = styled(Heading)`
  font-family: 'Mukta';
  font-weight: normal;
  font-size: 155px;
  line-height: 152px;
  text-transform: uppercase;
  text-align: center;
  display: inline-flex;
  align-items: center;
  margin: 0;

  ${props => props.browser !== 'safari' ? `
  background: linear-gradient(
    to right,
    ${props.theme.colors.primary} 0%,
    ${props.theme.colors.secondary},
    ${props.theme.colors.tertiary} 100%);
  -webkit-background-clip: text;
  -webkit-text-stroke: 6px transparent;
  -webkit-text-fill-color: white;
  ` : `color: ${props.theme.colors.primary};`}

  @media(max-width: 1024px) {
    font-size: 100px;
    line-height: 98px;
    -webkit-text-stroke: 4px transparent;
  }

  @media(max-width: 544px) {
    font-size: 56px;
    line-height: 55px;
    -webkit-text-stroke: 2px transparent;
  }
`

const StyledCopy = styled(Copy)`
  line-height: 33px;
  text-align: center;

  @media(max-width: 768px) {
    line-height: 29px;
  }

  @media(max-width: 544px) {
    line-height: 22px;
  }
`

export default () => {
  const browser = detect()
  return (
    <>
      <StyledHeading fontSize={[ 56, 100, 155 ]} browser={browser.name}>
        Henrique<br/>Pacheco
      </StyledHeading>
      <StyledCopy fontSize={[ 20, 26, 30 ]} mt={2} width={[0.8, 0.5]} color="primaryShade1">
        Software Engineer from Portugal
      </StyledCopy>
    </>
  )
}