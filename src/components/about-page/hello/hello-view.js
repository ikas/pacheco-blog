import React from 'react'

import Heading from '../../heading'
import Copy from '../../copy'
import Anchor from '../../anchor'

export default () => (
  <>
    <Heading level={2} mt={[6, 7]} mb={5}>Hello</Heading>
    <Copy>I’m Henrique, a Software Engineer from Braga, Portugal, working on full-stack development, from Node.js services to Client-Side Web applications. </Copy>
    <Copy>I’m into web technologies, clean and scalable solutions and remote working.</Copy>
    <Copy mb={4}>Want to know more?</Copy>
    <Anchor href="mailto:henriquejcpacheco@gmail.com">Get in touch</Anchor>
  </>
)
