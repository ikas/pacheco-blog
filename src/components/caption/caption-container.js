import React from 'react'
import PropTypes from 'prop-types'

import CaptionView from './caption-view'

export default class CaptionContainer extends React.Component {
  render() {
    return <CaptionView {...this.props} />
  }
}

CaptionContainer.propTypes = {
  color: PropTypes.string,
}

CaptionContainer.defaultProps = {
  color: 'primary',
}
