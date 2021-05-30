import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const sections = [
];

const Resume = () => (
  <Main
    title="Resume"
    description="Prasoon's Resume"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <object width="100%" height="700" data="https://it5prasoon.github.io/Resume/Prasoon's%20Resume.pdf" type="application/pdf">   </object>
    </article>
  </Main>
);

export default Resume;
