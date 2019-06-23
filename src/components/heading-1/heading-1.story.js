import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'

import theme from '../../theme'
import GlobalStyle from '../global-style'
import Heading1 from './heading-1-view'

storiesOf('Heading Level 1', module)
  .add('default', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading1>Example Heading</Heading1>
      </ThemeProvider>
    </>
  ))
  .add('changing text color', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading1 color="primary">Example Heading</Heading1>
      </ThemeProvider>
    </>
  ))
  .add('changing the bg', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading1 bg="tertiary">Example Heading</Heading1>
      </ThemeProvider>
    </>
  ))
