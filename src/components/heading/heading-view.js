import React from 'react'
import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

const Heading1 = styled.h1`
  ${space}
  ${layout}
  ${color}
  font-family: 'Work Sans', sans-serif;
  line-height: 3.815rem;
  font-size: 3.815rem;
  font-weight: bold;
  text-transform: uppercase;
`

const Heading2 = styled.h2`
  ${space}
  ${layout}
  ${color}
  font-family: 'Work Sans', sans-serif;
  line-height: 3.052rem;
  font-size: 3.052rem;
  font-weight: bold;
  text-transform: uppercase;
`

const Heading3 = styled.h3`
  ${space}
  ${layout}
  ${color}
  font-family: 'Work Sans', sans-serif;
  line-height: 2.441rem;
  font-size: 2.441rem;
  font-weight: normal;
`

const Heading4 = styled.h4`
  ${space}
  ${layout}
  ${color}
  font-family: 'Work Sans', sans-serif;
  line-height: 1.625rem;
  font-size: 1.625rem;
  font-weight: lighter;
  text-transform: uppercase;
`

const Heading5 = styled.h5`
  ${space}
  ${layout}
  ${color}
  font-family: 'Work Sans', sans-serif;
  line-height: 1.5rem;
  font-size: 1.5rem;
  font-weight: normal;
  text-transform: uppercase;
`

export default ({ level, ...props }) => {
  switch (level) {
    case 1:
      return <Heading1 {...props} />
    case 2:
      return <Heading2 {...props} />
    case 3:
      return <Heading3 {...props} />
    case 4:
      return <Heading4 {...props} />
    default:
      return <Heading5 {...props} />
  }
}
