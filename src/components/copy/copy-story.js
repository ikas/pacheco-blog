import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'

import theme from '../../theme'
import GlobalStyle from '../global-style'
import Copy from './index.js'

storiesOf('Typography - Copy', module)
  .add('Default copy', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Copy>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et elementum metus. Etiam sed congue quam, sit amet dapibus diam. Sed nisl velit, vehicula porta sem in, rhoncus cursus neque. Nunc vel sagittis leo. Nunc congue ligula in felis vestibulum bibendum. Donec sit amet interdum magna. Nam ut enim non justo malesuada tempus. Fusce et porttitor diam, non vestibulum arcu. Fusce in nunc enim. Integer dignissim nibh quis libero viverra dapibus.
        </Copy>
      </ThemeProvider>
    </>
  ))
  .add('Copy with different color', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Copy color="secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et elementum metus. Etiam sed congue quam, sit amet dapibus diam. Sed nisl velit, vehicula porta sem in, rhoncus cursus neque. Nunc vel sagittis leo. Nunc congue ligula in felis vestibulum bibendum. Donec sit amet interdum magna. Nam ut enim non justo malesuada tempus. Fusce et porttitor diam, non vestibulum arcu. Fusce in nunc enim. Integer dignissim nibh quis libero viverra dapibus.
        </Copy>
      </ThemeProvider>
    </>
  ))
