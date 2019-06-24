import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'

import theme from '../../theme'
import GlobalStyle from '../global-style'
import Heading4 from './heading-4-view'

storiesOf('Heading Level 4', module)
  .add('default', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading4>Example Heading</Heading4>
      </ThemeProvider>
    </>
  ))
  .add('changing text color', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading4 color="primary">Example Heading</Heading4>
      </ThemeProvider>
    </>
  ))
  .add('changing the bg', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading4 bg="tertiary">Example Heading</Heading4>
      </ThemeProvider>
    </>
  ))
