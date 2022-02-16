import React, { Component } from "react";
import FooterItem from "./components/FooterItem";
import linkJSON from "./json/footer.json";

class Footer extends Component {
    state = {
        links: linkJSON,
        mobile: false
    };

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize = () => {
        const mobile = window.innerWidth <= 760;

        if (mobile !== this.state.mobile) {
            this.setState({ mobile });
        }
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
                    <p className="footer-note">
                        Copyright (c) 2019-2022 Chien-Yu Sung
                        {this.state.mobile ? <br /> : " | "}
                        Powered by ReactJS and GitHub Pages
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;
