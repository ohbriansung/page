import React, { Component } from "react";
import axios from "axios";
import marked from "marked";

class Post extends Component {
    state = {
        response: ""
    };

    styles = {
        button: "button is-fullwidth is-dark is-inverted is-outlined"
    };

    componentDidMount() {
        // fetching the raw text from the url
        axios.get(this.props.item.url).then(res => {
            this.setState({ response: res.data });
        });
    }

    componentDidUpdate() {
        const elements = Array.prototype.slice.call(
            document.getElementsByTagName("a"),
            0
        );

        elements.forEach(function(el) {
            const link = el.href;

            if (link.startsWith("http") && link.indexOf("#") === -1) {
                el.setAttribute("target", "_blank");
                el.setAttribute("rel", "noopener noreferrer");
            }
        });
    }

    render() {
        // using marked library to render markdown format into html
        const markdown = marked(this.state.response);
        return (
            <React.Fragment>
                <div className="level-right">
                    <div className="level-item">
                        <a
                            className={this.styles.button}
                            href={this.props.item.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github-alt" />
                            &nbsp;GitHub
                        </a>
                        &nbsp;
                        {/* eslint-disable-next-line */}
                        <a
                            className={this.styles.button}
                            onClick={() =>
                                this.props.onGoBack(this.props.prePageName)
                            }
                        >
                            <i className="fas fa-arrow-circle-left" />
                            &nbsp;GoBack
                        </a>
                    </div>
                </div>
                <br />
                <div
                    className="post"
                    dangerouslySetInnerHTML={{ __html: markdown }}
                />
            </React.Fragment>
        );
    }
}

export default Post;
