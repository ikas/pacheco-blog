import React from 'react'

import SocialView from './social-view'

export default class SocialContainer extends React.Component {
  render() {
    return <SocialView {...this.props} />
  }
}