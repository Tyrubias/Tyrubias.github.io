import React from 'react'
import profilew from './profile.webp'
import profile from './profile.jpg'

function AboutMe (): JSX.Element {
  return (
    <div className='md:grid grid-cols-page gap-x-8 grid-rows-none items-center justify-between h-screen'>
      <picture>
        <source srcSet={profilew} type='image/webp' />
        <source srcSet={profile} type='image/jpeg' />
        <img className='rounded-full ml-2' src={profile} alt='My headshot' />
      </picture>
      <div>
        <h1 className='font-extrabold text-5xl my-8 subpixel-antialiased'>
          Hi, I'm Victor Song
        </h1>
        <p className='my-3 text-lg font-thin subpixel-antialiased'>
          I'm a rising senior at Rice University looking for a full time
          position as a full-stack developer or data scientist. I enjoy working
          in fast-paced team environments with a continuous learning mindset and
          rigorous team feedback. I aim to use interdisciplinary thinking to
          create innovative tools which benefit the social good and solve
          outstanding problems.
        </p>
        <p className='my-3 text-lg font-light subpixel-antialiased'>
          As of summer 2021, I'm working as a software engineer intern in
          Capital One's{' '}
          <a
            className='underline'
            href='https://campus.capitalone.com/technology-program?id=internship'
          >
            Technology Internship Program
          </a>
          . You can hear more about my work as the summer progresses.
        </p>
        <p className='my-3 text-lg font-light subpixel-antialiased'>
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
        </p>
      </div>
    </div>
  )
}

export default AboutMe
