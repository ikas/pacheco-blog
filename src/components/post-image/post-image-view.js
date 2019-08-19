import React from 'react'
import styled from 'styled-components'

import Copy from '../copy'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`

const PostImage = styled.img`
  width: 100%;
`

export default props => (
  <Wrapper>
    <PostImage {...props} />
    <Copy fontSize={1} color="primaryShade2">{props.alt}</Copy>
  </Wrapper>
)
