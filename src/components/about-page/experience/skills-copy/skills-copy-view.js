import React from 'react'
import styled from 'styled-components'

import Copy from '../../../copy'

const SkillsCopy = styled(Copy)`
  font-size: 16px;
  line-height: 33px;

  @media (max-width: 544px) {
    line-height: 22px;
  }
`

const SkillsCopyView = props => <SkillsCopy color="secondary" mb={0} mt={1} {...props} />

export default SkillsCopyView;