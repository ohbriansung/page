import React, { Component } from "react";

import About from "./components/About";
import Projects from "./components/Projects";
import Placeholder from "./components/Placeholder";
import Post from "./components/Post";

import projects from "./json/projects.json";

class Body extends Component {
    state = {
        //loading content from projects.json
        content: projects,
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
