import React, { Component } from "react";
import Card from "./Card";

class Home extends Component {
    render() {
        const content = this.props.content;

        return <Card content={content} />;
    }
}

export default Home;
