import React from 'react'

import ExperienceView from './experience-view'

export default class ExperienceContainer extends React.Component {
  render() {
    const experiences = [
      {
        from: 'Jan 2022',
        to: 'Now',
        title: 'Backend Engineer @ Deel',
        skills: 'Node.JS / Typescript / Docker / Kubernetes / AWS',
        items: [
          'Working on a product shaping the future of global hiring around the world.',
          'Technological stack composed of NodeJS/Typescript, alongside PostgreSQL and Docker for local development.',
          'High focus on software quality, robustness and compliance, with standards by reviewing code, documenting, and creating automated tests.',
        ],
      },
      {
        from: '2019',
        to: '2021',
        title: 'Backend Engineer @ Vizzuality',
        skills: 'Node.JS / Ruby / Docker / Kubernetes / AWS',
        items: [
          'Designing and developing cross-functional systems to process and serve large amounts of data in the cloud, often in real-time, and ensuring their craftsmanship, availability, resilience, and scalability.',
          'Technological stack composed of NodeJS, Rails and some Python, as well as technologies such as Kubernetes, Terraform and AWS for infrastructure management.',
          'Ensuring software quality, robustness and compliance with standards by reviewing code, documenting, and creating automated tests.',
        ],
      },
      {
        from: '2018',
        to: '2019',
        title: 'Remote Software Engineer',
        skills: 'JavaScript / Node.JS / React Native / React / Redux',
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