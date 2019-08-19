import React from 'react'
import { graphql } from 'gatsby'

import Container from '../components/container'
import Footer from '../components/ui-footer'
import Header from '../components/ui-header'
import PostContent from '../components/post-content'
import PostInfo from '../components/post-info'
import PostHeader from '../components/post-header'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Header />
      <PostHeader title={frontmatter.title} description={frontmatter.description} />
      <Container maxWidth={686}>
        <PostInfo {...frontmatter} />
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
      }
    }
  }
`