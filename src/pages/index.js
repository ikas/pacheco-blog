import React from 'react'

import About from '../components/About'
import Blog from '../components/Blog'
import Layout from '../components/layout'
import Timeline from '../components/Timeline'

const IndexPage = () => (
  <Layout>
    <Blog />
    <Timeline />
    <About />
  </Layout>
)

export default IndexPage
