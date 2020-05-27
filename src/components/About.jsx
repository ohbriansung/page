import React, { Component } from "react";
import me from "../img/me.jpg";
import InterestItem from "./InterestItem";
import about from "../json/about.json";

class About extends Component {
    state = {
        bio: [
            "An enthusiastic and responsible man with ambition and creativity. Capable of working as a dedicated team member as well as an independent initiative taker. Proud ",
            <b key="b">Taiwanese</b>,
            "! Graduated from University of San Francisco, Master in Computer Science. ",
            "Currently working at Amazon Web Services as a Software Engineer. ",
            "Former Software Engineer at Fortinet.",
            <br />,
            <br />,
            "I like to break things because I want to know how they work!"
        ],
        interests: about.interests,
        skills: about.skills,
        knowledge: about.knowledge,
        levels: about.levels
    };

    iterator = (items, name) => {
        const levels = this.state.levels;

        const result = items.map(function(item, index) {
            return (
                <span
                    key={name + "-" + index}
                    className={
                        levels.filter(l => l.level === item.level)[0].style
                    }
                >
                    {item.name + (index === items.length - 1 ? "" : ", ")}
                </span>
            );
        });

        return result;
    };

    render() {
        return (
            <React.Fragment>
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

                <hr className="container" />

                <h3 className="subtitle">Skills and Knowledge</h3>

                <p>
                    <i className="fas fa-atlas" />
                    &nbsp;
                    {this.iterator(this.state.skills, "skill")}
                </p>

                <p>
                    <i className="fas fa-check-square" />
                    &nbsp;
                    {this.iterator(this.state.knowledge, "knowledge")}
                </p>

                {this.state.levels.map(function(l) {
                    return [
                        <React.Fragment key={"level-" + l.level}>
                            <i className={"fas fa-square " + l.style} />
                            &nbsp;
                            {l.name}
                            <br />
                        </React.Fragment>
                    ];
                })}
            </React.Fragment>
        );
    }
}

export default About;
