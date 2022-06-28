import * as React from "react";
import "../styles/styles.css";

const icons = {
    "Website":"fa fa-external-link", //fa fa-link
    "Repository": "fa fa-code-fork",
    "GitHub": "fa fa-github",
    "Certificate": "fa fa-certificate",
    "LinkedIn": "fa fa-linkedin",
    "Paper": "fa fa-file-text-o"
}

const Button = props => (
    <a href={props.address} target="_blank" title={props.label}><i className={`sm_icon ${props.icon}`}></i></a>
)

const File = address => {
    return new URL(`/files/${address}`, import.meta.url);
}

const LinkedAsset = props => {
    console.log(import.meta.url);
    if (props && props.address) {
        return (
            <Button
                address={!props.address.includes("http") ? File(props.address).href: props.address}
                icon={!props.icon || !props.icon.includes("-") ? icons[props.label] : props.icon}
                label={props.label}
                newTab={props.address.includes("http")}
            />
        );
    }
    else {
        return (<></>);
    }
}
export default LinkedAsset;

