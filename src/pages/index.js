import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import About from '../components/About'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>

    <About />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
