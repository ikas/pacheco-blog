import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'

import * as Colors from '../../style/colors'

const Wrapper = styled.div`
  padding: 6rem 1rem;
  background-color: ${Colors.PRIMARY_COLOR};
`

const BlogHeaderText = styled.div`
  font-size: 4rem;
  line-height: 4rem;
  color: ${Colors.SECONDARY_COLOR};
  margin-bottom: 4rem;
  margin-top: 2rem;
`

const BlogSecText = styled.p`
  color: ${Colors.SECONDARY_COLOR};
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 0;
`

const BlogHeader = ({ title, description }) => (
  <Wrapper>
    <Container>
      <BlogHeaderText>{title}</BlogHeaderText>
      <BlogSecText>{description}</BlogSecText>
    </Container>
  </Wrapper>
)

export default BlogHeader
