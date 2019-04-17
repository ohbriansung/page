import React, { Component } from "react";
import axios from "axios";
import marked from "marked";

class Post extends Component {
    state = {
        response: ""
    };

    componentDidMount() {
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
        const markdown = marked(this.state.response);
        return (
            <div
                className="post"
                dangerouslySetInnerHTML={{ __html: markdown }}
            />
        );
    }
}

export default Post;
