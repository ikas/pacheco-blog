import React from "react"
import { graphql } from "gatsby"

import BlogHeader from '../components/BlogHeader'
import PostPreview from '../components/PostPreview'
import Layout from '../components/Layout'
import Container from '../components/container'

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges.filter(edge => edge.node.frontmatter.featured)
    .map(edge => <PostPreview key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <BlogHeader title="Pacheco Blog" description="Some thoughts about this world we live in." />
      <Container>{posts}</Container>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            featured
          }
        }
      }
    }
  }
`
