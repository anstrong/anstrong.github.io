import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";
import "./styles/styles.css";
import PageRouter from "./components/router.jsx";
import About from "./pages/about";
import useHashLocation from "./hooks/wouter-hash";
import Seo from './components/seo.jsx';
import SocialButtonSet from './components/social.jsx';

// Home function that is reflected across the site
const useMediaQuery = (query, whenTrue, whenFalse) => {
  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined')
    return whenFalse;

  const mediaQuery = window.matchMedia(query);
  const [match, setMatch] = React.useState(!!mediaQuery.matches);

  React.useEffect(() => {
    const handler = () => setMatch(!!mediaQuery.matches);
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, []);

  return match ? whenTrue : whenFalse;
};
export default function Home() {
  const buttonList = [{
    label: "LinkedIn",
    icon: "fa-linkedin-in",
    address: "https://www.linkedin.com/in/annabellestrong/"
  },
  {
    label: "GitHub",
    icon: "fa-github",
    address: "https://github.com/anstrong"
  }
  ]
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  if (!isMobile) {
   /* return (
    <main role="main" className="wrapper">
        <About />
    </main>
    );*/
    return (
      <main role="main" className="wrapper">
        <div className="links top-bar">
          <SocialButtonSet
            buttons={buttonList}
          />
          <div>
            <a href="https://github.com/anstrong/anstrong.github.io/blob/9161a71522d17336688c04306876db832a1ad1d6/assets/Resume.pdf" className="download-button" title="View PDF Resume"><i className="fas fa-file-download fa-2x download-icon"></i></a>
          </div>
        </div>
        <div className="content">
        <About />
        <i> hi! thank you for your interest. this site is much nicer on a computer if you want more information.</i>
        </div>
      </main>
    );
  }
  else {
    return (
      <Router>
        <Seo />
        <main role="main" className="wrapper">
          <div className="links top-bar">
            <Link href="/"><i class="fas fa-home back"></i></Link>
          </div>
          <div className="content">
            <PageRouter />
          </div>
        </main>
        <footer className="footer fixed-bottom">
          <div className="links">
            <SocialButtonSet
              buttons={buttonList}
            />
          </div>
          <div>
            <a href="https://github.com/anstrong/anstrong.github.io/blob/9161a71522d17336688c04306876db832a1ad1d6/assets/Resume.pdf" className="download-button" title="View PDF Resume"><i className="fas fa-file-download fa-2x download-icon"></i></a>
          </div>
        </footer>
      </Router>
    );
  }
}
