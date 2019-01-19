import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import Breakpoint from 'react-socks'
import { StaticQuery, graphql } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// import FixedNavbar from './FixedNavbar'
import Footer from './Footer'
import './layout.css'

// Font awesome icons
library.add(fab)
library.add(fas)
library.add(far)

const Layout = ({ children }) => (
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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        {/* <Breakpoint xsmall up> TODO: not working :( */}
          {/* <FixedNavbar siteTitle={data.site.siteMetadata.title} /> */}
        {/* </Breakpoint> */}

        <div style={{ margin: '0 auto' }}>
          {children}
        </div>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
