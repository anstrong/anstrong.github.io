import * as React from "react";
import myData from '../../data.json';
import Icon from '../components/icon.jsx'
import Head from '../components/head.jsx'

export default function About() {
  const isMobile = window.innerWidth <= 800;

  const tagline = "Developer. Designer. Problem-Solver.";
  const description = "Hi there! I'm Annabelle Strong, a spring 2023 Wellesley graduate with a double major in Computer Science and Cognitive and Linguistic Sciences (the latter with a concentration in cognitive psychology). I'm passionate about technology, cognition, design, and the many intersections between the three, especially in areas like AI/ML, HCI/HCD, and human-oriented software engineering in general.";
  const elaboration = "I have over 10 years of combined personal, academic, and professional experience with development and design spanning technologies from robotics, memory allocation, and Arduino to React, software architecture, and HCI. I'm also interested in art, with particular skill in graphite and Procreate on iPad.";
  const objective = `Please don't hesitate to reach out if you would like to hear more about my qualifications. My contact information in listed at the top of my resumé, a PDF of which is available through the button on the ${isMobile? "top":"bottom"} right.`


  return (
    <div className="page">
      <Head
          title="About Me"
          img={myData.about.img}
          sections={[]}
      />
      <li className="record">
      <h4/>
      <div className="card p-3 text-center">
        {/*<h2 className="tagline">{tagline}</h2>*/}
        <div className="about-me">
          <p>{description}</p>
          <p>{elaboration}</p>
          <p>
            <b>{objective}</b>
          </p>
        </div>
      </div>
    </li>
  </div>
  )
}
