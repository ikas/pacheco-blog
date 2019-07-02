import React from 'react'

import ExperienceView from './experience-view'

export default class ExperienceContainer extends React.Component {
  render() {
    const experiences = [
      { 
        from: 'July 2018', 
        to: 'Now', 
        title: 'Remote Software Engineer', 
        skills: ' JavaScript / Node.JS / React Native / React / Redux',
        items: [
          'Participation in multiple software projects as part of a network of remote workers.',
          'Development of micro services based in Node.JS (Express) and MySQL.',
          'UI/UX of multiple mobile applications using React Native.',
        ],
      },
      { 
        from: '2014', 
        to: '2018', 
        title: 'Beevo', 
        skills: 'E-commerce / PHP / HTML / CSS / JavaScript',
        items: [
          'Development of web platforms focused on B2B/B2C e-commerce targeted at medium and large scale businesses.',
          'Participation in the development of the product using Phalcon framework.',
          'Projects for national customers and alongside international teams.',
          'Full stack web development & Product team leader during the last year.',
        ],
      },
      { 
        from: '2011', 
        to: '2018', 
        title: 'BSc + MSc Software Engineering', 
        skills: 'University of Minho, Braga, Portugal',
        items: [
          'Master\'s thesis on usability engineering - development of widgets for an open-source prototyping tool (PVSio-Web).',
          'Specialization in Business Intelligence and Applicational Architectures.',
          'Also a bit of natual language processing and software testing.',
        ],
      },
    ]
    return <ExperienceView experiences={experiences} {...this.props} />
  }
}