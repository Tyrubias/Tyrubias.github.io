import React from 'react';
import { Header, Headshot, Layout, Paragraph } from './components';

function AboutMe(): JSX.Element {
  const victorPic = <Headshot imgName='profile' altText='My headshot' />;
  const aboutMe = (
    <div className='px-12 md:p-1'>
      <Header>Hi, I&apos;m Victor Song</Header>
      <Paragraph>
        I&apos;m a rising senior at Rice University looking for a full time
        position as a full-stack developer or data scientist. I enjoy working in
        fast-paced team environments with a continuous learning mindset and
        rigorous team feedback. I aim to use interdisciplinary thinking to
        create innovative tools which benefit the social good and solve
        outstanding problems.
      </Paragraph>
    </div>
  );

  return <Layout center={aboutMe} right={victorPic} />;
}

export default AboutMe;
