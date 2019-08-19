import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'

import theme from '../../theme'
import GlobalStyle from '../global-style'
import Container from './index.js'
import Copy from '../copy'

storiesOf('UI - Container', module)
  .add('Default container', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <Copy>example content</Copy>
        </Container>
      </ThemeProvider>
    </>
  ))
  .add('Container with different background color', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container bg="primary">
          <Copy color="white">example content</Copy>
        </Container>
      </ThemeProvider>
    </>
  ))
  .add('Container with smaller max width', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container bg="primary" maxWidth={768}>
          <Copy color="white">example content</Copy>
        </Container>
      </ThemeProvider>
    </>
  ))
