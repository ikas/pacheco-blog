import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'

import theme from '../../theme'
import GlobalStyle from '../global-style'
import Anchor from './index.js'

storiesOf('Typography - Anchor', module)
  .add('Default anchor', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Anchor>Follow this link</Anchor>
      </ThemeProvider>
    </>
  ))
  .add('Anchor with different color', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Anchor color="tertiary">Follow this link</Anchor>
      </ThemeProvider>
    </>
  ))
