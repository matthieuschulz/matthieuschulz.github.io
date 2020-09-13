import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="avatar.png" />
        </div>
        <p>
          Hi, I'm Matthieu Schulz! Born and raised in Paris, I am currently in London
          exploring the realms of Computer Science and Engineering as an undergraduate at University College London.
          My interests lie in Artificial Intelligence, Software Engineering and I 
          have worked on some cool open source projects as well that you can check out on this Website!
          <br />
          
          <br />

          Check out my favorite quotes!
          {/*
          I'm also a certified graphic designer from{' '}
          <a className="about__rkmscc-link" href="http://www.rkmscc.org/">
            "Ramakrishna Mission Shilpamandira"
          </a>
          . I also do Graphic and UI designing. Since I love both programming
          and designing, I'm also interested in creating programmatic designs
          and creative coding projects.
          */}
        </p>
  
      </AboutInfo>

      <Flex justify="space-between" className="quotes__wrapper">
        <Quote>
          <p>“I never loose. I either win or I learn.“ - Nelson Mandela</p>
        </Quote>
        <Quote>
          <p>
            “I know I’m not successful enough, but I’m passionate enough not to
            worry about success.“
          </p>
        </Quote>
        <Quote>
          <p>
            “Creativity is the driver of an unstoppable train called Passion.”
          </p>
        </Quote>
      </Flex>
    </AboutWrapper>
  );
};

export default About;
