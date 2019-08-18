import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import BlogGallery from '../components/blog-gallery'
import Footer from '../components/ui-footer'
import Header from '../components/ui-header'
import HomeStage from '../components/home-stage'
import Scroll from '../components/scroll'

const FullHeightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 1 auto;
`

const HomeFeature = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default  ({
  data: { allMarkdownRemark: { edges }},
}) => {
  const posts = edges.filter(edge => edge.node.frontmatter.featured)

  return (
    <>
      <FullHeightWrapper>
        <Header currentUrl="/" />
        <HomeFeature>
          <HomeStage />
        </HomeFeature>
        <Scroll />
      </FullHeightWrapper>

      <BlogGallery posts={posts} />

      <Footer />
    </>
  )
}

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