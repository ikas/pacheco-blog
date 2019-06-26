import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'

import theme from '../../theme'
import GlobalStyle from '../global-style'
import Scroll from './scroll-view.js'

storiesOf('Home - Scroll', module)
  .add('Default', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Scroll />
      </ThemeProvider>
    </>
  ))
