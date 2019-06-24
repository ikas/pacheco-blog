import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'

import theme from '../../theme'
import GlobalStyle from '../global-style'
import Heading3 from './heading-3-view'

storiesOf('Heading Level 3', module)
  .add('default', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading3>Example Heading</Heading3>
      </ThemeProvider>
    </>
  ))
  .add('changing text color', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading3 color="primary">Example Heading</Heading3>
      </ThemeProvider>
    </>
  ))
  .add('changing the bg', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading3 bg="tertiary">Example Heading</Heading3>
      </ThemeProvider>
    </>
  ))
