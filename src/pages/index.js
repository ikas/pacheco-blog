import React from 'react'

import About from '../components/About'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Timeline from '../components/Timeline'

const IndexPage = () => (
  <Layout>
    <Header />
    <Timeline />
    <About />
  </Layout>
)

export default IndexPage
