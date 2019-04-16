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
                name: "Home",
                icon: "far fa-home",
                current: true,
                page: "Placeholder"
            },
            {
                id: 1,
                name: "Blog",
                icon: "far fa-newspaper",
                current: false,
                page: "Placeholder"
            },
            {
                id: 2,
                name: "Computer Science",
                icon: "fas fa-robot",
                current: false,
                page: "Placeholder"
            },
            {
                id: 3,
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
