import React from 'react'
import styled from 'styled-components'

import { H2, H3 } from '../Headers'
import HighlightCard from '../HighlightCard'

const ExternalCardWrapper = styled.div`
  max-width: 750px;
  align-self: center;
  margin: 1rem;
`

const InternalCardWrapper = styled.div`
  padding: 1rem;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
`

const TitleWrapper = styled.div`

`

const BodyWrapper = styled.div`

`

const Timeline = () => (
  <Wrapper id="timeline">
    <H2>Timeline</H2>
    <ExternalCardWrapper>
      <HighlightCard>
        <InternalCardWrapper>
          <TitleWrapper>
            <H3>2018 - Present</H3>
            <p>Software engineer as freelancer</p>
          </TitleWrapper>
          <BodyWrapper>
            <p>Work in multiple projects as part of a team of remote developers.</p>
            <ul>
              <li>A cluster of microservices mainly written in Node.js.</li>
              <li>The frontend interface of a mobile app using React Native.</li>
              <li>A Wordpress-based blog.</li>
            </ul>
          </BodyWrapper>
        </InternalCardWrapper>
      </HighlightCard>
    </ExternalCardWrapper>
    <ExternalCardWrapper>
      <HighlightCard>
        <InternalCardWrapper>
          <TitleWrapper>
            <H3>2014 - 2018</H3>
            <p>Software engineer, Bsolus/Beevo</p>
          </TitleWrapper>
          <BodyWrapper>
            <p>Development of web platforms focused on B2B/B2C e-commerce and HR management systems.</p>
            <ul>
              <li>Part of the team that defined the architecture of Beevo platform.</li>
              <li>Worked on projects for national customers and alongside international teams.</li>
              <li>Role of full stack web developer.</li>
            </ul>
          </BodyWrapper>
        </InternalCardWrapper>
      </HighlightCard>
    </ExternalCardWrapper>
    <ExternalCardWrapper>
      <HighlightCard>
        <InternalCardWrapper>
          <TitleWrapper>
            <H3>2014 - 2018</H3>
            <p>MSc Software Engineering, Universidade do Minho</p>
          </TitleWrapper>
          <BodyWrapper>
            <p>Concluded the Master's degree in Software Engineering, in University of Minho.</p>
            <ul>
              <li>Thesis on usability engineering - development of widgets for an open-source prototyping tool <a href="http://www.pvsioweb.org/">(PVSio-Web)</a></li>
              <li>Specialized on Business Intelligence and Applicational Architectures.</li>
              <li>Also a bit of natual language processing and software testing.</li>
            </ul>
          </BodyWrapper>
        </InternalCardWrapper>
      </HighlightCard>
    </ExternalCardWrapper>
    <ExternalCardWrapper>
      <HighlightCard>
        <InternalCardWrapper>
          <TitleWrapper>
            <H3>2011 - 2014</H3>
            <p>BSc Software Engineering, Universidade do Minho</p>
          </TitleWrapper>
          <BodyWrapper>
            <p>Concluded the Bachelor's degree in Software Engineering, in University of Minho.</p>
          </BodyWrapper>
        </InternalCardWrapper>
      </HighlightCard>
    </ExternalCardWrapper>
  </Wrapper>
)

export default Timeline
