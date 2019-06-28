import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/ui-header'
import Container from '../components/container'
import Heading from '../components/heading'
import Copy from '../components/copy'
import Anchor from '../components/anchor'
import Experience from '../components/experience'
import Footer from '../components/ui-footer'

export default () => (
  <Layout>
    <Header currentUrl="/about" />
    <Container maxWidth={686}>
      <Heading level={2} mt={7} mb={5}>Hello</Heading>
      <Copy>I’m Henrique, a Software Engineer from Braga, Portugal, working on full-stack development, from Node.js services to Client-Side Web applications. </Copy>
      <Copy>I’m into web technologies, clean and scalable solutions and remote working.</Copy>
      <Copy mb={4}>Want to know more?</Copy>
      <Anchor>Get in touch</Anchor>
      <Experience />
      <Heading level={2} mt={6} mb={5}>Social</Heading>
      <Copy>Want to know more?</Copy>
      <Heading level={2} mt={6} mb={5}>Other interests</Heading>
      <Copy mb={7}>This section is optional</Copy>
    </Container>
    <Footer />
  </Layout>
)
