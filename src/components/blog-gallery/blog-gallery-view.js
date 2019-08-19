import React from 'react'
import styled from 'styled-components'

import Container from '../container'
import Heading from '../heading'
import PostCard from '../post-card'

const Wrapper = styled(Container)`
  align-items: center;
`

const GridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 128px;
`

export default ({ posts }) => (
  <Wrapper maxWidth={900}>
    <Heading level={2} mt={7}>Blog</Heading>
    <GridWrapper>
      { posts.map(p => <PostCard key={p.node.id} post={p.node.frontmatter} />)}
    </GridWrapper>
  </Wrapper>
)