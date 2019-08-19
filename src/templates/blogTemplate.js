import React from 'react'
import { graphql } from 'gatsby'

import Container from '../components/container'
import Footer from '../components/ui-footer'
import Header from '../components/ui-header'
import PostContent from '../components/post-content'
import PostImage from '../components/post-image'
import PostInfo from '../components/post-info'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Header currentUrl="/blog" />
      <Container maxWidth={768}>
        <PostInfo {...frontmatter} />
        <PostImage src={frontmatter.image} alt={frontmatter.title} />
        <PostContent html={html} />
      </Container>
      <Footer />
    </>
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
        image
      }
    }
  }
`