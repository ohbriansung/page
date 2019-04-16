import React from "react";

const FooterItem = props => {
    return (
        <a href={props.item.link}>
            <span className={props.item.icon} />
            <span>{props.item.name}</span>
        </a>
    );
};

export default FooterItem;
