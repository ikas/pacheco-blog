import React from 'react'
import styled from 'styled-components'
import hexToRgba from 'hex-rgba'

import { H2 } from '../Headers'
import * as Colors from '../../style/colors'
import MainImage from '../MainImage'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${Colors.SECONDARY_COLOR};
  padding-top: 8rem;
`

const ContentWrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  max-width: 600px;
  color: ${Colors.PRIMARY_COLOR};
`

const ImageWrapper = styled.div`
  margin-top: 1rem;
`

const HighlightLabel = styled.span`
  background-color: ${hexToRgba(Colors.PRIMARY_COLOR, 20)};
`

const About = () => (
  <Wrapper id="about">
    <H2>About</H2>
    <ImageWrapper><MainImage /></ImageWrapper>

    <ContentWrapper>
      <p>My name is Henrique Pacheco, 25 years old, and I was born and live in Braga, Portugal.</p>
      <p>I graduated from Universidade do Minho in Software Engineering <HighlightLabel>(feb 2018)</HighlightLabel>, and started my professional life as a software engineer at <HighlightLabel>Bsolus (sep 2014)</HighlightLabel>, an e-commerce company based in Braga. Here, I've been part of an amazing team building <HighlightLabel>Beevo</HighlightLabel>, an e-commerce solution tailored for medium-large sized companies. This experience has given me the oportunity to work on projects such as a <HighlightLabel>B2B online portal</HighlightLabel> for one of the largest beverage distributor in Portugal and in partnership with the Swedish team of Commerz, a company based in <HighlightLabel>Malmö, Sweden</HighlightLabel>.</p>
      <p>In the past months I have been working as a <HighlightLabel>remote software engineer</HighlightLabel>, and it has been a very rewarding experience. Working remotely allowed me to not only improve the way I manage my time, but also to work from wherever I feel more comfortable and productive. Following a daily routine tailored to your needs that is based purely on what you consider top priority every day is something that <HighlightLabel>boosts your health and productivity</HighlightLabel>. These last fews months have made me believe that a future where most of the workforce is remote not only is possible, but also is undoubtfully a <HighlightLabel>much healthier alternative</HighlightLabel>, and working remotely is something that I consider very important for my future endeavors.</p>
      <p>In my free time I enjoy reading, having a beer with my friends, and I love coding with my girlfriend <HighlightLabel>Mariana Capelo</HighlightLabel>. I also play in a pool team as a hobby.</p>
    </ContentWrapper>
  </Wrapper>
)

export default About
