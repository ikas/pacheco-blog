import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks'
import { Location } from '@reach/router'

import 'modern-normalize/modern-normalize.css'
import GlobalStyle from '../global-style'
import Frame from '../full-screen-frame'
import Cursor from '../cursor'
import theme from '../../theme'

setDefaultBreakpoints([
  { xs: 0 },
  { s: 544 },
  { m: 768 },
  { l: 1024 },
  { xl: 1440 },
])

const routeWithoutBorder = (route) => route.includes('about')

class Layout extends React.Component {
  render() {
    const { children, location } = this.props
    return (
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
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
                ]}
              >
                <html lang="en" />
              </Helmet>
              {children}
              <Frame width={routeWithoutBorder(location.pathname) ? 0 : undefined} />
              <Cursor />
            </BreakpointProvider>
          )}
        />
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default props => (
  <Location>
    {({ location }) => <Layout location={location} {...props} />}
  </Location>
)