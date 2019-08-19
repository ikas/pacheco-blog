import React from 'react'

import Container from '../container'
import Copy from '../copy'
import Heading from '../heading'

export default ({ title, description }) => (
  <Container maxWidth={686}>
    <Heading level={2}>{title}</Heading>
    <Copy>{description}</Copy>
  </Container>
)
