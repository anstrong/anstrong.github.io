import * as React from "react";

function scrollTo(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' })
}

const Nav = props => {
    return (
        <ul className="nav justify-content-center sticky-top" id="page-nav">
            {props.sections.map((section) => (
                <button type="button" /*onClick={scrollTo(section.ref)}*/ className="btn" key={section.title}>{section.title}</button>
            ))}
        </ul>
    );
};

export default Nav;
