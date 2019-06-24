import React from 'react'
import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

const Caption = styled.p`
  ${space}
  ${layout}
  ${color}
  font-family: 'Work Sans', sans-serif;
  line-height: 1rem;
  font-size: 1rem;
  font-weight: normal;
`

export default (props) => <Caption {...props} />
