import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'

import theme from '../../theme'
import GlobalStyle from '../global-style'
import Caption from './index.js'

storiesOf('Typography - Caption', module)
  .add('Default caption', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Caption>Lorem ipsum dolor sit amet</Caption>
      </ThemeProvider>
    </>
  ))
  .add('Caption with different color', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Caption color="secondary">Lorem ipsum dolor sit amet</Caption>
      </ThemeProvider>
    </>
  ))
