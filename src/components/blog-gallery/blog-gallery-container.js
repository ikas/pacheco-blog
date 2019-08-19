import React from 'react'
import PropTypes from 'prop-types'

import BlogGalleryView from './blog-gallery-view'

export default class BlogGalleryContainer extends React.Component {
  render() {
    return <BlogGalleryView {...this.props} />
  }
}

BlogGalleryContainer.propTypes = {
  posts: PropTypes.array.isRequired,
}
