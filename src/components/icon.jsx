import * as React from "react";
import { Link } from "wouter";

const Icon = props => {
    return (
    <Link href="/">
        <img className="portrait" title="Home" src={`/assets/${props.image}`}/>
    </Link>
    )
}

export default Icon;
