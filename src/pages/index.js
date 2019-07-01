import React from 'react'
import styled from 'styled-components'

import Frame from '../components/full-screen-frame'
import HomeStage from '../components/home-stage'
import Header from '../components/ui-header'
import Scroll from '../components/scroll'

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

export default () => (
  <ScreenWrapper>
    <Header currentUrl="/" />
    <HomeFeature>
      <HomeStage />
    </HomeFeature>
    <Scroll />
  </ScreenWrapper>
)
