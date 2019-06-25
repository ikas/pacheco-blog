import React from 'react'

import Layout from '../components/Layout'
import Frame from '../components/full-screen-frame'
import Header from '../components/ui-header'

export default () => (
  <Layout>
    <Frame>
      <Header currentUrl="/" />
      <p>home page content</p>
    </Frame>
  </Layout>
)
