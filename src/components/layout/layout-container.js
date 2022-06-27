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
  constructor(props) {
    super(props)

    this.state = {
      frameVisible: true,
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.onscroll = () => window.pageYOffset === 0
        ? this.setState({ frameVisible: true })
        : this.setState({ frameVisible: false })
    }
  }

  render() {
    return <LayoutView {...this.props} frameVisible={this.state.frameVisible} />
  }
}

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

const LayoutContainerComponent = props => (
  <Location>
    {({ location }) => <LayoutContainer location={location} {...props} />}
  </Location>
)

export default LayoutContainerComponent;