import React from 'react'
import styled from 'styled-components'

import Heading from '../heading'
import Copy from '../copy'

const Wrapper = styled.div`
  margin-bottom: 26px;
`

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`

const TitleWrapper = styled.div`
  flex: 1;
`

const SkillsCopy = styled(Copy)`
  font-size: 16px;
  line-height: 33px;
`

const FromToCopy = styled(Copy)`
  font-size: 16px;
  line-height: 33px;
`

const experiences = [
  { 
    from: 'July 2018', 
    to: 'Now', 
    title: 'Remote Software Engineer', 
    skills: 'Node.JS / React Native / React / Redux / CSS / Wordpress',
    items: [
      'Multiple projects as part of a network of remote workers.',
      'Cluster of microservices mainly written in Node.js.',
      'Frontend UI of a mobile app using React Native.',
    ],
  },
  { 
    from: '2014', 
    to: '2018', 
    title: 'Bsolus/Beevo', 
    skills: 'PHP / E-commerce / HTML / CSS / JavaScript',
    items: [
      'Development of web platforms focused on B2B/B2C e-commerce and HR management systems',
      'Architecture of Beevo platform.',
      'Projects for national customers and alongside international teams.',
      'Full stack web development & Team Lead.',
    ],
  },
  { 
    from: '2014', 
    to: '2018', 
    title: 'MSc Software Engineering', 
    skills: 'Business Intelligence / React Native / React / Redux / CSS / Wordpress',
    items: [
      'Thesis on usability engineering - development of widgets for an open-source prototyping tool (PVSio-Web).',
      'Specialized on Business Intelligence and Applicational Architectures.',
      'Natual language processing and software testing.',
    ],
  },
]

export default () => (
  <div>
    <Heading level={2} mt={6} mb={5}>Experience</Heading>
    { experiences.map((exp, idx) => (
        <Wrapper key={idx}>
          <HeadingWrapper>
            <TitleWrapper>
              <Heading level={4} my={0}>{exp.title}</Heading>
              <SkillsCopy color="secondary" mb={0} mt={1}>{exp.skills}</SkillsCopy>
            </TitleWrapper>
            <FromToCopy color="primaryShade2" mb={0}>{exp.from} - {exp.to}</FromToCopy>
          </HeadingWrapper>
          
          { exp.items.map((item, idx) => (<Copy key={idx} mb={0} mt={3}>- {item}</Copy>)) }
        </Wrapper>
    ))}
  </div>
)