import React from "react";
import NavBarItem from "./NavBarItem";

const NavBar = props => {
    return (
        <div className="hero-foot">
            <div className="container">
                <nav
                    className="navbar is-transparent"
                    role="navigation"
                    aria-label="main navigation"
                >
                    <div className="navbar-brand">
                        <a
                            role="button"
                            className="navbar-burger burger"
                            data-target="main-navbar"
                            aria-label="menu"
                            aria-expanded="false"
                        >
                            <span aria-hidden="true" />
                        </a>
                    </div>

                    <div id="main-navbar" className="navbar-menu">
                        {props.menu.map(item => (
                            <NavBarItem key={item.id} item={item} />
                        ))}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
