import React, { Component } from 'react'
import Section from '../Section'
import ProjectItem from './Item'

import data from '../../Data/project'

export default class Project extends Component {
  render() {
    return (
      <Section label="Projects">
        {data.map((item, i) => (
          <ProjectItem key={i} {...item} />
        ))}
      </Section>
    )
  }
}
