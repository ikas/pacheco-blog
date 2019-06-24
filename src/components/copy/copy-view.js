import React from 'react'
import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

const Copy = styled.p`
  ${space}
  ${layout}
  ${color}
  font-family: 'Work Sans', sans-serif;
  line-height: 1.25rem;
  font-size: 1.25rem;
  font-weight: normal;
`

export default (props) => <Copy {...props} />
