import React from 'react'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'

import theme from '../../theme'
import GlobalStyle from '../global-style'
import Heading from './index.js'

storiesOf('Typography - Heading', module)
  .add('All headings', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Heading>Heading Level 1</Heading>
          <Heading level={2}>Heading Level 2</Heading>
          <Heading level={3}>Heading Level 3</Heading>
          <Heading level={4}>Heading Level 4</Heading>
          <Heading level={5}>Heading Level 5 & 6</Heading>
        </>
      </ThemeProvider>
    </>
  ))
  .add('Heading level 1', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading>Example Heading</Heading>
      </ThemeProvider>
    </>
  ))
  .add('Heading level 1 with different color', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading color="tertiary">Example Heading</Heading>
      </ThemeProvider>
    </>
  ))
  .add('Heading level 2', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading level={2}>Example Heading</Heading>
      </ThemeProvider>
    </>
  ))
  .add('Heading level 2 with different color', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading level={2} color="tertiary">Example Heading</Heading>
      </ThemeProvider>
    </>
  ))
  .add('Heading level 3', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading level={3}>Example Heading</Heading>
      </ThemeProvider>
    </>
  ))
  .add('Heading level 3 with different color', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading level={3} color="tertiary">Example Heading</Heading>
      </ThemeProvider>
    </>
  ))
  .add('Heading level 4', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading level={4}>Example Heading</Heading>
      </ThemeProvider>
    </>
  ))
  .add('Heading level 4 with different color', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading level={4} color="tertiary">Example Heading</Heading>
      </ThemeProvider>
    </>
  ))
  .add('Heading level 5 & 6', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading level={5}>Example Heading</Heading>
      </ThemeProvider>
    </>
  ))
  .add('Heading level 5 with different color', () => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Heading level={5} color="tertiary">Example Heading</Heading>
      </ThemeProvider>
    </>
  ))
