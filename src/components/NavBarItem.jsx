import React from "react";

const NavBarItem = props => {
    const className = "navbar-item" + (props.item.current ? " is-active" : "");

    return (
        // eslint-disable-next-line
        <a
            className={className}
            onClick={() => props.onChangeTag(props.item)}
            data-target="navbar-brand"
        >
            <span className="icon">
                <i className={props.item.icon} />
            </span>
            <span> </span>
            <span>{props.item.name}</span>
        </a>
    );
};

export default NavBarItem;
