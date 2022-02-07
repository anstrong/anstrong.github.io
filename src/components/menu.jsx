import * as React from "react";
import { Link } from "wouter";

const Menu = props => {
    return (
        <ul class="nav justify-content-center">
            {props.pages.map(page => (
                <Link href={"/" + page} title={page} className="home-nav-button">
                    <i className={props.data[page].icon + " fa-3x home-nav-icon"}></i>
                    <p className="button-label">{page}</p>
                </Link>
            ))}
        </ul>
    );
};

export default Menu;
