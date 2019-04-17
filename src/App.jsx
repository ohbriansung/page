import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import "./App.css";

class App extends Component {
    state = {
        menu: [
            {
                id: 0,
                name: "Projects",
                icon: "fas fa-code",
                current: true,
                page: "Home"
            },
            {
                id: 1,
                name: "Notes",
                icon: "far fa-newspaper",
                current: false,
                page: "Notes"
            },
            {
                id: 2,
                name: "About Me",
                icon: "fas fa-user",
                current: false,
                page: "About"
            }
        ]
    };

    changeTag = menuItem => {
        const currentTag = this.state.menu[menuItem.id].current;

        if (currentTag) {
            return;
        }

        // cloning a menu object, changing the content
        const menu = [...this.state.menu];
        menu.forEach(function(item) {
            if (item.id === menuItem.id) {
                item.current = true;
            } else {
                item.current = false;
            }
        });

        // setting the state to new menu object
        this.setState({ menu });
    };

    render() {
        return (
            <React.Fragment>
                <Header menu={this.state.menu} onChangeTag={this.changeTag} />
                <Body
                    menuItem={this.state.menu.filter(item => item.current)[0]}
                />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
