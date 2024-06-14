import * as React from "react";
//import Nav from './nav.jsx';
import Icon from './icon.jsx';

function scrollTo(ref) {
    if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }
}

const Nav = props => {
    return (
        <ul className="nav justify-content-center sticky-top" id="page-nav">
            {props.sections.map(([section, ref]) =>
                <button type="button" onClick={() => scrollTo(ref)} className="btn" key={section.title}>
                    {section.title}
                </button>
            )}
        </ul>
    );
};

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
            />
        </span>
    )
}

export default Head;
