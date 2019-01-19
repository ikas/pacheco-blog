import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const MainImage = () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: {eq: "images/main-pic.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.file.childImageSharp.fluid} />}
  />
)

export default MainImage
