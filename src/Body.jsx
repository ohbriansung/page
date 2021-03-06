import React, { Component } from "react";

import About from "./components/About";
import Page from "./components/Page";
import Placeholder from "./components/Placeholder";
import Post from "./components/Post";

import contents from "./json/contents.json";

class Body extends Component {
    state = {
        //loading content from contents.json
        content: contents,
        present: [],
        prePageName: "",
        preSearch: ""
    };

    components = {
        Page: Page,
        About: About,
        Placeholder: Placeholder
    };

    switchContentSource = name => {
        if (this.props.menuItem.page === "Page") {
            // cloning the content into present before rendering
            this.setState({
                present: [...this.state.content[name]]
            });
        }
    };

    searchChange = value => {
        if (!this.props.menuItem) {
            return;
        }

        value = value.toLowerCase();

        // filtering the content and cloning to present
        const present = [
            ...this.state.content[
                this.props.menuItem.name.toLowerCase()
            ].filter(
                item =>
                    item.name.toLowerCase().indexOf(value) >= 0 ||
                    item.tag.toLowerCase().indexOf(value) >= 0
            )
        ];

        this.setState({ present, preSearch: value });
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
        const preSearch = document.getElementById("searchBar").value;

        if (preSearch !== "") {
            this.searchChange({ preSearch });
        }
        return (
            <Post
                item={this.props.detailItem}
                onGoBack={this.props.onGoBack}
                prePageName={this.state.prePageName}
            />
        );
    };

    componentWillMount = () => {
        // this happens when the page first load
        if (this.props.menuItem) {
            const name = this.props.menuItem.name.toLowerCase();
            this.setState({ prePageName: name });
            this.switchContentSource(name);
        }
    };

    componentDidUpdate = () => {
        if (this.props.menuItem && this.props.menuItem.page === "Page") {
            const name = this.props.menuItem.name.toLowerCase();

            // only update the content when page name change
            if (this.state.prePageName !== name) {
                this.setState({ prePageName: name });
                this.switchContentSource(name);

                // clearing the search value
                document.getElementById("searchBar").value = "";
                this.setState({ preSearch: "" });
            } else {
                // if user goes into detail page and goes back to same page before,
                // the search value would be preserve. Not used for changing pages.
                if (this.state.preSearch !== "") {
                    document.getElementById(
                        "searchBar"
                    ).value = this.state.preSearch;
                }
            }
        }
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
