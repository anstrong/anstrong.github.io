import * as React from "react";
import myData from '../../data.json';
import { Link } from "wouter";

export default function About() {
  var sections = myData.about.sections;
  
  const tagline = "Developer. Designer. Problem-Solver.";
  const description = "Hi there! I'm a college junior double majoring in Computer Science and Cognitive and Linguistic Sciences (the latter with a concentration in cognitive psychology). I'm passionate about technology, cognition, design, and the many intersections between the three, especially in areas like AI/ML, HCI/HCD, and human-oriented software engineering in general.";
  const elaboration = "I have over 10 years of experience with development and design spanning technologies from robotics, memory allocation, and Arduino to software architecture and HCI. I'm also interested in art, with particular skill in graphite and Procreate on iPad.";
  const objective = "I'm currently seeking a summer internship in technology and/or design for Summer 2022. Please don't hesitate to reach out if you would like to hear more about my qualifications. My contact information in listed at the top of my resumé, a PDF of which is available through the button on the bottom right."
  
  return (
    <div className="page">
    <header className="justify-content-center">
      <Link href="/"><img className="portrait" title="Home" src="https://cdn.glitch.me/47315a0e-1265-4e95-aa84-887a21ec6fb2%2F2021%2520Portrait.jpg?v=1635389451629"></img></Link>
      <h1 className="title">
        About Me
      </h1>
    </header>
    <li className="record">
     <h4></h4>
     <div className="card p-3 text-center"> 
      <h2 className="tagline">{tagline}</h2>
      <div className="about-me">
        <p>{description}</p>
        <p>{elaboration}</p>
       <p><b>{objective}</b></p>
      </div>
    </div>
  </li>
  </div>
  )
}
