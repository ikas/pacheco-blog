import React from 'react'

import Layout from '../components/layout'
import About from '../components/About'
import Timeline from '../components/Timeline'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>

    <Timeline />
    <About />
  </Layout>
)

export default IndexPage
