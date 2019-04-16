import React, { Component } from "react";
import NavBar from "./components/NavBar";

class Header extends Component {
    state = {
        name: "Chien-Yu Sung"
    };

    render() {
        return (
            <section className="hero is-dark is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">{this.state.name}</h1>
                    </div>
                </div>

                <NavBar
                    menu={this.props.menu}
                    onChangeTag={this.props.onChangeTag}
                />
            </section>
        );
    }
}

export default Header;
