import React from 'react'

import Heading from '../../heading'

export default props => (
  <Heading 
    level={4}
    my={0}
    color={props.active ? 'primary' : 'primaryShade2'} 
    {...props}
  />
)