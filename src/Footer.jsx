import React, { Component } from "react";
import FooterItem from "./components/FooterItem";

class Footer extends Component {
    state = {
        links: [
            {
                id: 0,
                name: "GitHub",
                icon: "fab fa-github",
                link: "https://github.com/ohbriansung"
            },
            {
                id: 1,
                name: "LinkedIn",
                icon: "fab fa-linkedin",
                link: "https://www.linkedin.com/in/ohbriansung"
            },
            {
                id: 2,
                name: "Contact",
                icon: "fas fa-envelope",
                link: "mailto:s254901282002@gmail.com"
            }
        ]
    };

    render() {
        return (
            <footer className="footer hero is-dark">
                <div className="content has-text-centered">
                    <small>
                        <a href="#top">
                            <span className="fas fa-arrow-up" />
                            <span>Back to Top</span>
                        </a>
                    </small>
                    <br />
                    <br />
                    {this.state.links.map(function(item, index) {
                        const dot = index === 0 ? "" : " • ";
                        return [dot, <FooterItem key={item.id} item={item} />];
                    })}
                </div>
            </footer>
        );
    }
}

export default Footer;
