import React from 'react'
import { Header, Headshot, Paragraph } from './components'

function AboutMe (): JSX.Element {
  return (
    <div className='md:grid grid-cols-page gap-x-8 grid-rows-none items-center justify-between h-screen'>
      <Headshot imgName='profile' altText='My headshot' />
      <div>
        <Header>Hi, I'm Victor Song</Header>
        <Paragraph>
          I'm a rising senior at Rice University looking for a full time
          position as a full-stack developer or data scientist. I enjoy working
          in fast-paced team environments with a continuous learning mindset and
          rigorous team feedback. I aim to use interdisciplinary thinking to
          create innovative tools which benefit the social good and solve
          outstanding problems.
        </Paragraph>
        <Paragraph>
          As of summer 2021, I'm working as a software engineer intern in
          Capital One's{' '}
          <a
            className='underline'
            href='https://campus.capitalone.com/technology-program?id=internship'
          >
            Technology Internship Program
          </a>
          . You can hear more about my work as the summer progresses.
        </Paragraph>
        <Paragraph>
          In the summer of 2020, I worked as a research intern in the{' '}
          <a
            className='underline'
            href='https://pathsup.org/workforce-development/undergraduates/reu/'
          >
            PATHS-UP REU program
          </a>
          . My work focused on using unsupervised machine learning techniques
          including k-means clustering and principal component analysis to
          create effective exercise guidelines for underserved populations at
          risk of Type 2 diabetes.
        </Paragraph>
      </div>
    </div>
  )
}

export default AboutMe
