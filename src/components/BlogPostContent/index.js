import React from 'react'
import styled from 'styled-components'

import * as Colors from '../../style/colors'

const PostContentWrapper = styled.div`
  padding-bottom: 4rem;
  color: ${Colors.PRIMARY_COLOR};
`

const BlogPostContent = ({ html }) => (
  <PostContentWrapper className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
)

export default BlogPostContent
