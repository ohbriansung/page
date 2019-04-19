import React, { Component } from "react";
import FooterItem from "./components/FooterItem";
import linkJSON from "./json/footer.json";

class Footer extends Component {
    state = {
        links: linkJSON
    };

    render() {
        return (
            <footer className="footer hero is-dark">
                <div className="content has-text-centered">
                    <small>
                        <a href="#top">
                            <span className="fas fa-arrow-up" />
                            <span> Back to Top</span>
                        </a>
                    </small>
                    <br />
                    {this.state.links.map(function(item, index) {
                        const dot = index === 0 ? "" : " • ";
                        return [dot, <FooterItem key={item.id} item={item} />];
                    })}
                    <br />
                    <br />
                    <p className="footer-note">
                        Powered by ReactJS and GitHub Pages
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;
