import React, { Component } from 'react'
import Section from '../Section'
import CertaficationItem from './Item'

import data from '../../Data/certifications'

export default class Certafication extends Component {
  render() {
    return (
      <Section label="Certification">
        {data.map((item, i) => (
          <CertaficationItem key={i} {...item} />
        ))}
      </Section>
    )
  }
}
