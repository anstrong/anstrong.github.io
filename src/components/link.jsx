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

function linkFile(file) {
    return new URL(file, import.meta.url).href
}

const LinkedAsset = props => {
    if (props && props.address) {
        return (
            <Button
                address={!props.address.includes("http") ? linkFile(`/files/${props.address}`): props.address}
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

