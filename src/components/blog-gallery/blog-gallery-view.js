import React from 'react'
import styled from 'styled-components'

import Anchor from '../anchor'
import Copy from '../copy'
import Container from '../container'
import Heading from '../heading'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.white};
`

const GridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 64px;
`

const PostCard = styled(Anchor)`
  width: 48%;
  padding: 16px;
  border: 5px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  margin-bottom: 16px;
  text-decoration: none;
`

export default ({ posts }) => (
  <Wrapper>
    <Container maxWidth={686}>
      <Heading level={2} mt={7}>Blog</Heading>
      <GridWrapper>
        { posts.map(p => (
          <PostCard key={p.node.id} to={p.node.frontmatter.path}>
            <Copy mb={0}>{p.node.frontmatter.title}</Copy>
          </PostCard>
        ))}
      </GridWrapper>
    </Container>
  </Wrapper>
)