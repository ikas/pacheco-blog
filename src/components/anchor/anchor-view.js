import React from 'react'
import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

const Anchor = styled.a`
  ${space}
  ${layout}
  ${color}
  font-family: 'Work Sans', sans-serif;
  line-height: 1.25rem;
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: underline;

  &:hover, &:active, &:focus, &:visited {
    cursor: pointer;
    opacity: 0.6;
  }
`

export default (props) => <Anchor {...props} />
