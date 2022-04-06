import * as React from "react";
import Nav from './nav.jsx';
import Icon from './icon.jsx';

const Head = props => {
    return ( 
    <span>
    <header className="justify-content-center">
        <Icon image={props.img}/>
        <h1 className="title">
            {props.title}
        </h1>
    </header>
    <Nav 
        sections={props.sections}
/></span>)
}

export default Head;
