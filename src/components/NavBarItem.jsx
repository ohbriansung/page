import React from "react";

const NavBarItem = props => {
    return (
        <a className="navbar-item" href="">
            <span className="icon">
                <i className={props.item.icon} />
            </span>
            <span>{props.item.name}</span>
        </a>
    );
};

export default NavBarItem;
