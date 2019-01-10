import React from 'react'
import styled from 'styled-components'
import hexToRgba from 'hex-rgba'

import { H2 } from '../Headers'
import * as Colors from '../../style/colors'
import MainImage from '../MainImage'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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

const HighlightLabel = styled.span`
  background-color: ${hexToRgba(Colors.PRIMARY_COLOR, 20)};
`

const About = () => (
  <Wrapper id="about">
    <TitleWrapper>
      <H2>About</H2>
      <MainImage />
    </TitleWrapper>

    <ContentWrapper>
      <p>Hey, I am Henrique Pacheco. I'm 25 years old, and I was born and currently live in Braga, Portugal.</p>
      <p>I graduated from Universidade do Minho in Software Engineering <HighlightLabel>(feb 2018)</HighlightLabel>, and started my professional life as a software engineer at Bsolus <HighlightLabel>(sep 2014)</HighlightLabel>, an e-commerce company based in Braga. Here, I've been part of an amazing team building <HighlightLabel>Beevo</HighlightLabel>, an e-commerce solution tailored for medium-large sized companies. This experience has given me the oportunity to work on projects such as the Super Bock Group online portal - the largest beverage distributor in Portugal -, or in partnership with the Swedish team of Commerz, a company based in Malmo, Sweden.</p>
      <p>In my free time I enjoy reading, having a beer with my friends, and I love coding with my girlfriend <HighlightLabel>Mariana Capelo</HighlightLabel>. I also play in a pool team as a hobby.</p>
    </ContentWrapper>
  </Wrapper>
)

export default About
