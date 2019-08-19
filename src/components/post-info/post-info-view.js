import React from 'react'
import styled from 'styled-components'

import Copy from '../copy'
import Heading from '../heading'

const PostInfoWrapper = styled.div`
  margin-bottom: 3rem;
`

const BlogPostHeader = ({ title, description, author, date }) => (
  <PostInfoWrapper>
    <Heading level={2} mb={4}>{title}</Heading>
    <Heading level={5} mt={0} mb={3} color="secondary">{description}</Heading>
    <Copy fontSize={2} my={0}>{author} - {date}</Copy>
  </PostInfoWrapper>
)

export default BlogPostHeader
