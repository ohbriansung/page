import React from "react";

const FooterItem = props => {
    return (
        <a
            href={props.item.link}
            target={props.item.link.startsWith("mailto") ? "" : "_blank"}
            rel="noopener noreferrer"
        >
            <span className={props.item.icon} />
            <span>{" " + props.item.name}</span>
        </a>
    );
};

export default FooterItem;
