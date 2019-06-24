import React from 'react'
import PropTypes from 'prop-types'

import UIHeaderView from './ui-header-view'

export default class UIHeaderContainer extends React.Component {
  render() {
    return <UIHeaderView {...this.props} />
  }
}

UIHeaderContainer.propTypes = {
  currentUrl: PropTypes.string.isRequired,
}
