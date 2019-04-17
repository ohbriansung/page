import React, { Component } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Placeholder from "./components/Placeholder";

class Body extends Component {
    state = {
        content: [
            {
                id: 0,
                name: "Ducky Raspberry Pi Zero for Mac",
                img:
                    "https://raw.githubusercontent.com/ohbriansung/usb_rubber_ducky/master/pi_zero_ducky/img/concept.jpg",
                date: "Apr 16, 2019, 8:14 PM PDT",
                tag: "Cybersecurity",
                page: "Computer Science",
                url:
                    "https://raw.githubusercontent.com/ohbriansung/usb_rubber_ducky/master/pi_zero_ducky/README.md"
            }
        ]
    };

    components = {
        About: About,
        Home: Home,
        Placeholder: Placeholder
    };

    render() {
        // dynamic page loading
        const TagName = this.components[
            this.props.menuItem.page in this.components
                ? this.props.menuItem.page
                : "Placeholder"
        ];

        return (
            <section className="section">
                <div className="container content">
                    <TagName
                        page={this.props.menuItem.page}
                        content={this.state.content}
                    />
                </div>
            </section>
        );
    }
}

export default Body;
