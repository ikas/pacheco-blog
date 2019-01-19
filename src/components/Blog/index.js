import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { H2 } from '../Headers'
import { ArrowRightIcon } from '../Icons'
import * as Colors from '../../style/colors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 4rem;
`

const TitleWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const CallToActionText = styled.p`
  text-align: center;
  color: ${Colors.PRIMARY_COLOR};
  font-size: 1.3rem;
`

const Blog = () => (
  <Wrapper id="blog">
    <TitleWrapper>
      <H2>Blog</H2>
    </TitleWrapper>
    <CallToActionText>Check out some of my thoughts by clicking on the button below.</CallToActionText>
    <Link
      style={{
        color: Colors.PRIMARY_COLOR,
        textDecoration: 'none',
        background: 'transparent',
        border: `4px solid ${Colors.PRIMARY_COLOR}`,
        borderRadius: '8px',
        padding: '0.5rem 1.5rem',
        fontSize: '1.3rem',
      }}
      to="/blog"
    >
      <>
        <ArrowRightIcon />
      </>
    </Link>
  </Wrapper>
)

export default Blog
