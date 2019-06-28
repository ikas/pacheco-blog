import React from 'react'
import styled from 'styled-components'

import Copy from '../../copy'

const DatesCopy = styled(Copy)`
  font-size: 16px;
  line-height: 33px;
`

export default props => (
  <DatesCopy 
    mb={0} 
    color={props.active ? 'primary' : 'primaryShade2'}
    {...props}
  />
)