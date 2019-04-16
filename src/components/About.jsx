import React, { Component } from "react";
import me from "../img/me.jpg";
import InterestItem from "./InterestItem";

class About extends Component {
    state = {
        bio: [
            "An enthusiastic and responsible man with ambition and creativity. Capable of working as a dedicated team member as well as an independent initiative taker. Proud ",
            <b key="b">Taiwanese</b>,
            "! Currently, a 2nd year Master student in Computer Science at University of San Francisco who is graduating on May 18, 2019."
        ],
        interests: [
            {
                id: 0,
                name: "Distributed System",
                icon: "fas fa-globe-americas",
                color: "yellow"
            },
            {
                id: 1,
                name: "Site Reliability",
                icon: "fas fa-cubes",
                color: "purple"
            },
            {
                id: 2,
                name: "Cybersecurity",
                icon: "fas fa-shield-alt",
                color: "green"
            },
            {
                id: 3,
                name: "Data Visualization",
                icon: "fas fa-chart-area",
                color: "orange"
            },
            { id: 4, name: "Board Games", icon: "fas fa-chess", color: "blue" }
        ]
    };

    render() {
        return (
            <section className="section">
                <div className="container content">
                    <div className="media">
                        <div className="media-left">
                            <p>
                                <img
                                    src={me}
                                    className="profile-photo"
                                    alt="me"
                                />
                            </p>
                        </div>

                        <div className="media-content">
                            <p>
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
                </div>
            </section>
        );
    }
}

export default About;
