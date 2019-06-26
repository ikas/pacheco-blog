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

  background: linear-gradient(
    to right, 
    ${props => props.theme.colors.primary} 0%, 
    ${props => props.theme.colors.secondary}, 
    ${props => props.theme.colors.tertiary} 100%);
  -webkit-background-clip: text;
  -webkit-text-stroke: 6px transparent;
  -webkit-text-fill-color: white;

  @media(max-width: 768px) {
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
  font-size: 30px;
  line-height: 33px;
  text-align: center;

  @media(max-width: 768px) {
    max-width: 50%;
    font-size: 26px;
    line-height: 29px;
  }
  
  @media(max-width: 544px) {
    font-size: 20px;
    line-height: 22px;
    max-width: 50%;
  }
`

export default () => (
  <>
    <StyledHeading>Henrique<br/>Pacheco</StyledHeading>
    <StyledCopy color="primaryShade1">Software Engineer from Portugal</StyledCopy>
  </>
)