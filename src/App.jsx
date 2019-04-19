import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import "./App.css";

import menuJSON from "./json/menu.json";

class App extends Component {
    state = {
        // loading menu from menu.json
        menu: menuJSON,
        detail: {}
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

        // clearing detail
        this.setState({ detail: {} });
    };

    showDetail = detail => {
        // cloning a menu object, unselecting all page
        const menu = [...this.state.menu];
        menu.forEach(function(item) {
            item.current = false;
        });

        // setting the state to new menu object, inserting detail
        this.setState({ menu, detail });
    };

    goBack = prePageName => {
        // cloning a menu object, selecting the previous page
        const menu = [...this.state.menu];
        menu.forEach(function(item) {
            if (item.name.toLowerCase() === prePageName) {
                item.current = true;
            }
        });

        // setting the state to new menu object, empty the detail
        this.setState({ menu, detail: {} });
    };

    render() {
        return (
            <React.Fragment>
                <Header menu={this.state.menu} onChangeTag={this.changeTag} />
                <Body
                    menuItem={this.state.menu.filter(item => item.current)[0]}
                    detailItem={this.state.detail}
                    onShowDetail={this.showDetail}
                    onGoBack={this.goBack}
                />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
