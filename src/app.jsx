import React from "react";
import { Router, Link } from "wouter";
import "./styles/styles.css";
import PageRouter from "./components/router.jsx";
import About from "./pages/about";
import Seo from './components/seo.jsx';
import SocialButtonSet from './components/social.jsx';

const ResumeButton = () => {
  return (
    <div>
      <a href={new URL('/resumes/Resume.pdf', import.meta.url).href} className="download-button" title="View PDF Resume"><i className="fas fa-file-download fa-2x download-icon"></i></a>
    </div>
  );
} 

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
  const isMobile = true;//window.innerWidth <= 800;
  console.log(window.innerWidth);
  if(isMobile) {
    return (
      <main role="main" className="wrapper">
        <div className="links top-bar">
          <SocialButtonSet
            buttons={buttonList}
          />
          <ResumeButton/>
        </div>
        <div className="content">
        <About />
        <i>please visit this website (anstrong.github.io) on a desktop for more information.</i>
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
          <ResumeButton/>
        </footer>
      </Router>
    );
  }
}
