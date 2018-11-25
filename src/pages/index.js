import React from 'react'

import About from '../components/About'
import GetInTouch from '../components/GetInTouch'
import Layout from '../components/layout'
import Timeline from '../components/Timeline'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>

    <Timeline />
    <About />
    <GetInTouch />
  </Layout>
)

export default IndexPage
