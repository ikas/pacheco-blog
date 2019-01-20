import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const MainImage = () => (
  <StaticQuery
    query={graphql`

query {
  mainImg: file(relativePath: {eq: "images/main-pic.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 450, maxHeight: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}

    `}
    render={data => <Img fluid={data.mainImg.childImageSharp.fluid} />}
  />
)

export default MainImage
