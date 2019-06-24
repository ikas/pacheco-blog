import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'

import theme from '../../theme'
import GlobalStyle from '../global-style'
import Header from './index.js'

storiesOf('UI - Header', module)
  .add('Header for home page', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header currentUrl="/" />
      </ThemeProvider>
    </>
  ))
  .add('Header for about page', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header currentUrl="/about" />
      </ThemeProvider>
    </>
  ))
