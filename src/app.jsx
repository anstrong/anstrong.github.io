import React from "react";
import { Router, Link } from "wouter";
import "./styles/styles.css";
import PageRouter from "./components/router.jsx";
import About from "./pages/about";
import Seo from './components/seo.jsx';
import LinkedAsset from './components/link.jsx';

new URL('/files/Resume.docx', import.meta.url)
const ResumeButton = () => {
  return (
    <div>
      <a href={new URL('/files/Resume.pdf', import.meta.url).href} target="_blank" className="download-button" title="View PDF Resume"><i className="fas fa-file-download fa-2x download-icon"></i></a>
    </div>
  );
} 

const SocialButtonSet = () => (
    <ul>
    <LinkedAsset
      address="https://github.com/anstrong"
      label="GitHub"
    />
    <LinkedAsset
      address="https://www.linkedin.com/in/annabellestrong/"
      label="LinkedIn"
    />
  </ul>
)

export default function Home() {
  const isMobile = window.innerWidth <= 800;
  console.log(window.innerWidth);
  if(isMobile) {
    return (
      <main role="main" className="wrapper">
        <div className="links top-bar">
          <SocialButtonSet />
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
            <SocialButtonSet />
          </div>
          <ResumeButton/>
        </footer>
      </Router>
    );
  }
}
