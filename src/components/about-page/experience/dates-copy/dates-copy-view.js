import React from 'react'
import styled from 'styled-components'

import Copy from '../../../copy'

const DatesCopy = styled(Copy)`
  font-size: 16px;
  line-height: 33px;
`

const DatesCopyView = props => (
  <DatesCopy mb={0} color={props.hovered ? 'primary' : 'primaryShade2'} {...props} />
);

export default DatesCopyView;