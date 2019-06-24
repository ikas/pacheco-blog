import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/ui-header'
import Footer from '../components/ui-footer'

export default () => (
  <Layout>
    <Header currentUrl="/about" />
    <p>home page content</p>
    <Footer />
  </Layout>
)
