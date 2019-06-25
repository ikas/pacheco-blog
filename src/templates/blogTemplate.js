import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import Layout from '../components/Layout'
import BlogHeader from '../components/BlogHeader'
import BlogPostInfo from '../components/BlogPostInfo'
import BlogPostContent from '../components/BlogPostContent'
import Container from '../components/container'
import * as Colors from '../style/colors'

const PostContentWrapper = styled.div`
  background: ${Colors.WHITE};
`

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <BlogHeader title={frontmatter.title} description={frontmatter.description} />
      <PostContentWrapper>
        <Container>
          <BlogPostInfo {...frontmatter} />
          <BlogPostContent html={html} />
        </Container>
      </PostContentWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMM, YYYY")
        path
        title
        author
        description
        category
      }
    }
  }
`