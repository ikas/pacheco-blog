import React from 'react'
import styled from 'styled-components'
import hexToRgba from 'hex-rgba'

import * as Colors from '../../style/colors'

const PostPreviewWrapper = styled.div`
  padding: 2rem;
  background-color: white;
  box-shadow: 0px 0px 15px 1px ${hexToRgba(Colors.PRIMARY_COLOR, 50)};
  margin: 2rem 0;
`

const PostTitleLink = styled.a`
  font-size: 2rem;
  color: ${Colors.PRIMARY_COLOR};
  transition: .3s ease all;

  &:hover, &:active {
    color: ${Colors.SECONDARY_COLOR};
    text-decoration: none;
  }
`

const PostExcerpt = styled.p`
  color: ${Colors.PRIMARY_COLOR};
  line-height: 2rem;
  margin-bottom: 2rem;
`

const PostReadMoreButton = styled.a`
  display: inline-block;
  color: ${Colors.SECONDARY_COLOR};
  transition: .3s ease all;
  background-color: ${Colors.PRIMARY_COLOR};
  text-transform: uppercase;
  padding: 0.75rem 3rem;

  &:hover, &:active {
    color: ${Colors.PRIMARY_COLOR};
    text-decoration: none;
    background-color: ${Colors.SECONDARY_COLOR};
  }
`

const PostPreview = ({ post }) => {
  const { excerpt } = post
  const { path, title } = post.frontmatter
  return (

  <PostPreviewWrapper>
    <h2><PostTitleLink href={path}>{title}</PostTitleLink></h2>
    <PostExcerpt>{excerpt}</PostExcerpt>
    <PostReadMoreButton href={path}>Read more</PostReadMoreButton>
  </PostPreviewWrapper>
)}

export default PostPreview
