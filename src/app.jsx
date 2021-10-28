import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";

/**
* This code defines the react app
*
* Imports the router functionality to provide page navigation
* Defines the Home function outlining the content on each page
* Content specific to each page (Home and About) is defined in their components in /pages
* Each page content is presented inside the overall structure defined here
* The router attaches the page components to their paths
*/

// Import and apply CSS stylesheet
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';


const SocialButton = props => (
<a href={props.address} title={props.label}><i className={"fab social-icon " + props.icon}></i></a>
)

const SocialButtonSet = props => (
  <ul>
      {props.buttons.map(button => (
      <SocialButton 
        address={button.address}
        icon={button.icon}
        label={button.label}
        key={button.label}
        />
      ))} 
  </ul>
)

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
    <Router hook={useHashLocation}>
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
