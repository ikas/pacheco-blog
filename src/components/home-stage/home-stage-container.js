import { detect } from 'detect-browser'
import NoSsr from '@material-ui/core/NoSsr'
import React from 'react'

import HomeStageView from './home-stage-view'

export default class HomeStageContainer extends React.Component {
  render() {
    const browser = detect()
    return (
      <NoSsr>
        <HomeStageView {...this.props} browserName={browser.name} />
      </NoSsr>
    )
  }
}
