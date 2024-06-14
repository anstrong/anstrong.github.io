import React from "react";
import { Router, Link, Redirect } from "wouter";
import "./styles/styles.css";
import PageRouter from "./components/router.jsx";
import About from "./pages/about";
import Seo from './components/seo.jsx';
import LinkedAsset from './components/link.jsx';

// TODO: Wow this is poorly built. Rip it apart ASAP

const RESUME_URL = '/files/Resume.pdf'

const ResumeButton = () => {
  return (
    <div>
      <a href={new URL(RESUME_URL, import.meta.url).href} target="_blank" className="download-button" title="View PDF Resume">
        <i className="fas fa-file-download fa-2x download-icon"/>
      </a>
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
  const redirectToResume = true; //isMobile;

  if (redirectToResume) {
    window.location.href = RESUME_URL;
  }

  return(
    <Router>
      <Seo />
      <main role="main" className="wrapper">
        <div className="links top-bar">
          <Link href="/">
            <i class="fas fa-home back"/>
          </Link>
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
