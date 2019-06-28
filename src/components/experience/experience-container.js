import React from 'react'

import ExperienceView from './experience-view'

export default class ExperienceContainer extends React.Component {
  render() {
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
        skills: 'Business Intelligence / Application Archirecture',
        items: [
          'Thesis on usability engineering - development of widgets for an open-source prototyping tool (PVSio-Web).',
          'Specialized on Business Intelligence and Applicational Architectures.',
          'Natual language processing and software testing.',
        ],
      },
    ]
    return <ExperienceView experiences={experiences} {...this.props} />
  }
}