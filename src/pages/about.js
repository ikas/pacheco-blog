import React from 'react'

import Header from '../components/ui-header'
import Container from '../components/container'
import Hello from '../components/about-page/hello'
import Experience from '../components/about-page/experience'
import Social from '../components/about-page/social'
import Footer from '../components/ui-footer'

export default () => (
  <>
    <Header currentUrl="/about" />
    <Container maxWidth={686} px={[3, 4]}>
      <Hello />
      <Experience />
      <Social />
    </Container>
    <Footer />
  </>
)
