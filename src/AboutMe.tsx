import React from 'react'
import { Header, Headshot, Layout, Paragraph } from './components'

function AboutMe (): JSX.Element {
  const victorPic = <Headshot imgName='profile' altText='My headshot' />
  const aboutMe = (
    <>
      <Header>Hi, I'm Victor Song</Header>
      <Paragraph>
        I'm a rising senior at Rice University looking for a full time position
        as a full-stack developer or data scientist. I enjoy working in
        fast-paced team environments with a continuous learning mindset and
        rigorous team feedback. I aim to use interdisciplinary thinking to
        create innovative tools which benefit the social good and solve
        outstanding problems.
      </Paragraph>
      <Paragraph>
        As of summer 2021, I'm working as a software engineer intern in Capital
        One's{' '}
        <a
          className='underline'
          href='https://campus.capitalone.com/technology-program?id=internship'
        >
          Technology Internship Program
        </a>
        . My intern pod of 4 is working on an Angular-based credit card
        pre-approval portal for small businesses. This will reduce the friction
        of applying for credit cards for millions of small businesses.
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
        including k-means clustering and principal component analysis to create
        effective exercise guidelines for underserved populations at risk of
        Type 2 diabetes.
      </Paragraph>
    </>
  )

  return <Layout left={victorPic} center={aboutMe} />
}

export default AboutMe
