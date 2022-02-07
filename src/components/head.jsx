import * as React from "react";
import Nav from './nav.jsx';
import { Link } from "wouter";

const Head = props => {
    return ( 
        <span>
    <header className="justify-content-center">
    <Link href="/"><img className="logo" title="Home" src="https://cdn.glitch.me/47315a0e-1265-4e95-aa84-887a21ec6fb2%2Flogo.png?v=1635296262360"></img></Link>
    <h1 className="title">
        {props.title}
    </h1>
    </header>
    <Nav 
        sections={props.sections}
/></span>)
}

export default Head;
