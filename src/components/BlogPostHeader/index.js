import React from 'react'
import styled from 'styled-components'

import * as Colors from '../../style/colors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem 1rem;
  background-color: ${Colors.PRIMARY_COLOR};
`

const PostTitle = styled.div`
  font-size: 4rem;
  line-height: 4rem;
  text-transform: uppercase;
  color: ${Colors.SECONDARY_COLOR};
  margin-bottom: 4rem;
  text-align: center;
`

const PostDescription = styled.p`
  text-align: center;
  color: ${Colors.SECONDARY_COLOR};
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 0;
`

const BlogPostHeader = ({ title, description }) => (
  <Wrapper>
    <PostTitle>{title}</PostTitle>
    <PostDescription>{description}</PostDescription>
  </Wrapper>
)

export default BlogPostHeader
