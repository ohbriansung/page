import React from "react";
import Card from "./Card";

const Home = props => {
    const content = props.content;

    return <Card content={content} onShowDetail={props.onShowDetail} />;
};

export default Home;
