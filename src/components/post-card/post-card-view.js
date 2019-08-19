import React from 'react'
import styled from 'styled-components'

import Anchor from '../anchor'
import Copy from '../copy'
import Heading from '../heading'
import PostCategory from '../post-category'

const PostCard = styled(Anchor)`
  width: 48%;
  box-shadow: 0px 0px 10px 0px ${props => props.theme.colors.primaryShade3};
  border-radius: 5px;
  margin-bottom: 24px;
  text-decoration: none;
  transition: all 0.3s ${props => props.theme.transitionEasingFunction} 0.2s;

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`

const Image = styled.div`
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px 5px 0 0;
`

const PostInfoWrapper = styled.div`
  padding: 16px;
`

export default ({ post }) => (
  <PostCard to={post.path}>
    <Image style={{ backgroundImage: `url(${post.image})` }} />
    <PostInfoWrapper>
      <Heading my={0} level={5}>{post.title}</Heading>
      <PostCategory>{post.category}</PostCategory>
      <Copy mb={0} fontSize={1} color="primaryShade2">{post.date}</Copy>
    </PostInfoWrapper>
  </PostCard>
)