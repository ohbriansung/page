import React, { Component } from "react";
import NavBar from "./components/NavBar";

class Header extends Component {
    state = {
        name: "Chien-Yu Sung",
        menu: [
            { id: 0, name: "Home", icon: "fas fa-home" },
            { id: 1, name: "Blog", icon: "far fa-newspaper" },
            {
                id: 2,
                name: "Distributed System",
                icon: "fas fa-globe-americas"
            },
            { id: 3, name: "Cybersecurity", icon: "fas fa-shield-alt" },
            { id: 4, name: "Data Visualization", icon: "fas fa-chart-area" }
        ]
    };

    render() {
        return (
            <section className="hero is-dark is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">{this.state.name}</h1>
                    </div>
                </div>

                <NavBar menu={this.state.menu} />
            </section>
        );
    }
}

export default Header;
