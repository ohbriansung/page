import React, { Component } from "react";
import me from "../img/me.jpg";
import InterestItem from "./InterestItem";
import about from "../json/about.json";

class About extends Component {
    state = {
        bio: [
            "An enthusiastic and responsible man with ambition and creativity. Capable of working as a dedicated team member as well as an independent initiative taker. Proud ",
            <b key="b">Taiwanese</b>,
            "! Currently, a 2nd year Master student in Computer Science at University of San Francisco who is graduating on May 18, 2019."
        ],
        interests: about
    };

    render() {
        return (
            <div className="columns">
                <div className="column is-one-third">
                    <p>
                        <img src={me} className="profile-photo" alt="me" />
                    </p>
                </div>

                <div className="column">
                    <p className="has-text-justified">
                        {this.state.bio}
                        <br />
                        <br />
                        [ Interests ]
                        <br />
                        {this.state.interests.map(item => [
                            <InterestItem key={item.id} item={item} />,
                            <br key={"br" + item.id} />
                        ])}
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
