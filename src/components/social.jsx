import * as React from "react";

const SocialButton = props => (
<a href={props.address} title={props.label}><i className={"fab social-icon " + props.icon}></i></a>
)

const SocialButtonSet = props => {
    return (
        <ul>
            {props.buttons.map(button => (
                <SocialButton
                    address={button.address}
                    icon={button.icon}
                    label={button.label}
                    key={button.label}
                />
            ))}
        </ul>
    );
};

export default SocialButtonSet;
