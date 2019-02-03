import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { Location } from '@reach/router'

import FixedNavbar from '../FixedNavbar'
import * as Colors from '../../style/colors'
import Footer from '../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css'

// Font awesome icons
library.add(fab)
library.add(fas)
library.add(far)

class Layout extends React.Component {
  render() {
    const { children, location } = this.props
    return (
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

            <FixedNavbar
              isIndex={location.pathname === '/'}
              siteTitle={data.site.siteMetadata.title}
            />

            <div style={{ margin: '0 auto', backgroundColor: Colors.WHITE }}>
              {children}
            </div>
            <Footer siteTitle={data.site.siteMetadata.title} />
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default props => (
  <Location>{locationProps => <Layout {...locationProps} {...props} />}</Location>
);
