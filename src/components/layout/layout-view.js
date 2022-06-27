import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { BreakpointProvider } from 'react-socks'

import GlobalStyle from '../global-style'
import Frame from '../full-screen-frame'
import Cursor from '../cursor'
import theme from '../../theme'

const routeWithoutBorder = (route) => route.includes('about') || route.includes('blog')

const LayoutView = ({ children, frameVisible, location }) => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <BreakpointProvider>
          <GlobalStyle />
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'I’m Henrique, a Software Engineer from Braga, Portugal, working on full-stack development, from Node.js services to Client-Side Web applications. I’m into web technologies, clean and scalable solutions and remote working.' },
              { name: 'keywords', content: 'software, engineer, braga, portugal, remote, frontend, ui, ux, programming, blog' },
            ]}
            >
            <html lang="en" />
            <meta name="google-site-verification" content="btqk2CUsVOmjOPgskaPb_R7MazjerdUKxqwaYNUTM0o" />
          </Helmet>
          {children}
          <Frame width={routeWithoutBorder(location.pathname) || !frameVisible ? 0 : undefined} />
          <Cursor />
        </BreakpointProvider>
      )}
    />
  </ThemeProvider>
)

export default LayoutView;