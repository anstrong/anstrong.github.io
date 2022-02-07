import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";
import "./styles/styles.css";
import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";
import Seo from './components/seo.jsx';
import SocialButtonSet from './components/social.jsx';

// Home function that is reflected across the site
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
  return (
    <Router>
      <Seo />
      <main role="main" className="wrapper">
        <div className="links top-bar">
          <Link href="/"><i class="fas fa-home back"></i></Link>
        </div>
        <div className="content">
          {/* Router specifies which component to insert here as the main content */}
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
          <a href="https://onedrive.live.com/?authkey=%21ACf3rPyS6pNvxzE&cid=B23F11CD41DE316F&id=B23F11CD41DE316F%2184165&parId=B23F11CD41DE316F%2136093&o=OneUp" className="download-button" title="View PDF Resume"><i className="fas fa-file-download fa-2x download-icon"></i></a>
        </div>
      </footer>
    </Router>
  );
}
