import React from 'react'
import styled from 'styled-components'

const PostContentWrapper = styled.div`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 128px;

  p, li {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }

  li {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: underline;
  }

  code {
    color: ${props => props.theme.colors.secondary};
    font-weight: bold;
  }
`

const BlogPostContent = ({ html }) => (
  <PostContentWrapper dangerouslySetInnerHTML={{ __html: html }} />
)

export default BlogPostContent
