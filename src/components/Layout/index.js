import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import 'modern-normalize/modern-normalize.css'

import GlobalStyle from '../global-style'
import theme from '../../theme'

export default class Layout extends React.Component {
  render() {
    const { children } = this.props
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
            <>
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
            </>
          )}
        />
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
