import React from 'react'
import styled from 'styled-components'
import { Scrollbars } from 'react-custom-scrollbars'

import HomeStage from '../components/home-stage'
import Header from '../components/ui-header'
import Scroll from '../components/scroll'

const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
  
const HomeFeature = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default () => (
  <Scrollbars style={{ width: '100%', height: '100vh' }}>
    <ScreenWrapper>
      <Header currentUrl="/" />
      <HomeFeature>
        <HomeStage />
      </HomeFeature>
      <Scroll />
    </ScreenWrapper>
  </Scrollbars>
)
