import React from 'react'
import PropTypes from 'prop-types'
import { setDefaultBreakpoints } from 'react-socks'
import { Location } from '@reach/router'
import 'modern-normalize/modern-normalize.css'

import LayoutView from './layout-view'

setDefaultBreakpoints([
  { xs: 0 },
  { s: 544 },
  { m: 768 },
  { l: 1024 },
  { xl: 1440 },
])

class LayoutContainer extends React.Component {
  render() {
    return <LayoutView {...this.props} />
  }
}

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default props => (
  <Location>
    {({ location }) => <LayoutContainer location={location} {...props} />}
  </Location>
)