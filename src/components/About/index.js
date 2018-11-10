import React from 'react'
import styled from 'styled-components'
import hexToRgba from 'hex-rgba'

import * as Colors from '../../style/colors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Header = styled.h2`
  color: ${Colors.PRIMARY_COLOR};

  &::after {
    border: 2px solid ${Colors.PRIMARY_COLOR};
    content: ' ';
    display: block;
    width: 30px;
    margin: 0.25rem 0;
  }
`

const ProfileImage = styled.img`
  transition: all 0.5s;
  box-shadow: 0 0 1rem 0 ${hexToRgba(Colors.PRIMARY_COLOR, 20)};
  background-color: ${hexToRgba(Colors.SECONDARY_COLOR, 50)};

  &:hover {
    box-shadow: 0 0 1rem 0 ${hexToRgba(Colors.PRIMARY_COLOR, 60)};
  }
`

const TitleWrapper = styled.div`
  flex: 1;
`

const ContentWrapper = styled.div`
  flex: 2;
  text-align: justify;
  font-size: 0.9rem;
`


const About = () => (
  <Wrapper id="about">
    <TitleWrapper>
      <Header>About</Header>
      <ProfileImage class="profile-image" src="http://henriquepacheco.com/assets/img/profile-pic.jpg" alt="Henrique Pacheco" width="200" height="200" />
    </TitleWrapper>

    <ContentWrapper>
      <p>Hey, I am Henrique Pacheco. I'm 25 years old, and I was born (and currently live) in Braga, Portugal.</p>
      <p>I graduated from Universidade do Minho in Software Engineering (feb 2018), and started my professional life as a software engineer at Bsolus (sep 2014), an e-commerce company based in Braga. Here, I've been part of an amazing team building Beevo, an e-commerce solution tailored for medium-large sized companies. This experience has given me the oportunity to work on projects such as the Super Bock Group online portal - the largest beverage distributor in Portugal -, or in partnership with the Swedish team of Commerz, a company based in Malmo, Sweden - more details of the project here.</p>
      <p>In my free time I enjoy reading, having a beer with my friends, and I love coding with my girlfriend Mariana Capelo. I also play in a pool team as a hobby.</p>
    </ContentWrapper>
  </Wrapper>
)

export default About
