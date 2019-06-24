import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'

import theme from '../../theme'
import GlobalStyle from '../global-style'
import Footer from './index.js'

storiesOf('UI - Footer', module)
  .add('Default footer', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    </>
  ))
