import React from 'react'
import styled from 'styled-components'
import { space, layout, color, fontSize } from 'styled-system'

const Copy = styled.p`
  margin-top: 0;
  margin-bottom: ${props => props.theme.space[3]}px;
  font-size: 1.25rem;
  ${space}
  ${layout}
  ${color}
  ${fontSize}
  font-family: 'Work Sans', sans-serif;
  line-height: 2.06rem;
  font-weight: normal;
`

export default (props) => <Copy {...props} />
