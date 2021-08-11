import React from 'react';
import { Headshot, Layout, Paragraph } from './components';

function Experience(): JSX.Element {
  const victorPic = <Headshot imgName='profile' altText='My headshot' />;
  const experience = (
    <div className='px-12 md:p-1'>
      <Paragraph>
        As of summer 2021, I&apos;m working as a software engineer intern in
        Capital One&apos;s{' '}
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
    </div>
  );

  return <Layout center={experience} right={victorPic} />;
}

export default Experience;
