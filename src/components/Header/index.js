import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { ArrowRightIcon } from '../Icons'
import * as Colors from '../../style/colors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 8rem;
  padding-bottom: 2rem;
  background-color: ${Colors.PRIMARY_COLOR};
`

const ContentWrapper = styled.div`
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const SiteTitle = styled.div`
  font-size: 4rem;
  line-height: 4rem;
  text-transform: uppercase;
  color: ${Colors.SECONDARY_COLOR};
  margin-bottom: 4rem;
`

const SiteDescription = styled.p`
  text-align: center;
  color: ${Colors.SECONDARY_COLOR};
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 4rem;
`

const CallToActionText = styled.p`
  text-align: center;
  color: ${Colors.SECONDARY_COLOR};
  font-size: 1.2rem;
  margin-bottom: 2rem;
`

const ButtonText = styled.div`
  margin-right: 1rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const getAge = () => {
  const today = new Date();
  const birthDate = new Date("07/16/1993");
  const age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  return m < 0 || (m === 0 && today.getDate() < birthDate.getDate()) ? age - 1 : age;
}

const Header = () => (
  <Wrapper id="header">
    <ContentWrapper>
      <SiteTitle>Henrique Pacheco</SiteTitle>
      <SiteDescription>{getAge()} years old, software engineer, I love coding and blog as a hobby.</SiteDescription>
      <CallToActionText>Check out some of my thoughts by clicking on the button below.</CallToActionText>
      <Link
        style={{
          color: Colors.SECONDARY_COLOR,
          textDecoration: 'none',
          background: 'transparent',
          border: `4px solid ${Colors.SECONDARY_COLOR}`,
          borderRadius: '8px',
          padding: '0.5rem 1rem',
          fontSize: '1.3rem',
        }}
        to="/blog"
      >
        <ButtonWrapper>
          <ButtonText>Go to Blog</ButtonText>
          <ArrowRightIcon color={Colors.SECONDARY_COLOR} />
        </ButtonWrapper>
      </Link>
    </ContentWrapper>
  </Wrapper>
)

export default Header
