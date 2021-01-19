import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Sérgio Domingues' personal website. Portuguese Software Engineer based in Porto and AlumnieEI member."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A responsive, statically-generated,
            react Single-page application written with modern Javascript.
          </p>
        </div>
      </header>
      <p> Welcome to my website! Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>. {' '}
        If you find a 🐞 or for some reason, you need to get in touch with me directly, go on and {' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
