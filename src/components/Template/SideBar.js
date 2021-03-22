import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const getAge = () => {
  const birthYear = 1995; // july: 6
  const thisYear = (new Date()).getFullYear();

  return thisYear - birthYear;
};

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        {/*  THis points to linked in profile pic */}
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFajQJqq-LgIA/profile-displayphoto-shrink_400_400/0/1611069577945?e=1616630400&v=beta&t=-G7epNcxaZNUedaPDjmJrr4MfLAgRIVd0U4yLwqniko" alt="sergio-budapeste-2019" />
        {/* <img src={`${PUBLIC_URL}/images/me.png`} alt="sergio-budapeste-2019" /> */}
      </Link>
      <header>
        <h2>Sérgio Domingues</h2>
        <p><a href="mailto:sergio.apdom@gmail.com">sergio.apdom@gmail.com</a></p>
        <ContactIcons />
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        <strong>TODO</strong>
        <br />
        Hey there, how is it going? My name is Sérgio Domingues, I&apos;m {getAge()} and
        I currently work as a Software Engineer in the security field.
        Nope, not a Mr. Robot wannabe although I really liked the series.
      </p>

      {/* <p>Hi, I&apos;m Michael. I like building things.
        I am a <a href="https://icme.stanford.edu/">Stanford ICME</a> graduate, YC Alumni, and
        the co-founder and CTO of <a href="https://arthena.com">Arthena</a>. Before Arthena I was
        at <a href="https://matroid.com">Matroid</a>
        , <a href="https://planet.com">Planet</a>
        , <a href="https://planetaryresources.com">Planetary Resources</a>
        , <a href="https://facebook.com">Facebook</a>
        , and <a href="https://seds.org">SEDS</a>.
      </p> */}
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>
  </section>
);

export default SideBar;
