import React from 'react'

import Header from '../components/ui-header'
import Container from '../components/container'
import Hello from '../components/about-page/hello'
import Experience from '../components/about-page/experience'
import Social from '../components/about-page/social'
import Footer from '../components/ui-footer'

const AboutPage = () => (
  <>
    <Header currentUrl="/about" />
    <Container maxWidth={768} px={[3, 4]}>
      <Hello />
      <Experience />
      <Social />
    </Container>
    <Footer />
  </>
)

export default AboutPage;