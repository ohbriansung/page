import React, { Component } from "react";
import Card from "./Card";

class Home extends Component {
    showDetail = item => {
        console.log(item);
    };

    render() {
        const content = this.props.content;

        return <Card content={content} onShowDetail={this.showDetail} />;
    }
}

export default Home;
