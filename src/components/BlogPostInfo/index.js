import React from 'react'
import styled from 'styled-components'

import * as Colors from '../../style/colors'

const PostInfoWrapper = styled.div`
  padding-top: 3rem;
  padding-bottom: 5rem;
`

const PostAuthor = styled.div`
  font-size: 1.5rem;
  line-height: 1.5rem;
  color: ${Colors.PRIMARY_COLOR};
  margin-bottom: 1rem;
`

const PostDescription = styled.p`
  color: ${Colors.PRIMARY_COLOR};
  font-size: 1.3rem;
  margin-bottom: 0;
`

const BlogPostHeader = ({ author, date }) => (
  <PostInfoWrapper>
    <PostAuthor>Author: {author}</PostAuthor>
    <PostDescription>{date}</PostDescription>
  </PostInfoWrapper>
)

export default BlogPostHeader
