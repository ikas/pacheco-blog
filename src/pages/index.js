import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Frame from '../components/full-screen-frame'
import Header from '../components/ui-header'
import Copy from '../components/copy'

const ScreenWrapper = styled(Frame)`
  display: flex;
  flex-direction: column;
`
  
const HomeFeature = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ScrollText = styled(Copy)`
  text-align: center;
`

export default () => (
  <Layout>
    <ScreenWrapper>
      <Header currentUrl="/" />
      <HomeFeature>
        <Copy>Henrique Pacheco</Copy>
        <Copy>Software Engineer from Portugal</Copy>
      </HomeFeature>
      <ScrollText>Scroll</ScrollText>
    </ScreenWrapper>
  </Layout>
)
