import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const MainImage = () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: {eq: "images/main-pic.jpg"}) {
          childImageSharp {
            fixed(width: 300, height: 250) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.file.childImageSharp.fixed} />}
  />
)

export default MainImage
