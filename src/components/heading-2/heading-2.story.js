import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'

import theme from '../../theme'
import GlobalStyle from '../global-style'
import Heading2 from './heading-2-view'

storiesOf('Heading Level 2', module)
  .add('default', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading2>Example Heading</Heading2>
      </ThemeProvider>
    </>
  ))
  .add('changing text color', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading2 color="primary">Example Heading</Heading2>
      </ThemeProvider>
    </>
  ))
  .add('changing the bg', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading2 bg="tertiary">Example Heading</Heading2>
      </ThemeProvider>
    </>
  ))
