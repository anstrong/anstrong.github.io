import * as React from "react";
import myData from '../../data.json';
import { Link } from "wouter";

const Nav = props => (
  <ul className="nav justify-content-center sticky-top" id="page-nav">
      {props.sections.map((section) => (
      <button type="button" /*onClick={scrollTo(section.ref)}*/ className="btn" key={section.title}>{section.title}</button>
      ))} 
  </ul>
)

const Section = section => (
  <div className="section" id={section.title}>
    <h2><b> {section.title} </b></h2>
    <ul className="record-list">
     {section.records.map(record => (
        section.render(record)
      ))} 
    </ul>
  </div>
)

const Record = props => (
    <li className="record">
     <h4>{props.supertitle}</h4>
     <div className="card p-3 text-left"> 
      {props.title}
      <div className="card-content">
        <i>{props.subtitle}</i>
        {props.content}
      </div>
      <div className="record-footer">
        {props.footer}
      </div>
    </div>
  </li>
)

const RecordHeader = props => (
    <div className="header card-title">
        <h3 class = "name">{props.left}</h3>
        <h3 class="place">{props.right}</h3>
    </div>
)

const RecordContent = props => (
  <ul className="details"> 
      {props.details.map(detail => (
                  <li> {detail} </li>
      ))} 
  </ul>
)

const RecordFooter = props => (
  <ul className="tags">
      {props.list.map(tag => (
        <span class="badge badge-pill">{tag}</span>
      ))} 
  </ul>
)

const Job = props => (
  <Record
        supertitle={props.duration}
        title={<RecordHeader
                 left={props.title}
                 right={props.place}
                 />}
        subtitle={props.description}
        content={<RecordContent
                   details={props.details}
                   />}
        footer= {<RecordFooter
                 list={props.tags}
                 />}
  />
)
  
function makeJob(job) {
  return (
     <Job
        title={job.title}
        place={job.place}
        duration={job.duration}
        description={job.description}
        details={job.details}
        tags={job.tags}
      />
  );
}


function makeDegree(degree) {
  return (
     <Job
        title={degree.title}
        place={degree.place}
        duration={degree.duration}
        description={degree.description}
        details={degree.details}
        tags={degree.tags}
      />
  );
}

function scrollTo(ref) {
  ref.current.scrollIntoView({ behavior: 'smooth' })
}

const MakeSection = React.forwardRef((props, {ref}) => (
    <Section 
        {...props}
        ref={ref}
    />
))

export default function Projects() {
  var sections = myData.projects.sections;
  
  return (
    <div className="page">
    <header className="justify-content-center">
      <Link href="/"><img className="logo" title="Home" src="https://cdn.glitch.me/47315a0e-1265-4e95-aa84-887a21ec6fb2%2Flogo.png?v=1635296262360"></img></Link>
      <h1 className="title">
        My Projects
      </h1>
    </header>
    <Nav 
      sections={sections}
    />
    <ul>
    {sections.map(section => (
      <Section 
        title={section.title}
        records={section.records}
        render={eval(section.render)}
        key={section.title}
      />
    ))}
    </ul>
  </div>
  )
}