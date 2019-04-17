import React, { Component } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Placeholder from "./components/Placeholder";
import Post from "./components/Post";

class Body extends Component {
    state = {
        content: [
            {
                id: 201904142014,
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
                id: 201904101431,
                name: "San Francisco Tree Maintenance",
                img:
                    "https://raw.githubusercontent.com/ohbriansung/data_visualization_hw3/gh-pages/img/screenshot.png",
                date: "Apr 10, 2019, 2:31 PM PDT",
                tag: "Data Visualization, D3.js",
                url:
                    "https://raw.githubusercontent.com/ohbriansung/data_visualization_hw3/gh-pages/README.md",
                repo: "https://github.com/ohbriansung/data_visualization_hw3"
            },
            {
                id: 201903190835,
                name: "SF Fire Department Calls for Service",
                img:
                    "https://raw.githubusercontent.com/ohbriansung/data_visualization_mid/gh-pages/img/demo.png",
                date: "Mar 19, 2019, 8:35 AM PDT",
                tag: "Data Visualization, D3.js",
                url:
                    "https://raw.githubusercontent.com/ohbriansung/data_visualization_mid/gh-pages/README.md",
                repo: "https://github.com/ohbriansung/data_visualization_mid"
            },
            {
                id: 201810062308,
                name: "ChordFS",
                img: "https://i.imgur.com/gW3sp3e.jpg",
                date: "Oct 6, 2018, 11:08 PM PDT",
                tag: "Distributed System, Java",
                url:
                    "https://raw.githubusercontent.com/ohbriansung/ChordFS/master/README.md",
                repo: "https://github.com/ohbriansung/ChordFS"
            },
            {
                id: 201803181727,
                name: "Lytnamo",
                img: "https://i.imgur.com/hboZtow.jpg",
                date: "May 18, 2018, 5:27 PM PDT",
                tag: "Distributed System, Java",
                url:
                    "https://raw.githubusercontent.com/ohbriansung/Lytnamo/master/README.md",
                repo: "https://github.com/ohbriansung/Lytnamo"
            },
            {
                id: 201802222259,
                name: "Grrrr",
                img:
                    "https://raw.githubusercontent.com/ohbriansung/Grrrr/master/img/demo.png",
                date: "Feb 22, 2018, 10:59 PM PST",
                tag: "Distributed System, Java",
                url:
                    "https://raw.githubusercontent.com/ohbriansung/Grrrr/master/README.md",
                repo: "https://github.com/ohbriansung/Grrrr"
            },
            {
                id: 201712151001,
                name: "hotelApp",
                img: "https://i.imgur.com/BhSRHEz.jpg",
                date: "Dec 15, 2017, 10:01 AM PST",
                tag: "Web Application, Java",
                url:
                    "https://raw.githubusercontent.com/ohbriansung/hotelApp/master/README.md",
                repo: "https://github.com/ohbriansung/hotelApp"
            }
        ],
        present: []
    };

    components = {
        About: About,
        Projects: Projects,
        Placeholder: Placeholder
    };

    componentWillMount = () => {
        // cloning the content into present before rendering
        this.setState({ present: [...this.state.content] });
    };

    searchChange = value => {
        value = value.toLowerCase();

        // filtering the content and cloning to present
        const content = [
            ...this.state.content.filter(
                item =>
                    item.name.toLowerCase().indexOf(value) >= 0 ||
                    item.tag.toLowerCase().indexOf(value) >= 0
            )
        ];

        this.setState({ present: content });
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
                present={this.state.present}
                onShowDetail={this.props.onShowDetail}
                onSearchChange={this.searchChange}
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
