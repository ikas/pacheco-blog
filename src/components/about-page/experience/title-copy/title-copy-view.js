import React from 'react'

import Heading from '../../../heading'

const TitleCopyView = props => (
  <Heading
    level={4}
    my={0}
    color={props.hovered || props.active ? 'primary' : 'primaryShade2'}
    style={{ textDecoration: props.hovered || props.active ? 'underline' : 'initial' }}
    {...props}
  />
)

export default TitleCopyView;