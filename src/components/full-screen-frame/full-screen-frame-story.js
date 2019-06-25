import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'

import theme from '../../theme'
import GlobalStyle from '../global-style'
import Frame from './index.js'
import Copy from '../copy'

storiesOf('UI - Frame', module)
  .add('Default full screen frame', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Frame>
          <Copy>I am the content.</Copy>
        </Frame>
      </ThemeProvider>
    </>
  ))
