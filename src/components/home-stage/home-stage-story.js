import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'

import theme from '../../theme'
import GlobalStyle from '../global-style'
import HomeStage from './home-stage-view.js'

storiesOf('Typography - Home Main Heading', module)
  .add('Default', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <HomeStage />
      </ThemeProvider>
    </>
  ))
