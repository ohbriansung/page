import React, { Component } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Placeholder from "./components/Placeholder";
import Post from "./components/Post";

class Body extends Component {
    state = {
        content: [
            {
                id: 0,
                name: "Ducky Raspberry Pi Zero for Mac",
                img:
                    "https://raw.githubusercontent.com/ohbriansung/usb_rubber_ducky/master/pi_zero_ducky/img/concept.jpg",
                date: "Apr 16, 2019, 8:14 PM PDT",
                tag: "Cybersecurity, Raspberry Pi",
                url:
                    "https://raw.githubusercontent.com/ohbriansung/usb_rubber_ducky/master/pi_zero_ducky/README.md",
                repo:
                    "https://github.com/ohbriansung/usb_rubber_ducky/tree/master/pi_zero_ducky"
            },
            {
                id: 1,
                name: "ChordFS",
                img: "https://i.imgur.com/gW3sp3e.jpg",
                date: "Oct 6, 2018, 11:08 PM PDT",
                tag: "Distributed System, Java",
                url:
                    "https://raw.githubusercontent.com/ohbriansung/ChordFS/master/README.md",
                repo: "https://github.com/ohbriansung/ChordFS"
            },
            {
                id: 2,
                name: "Lytnamo",
                img: "https://i.imgur.com/hboZtow.jpg",
                date: "May 18, 2018, 5:27 PM PDT",
                tag: "Distributed System, Java",
                url:
                    "https://raw.githubusercontent.com/ohbriansung/Lytnamo/master/README.md",
                repo: "https://github.com/ohbriansung/Lytnamo"
            },
            {
                id: 3,
                name: "Grrrr",
                img: "https://i.imgur.com/71GE6Ck.png",
                date: "May 18, 2018, 5:27 PM PDT",
                tag: "Distributed System, Java",
                url:
                    "https://raw.githubusercontent.com/ohbriansung/Grrrr/master/README.md",
                repo: "https://github.com/ohbriansung/Grrrr"
            },
            {
                id: 4,
                name: "hotelApp",
                img: "https://i.imgur.com/BhSRHEz.jpg",
                date: "Dec 15, 2017, 10:01 AM PST",
                tag: "Web Application, Java",
                url:
                    "https://raw.githubusercontent.com/ohbriansung/hotelApp/master/README.md",
                repo: "https://github.com/ohbriansung/hotelApp"
            }
        ]
    };

    components = {
        About: About,
        Home: Home,
        Placeholder: Placeholder
    };

    renderPage = () => {
        // dynamic page loading
        const TagName = this.components[
            this.props.menuItem.page in this.components
                ? this.props.menuItem.page
                : "Placeholder"
        ];

        return (
            <TagName
                page={this.props.menuItem.page}
                content={this.state.content}
                onShowDetail={this.props.onShowDetail}
            />
        );
    };

    renderDetail = () => {
        return <Post item={this.props.detailItem} />;
    };

    render() {
        let body = null;
        if (this.props.menuItem) {
            body = this.renderPage();
        } else {
            body = this.renderDetail();
        }

        return (
            <section className="section">
                <div className="container content">{body}</div>
            </section>
        );
    }
}

export default Body;
