import React from 'react'
import styled from 'styled-components'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './override-timeline.css';

import { WorkIcon, LocationIcon, CalendarIcon, SchoolIcon } from '../Icons'
import { H2White } from '../Headers'
import * as Colors from '../../style/colors'

const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 1rem 0 1rem;
  background-color: ${Colors.PRIMARY_COLOR};
`

const TimelineEntryTitle = styled.h3`
  color: ${Colors.PRIMARY_COLOR};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const TimelineEntryLocation = styled.h4`
  color: ${Colors.PRIMARY_COLOR};
  font-size: 1rem;
  margin-left: 0.5rem;
  margin-bottom: 0;
`

const IconTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const TLElem = ({ title, date, location, description, type }) => {
  let icon;
  switch (type) {
    case 'school':
      icon = <SchoolIcon color={Colors.SECONDARY_COLOR} />
      break;
    case 'work':
    default:
      icon = <WorkIcon color={Colors.SECONDARY_COLOR} />
      break;
  }
  return <VerticalTimelineElement
      iconStyle={{ background: Colors.PRIMARY_COLOR }}
      icon={icon}
      style={{ width: '100%', marginTop: '2rem', marginBottom: '2rem' }}
      animate={false}
    >
      <TimelineEntryTitle>{title}</TimelineEntryTitle>
      <IconTextWrapper>
        <LocationIcon color={Colors.PRIMARY_COLOR} size="fa-sm" />
        <TimelineEntryLocation>{location}</TimelineEntryLocation>
      </IconTextWrapper>
      <IconTextWrapper>
        <CalendarIcon color={Colors.PRIMARY_COLOR} size="fa-sm" />
        <TimelineEntryLocation>{date}</TimelineEntryLocation>
      </IconTextWrapper>
      {description}
    </VerticalTimelineElement>
}

const Timeline = () => (
  <TimelineWrapper>
    <H2White>Timeline</H2White>
    <VerticalTimeline animate={false}>
      <TLElem
        title="Remote Software Engineer"
        location="Braga, Portugal"
        date="Aug 2018 - Present"
        description={<>
          <p>Participation in multiple projects as part of a network of full-time remote workers, including:</p>
          <p>- A cluster of microservices mainly written in Node.js.</p>
          <p>- The frontend interface of a mobile app using React Native.</p>
          <p>- A Wordpress-based blog.</p>
        </>}
      />

      <TLElem
        title="Software engineer, Bsolus/Beevo"
        location="Braga, Portugal"
        date="Sep 2014 - Jun 2018"
        description={<>
          <p>Development of web platforms focused on B2B/B2C e-commerce and HR management systems.</p>
          <p>- Part of the team that defined the architecture of Beevo platform.</p>
          <p>- Worked on projects for national customers and alongside international teams.</p>
          <p>- Role of full stack web developer.</p>
        </>}
      />

      <TLElem
        title="MSc Software Engineering"
        location="U. Minho, Braga, Portugal"
        date="Sep 2014 - Feb 2018"
        type="school"
        description={<>
          <p>Concluded the Master's degree in Software Engineering, in University of Minho.</p>
          <p>- Thesis on usability engineering - development of widgets for an open-source prototyping tool <a href="http://www.pvsioweb.org/">(PVSio-Web)</a></p>
          <p>- Specialized on Business Intelligence and Applicational Architectures.</p>
          <p>- Also a bit of natual language processing and software testing.</p>
        </>}
      />

      <TLElem
        title="BSc Software Engineering"
        location="U. Minho, Braga, Portugal"
        date="Sep 2011 - Jun 2014"
        type="school"
        description={<>
          <p>Concluded Bachelor's degree in Software Engineering, in University of Minho.</p>
        </>}
      />

      <VerticalTimelineElement iconStyle={{ background: Colors.PRIMARY_COLOR }} />
    </VerticalTimeline>
  </TimelineWrapper>
)

export default Timeline
