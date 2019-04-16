import React, { Component } from "react";
import About from "./components/About";
import Placeholder from "./components/Placeholder";

class Body extends Component {
    components = {
        About: About,
        Placeholder: Placeholder
    };

    render() {
        const TagName = this.components[
            this.props.menuItem.page || "Placeholder"
        ];
        return <TagName />;
    }
}

export default Body;
