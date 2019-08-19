import React from 'react'
import styled from 'styled-components'

import Copy from '../copy'

const PostInfoWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
`

const BlogPostHeader = ({ author, date }) => (
  <PostInfoWrapper>
    <Copy fontSize={2} my={0}>By {author} ({date})</Copy>
  </PostInfoWrapper>
)

export default BlogPostHeader
