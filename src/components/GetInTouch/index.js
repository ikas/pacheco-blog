import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { H2 } from '../Headers'
import * as Colors from '../../style/colors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
`

const GetInTouchLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  text-decoration: none;
`

const LinkText = styled.span`
  text-align: center;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 1rem;
  color: ${Colors.PRIMARY_COLOR};
  font-weight: bold;
`

const GetInTouch = () => (
  <Wrapper id="about">
    <H2>Get in touch</H2>

    <ContentWrapper>
      <GetInTouchLink href="mailto:henriquejcpacheco@gmail.com">
        <FontAwesomeIcon icon={['fas', 'at']} color={Colors.PRIMARY_COLOR} className="fa-lg" />
        <LinkText>henriquejcpacheco [at] gmail [dot] com</LinkText>
      </GetInTouchLink>

      <GetInTouchLink href="https://www.google.pt/maps/place/Braga/">
        <FontAwesomeIcon icon={['fas', 'location-arrow']} color={Colors.PRIMARY_COLOR} className="fa-lg" />
        <LinkText>Braga, Portugal</LinkText>
      </GetInTouchLink>
    </ContentWrapper>
  </Wrapper>
)

export default GetInTouch
