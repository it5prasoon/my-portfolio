import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => (
  <HelmetProvider>
    <Analytics />
    <ScrollToTop />
    <Helmet titleTemplate="Prasoon" defaultTitle="cyberKnight's Port">
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://it5prasoon.github.io/cyberknight_port/" />
      <meta property="og:title" content="cyberKnight's Port" />
      <meta property="og:description" content="Portfolio built with react-js and libraries..!" />
      <meta property="og:image" content="https://it5prasoon.github.io/pics/thumbnail-website.png" />
      <meta property="twitter:card" content="cyberKnight's Port" />
      <meta property="twitter:url" content="https://it5prasoon.github.io/cyberknight_port/" />
      <meta property="twitter:title" content="cyberKnight's Port" />
      <meta property="twitter:description" content="Portfolio built with react-js and libraries..!" />
      <meta property="twitter:image" content="https://it5prasoon.github.io/pics/thumbnail-website.png" />
    </Helmet>
    <div id="wrapper">
      <Navigation />
      <div id="main">
        {props.children}
      </div>
      {props.fullPage ? null : <SideBar />}
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Prasoon's personal website.",
};

export default Main;
