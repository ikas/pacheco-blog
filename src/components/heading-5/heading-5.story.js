import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'

import theme from '../../theme'
import GlobalStyle from '../global-style'
import Heading5 from './heading-5-view'

storiesOf('Heading Level 5 & 6', module)
  .add('default', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading5>Example Heading</Heading5>
      </ThemeProvider>
    </>
  ))
  .add('changing text color', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading5 color="primary">Example Heading</Heading5>
      </ThemeProvider>
    </>
  ))
  .add('changing the bg', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading5 bg="tertiary">Example Heading</Heading5>
      </ThemeProvider>
    </>
  ))
