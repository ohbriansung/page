import React, { Component } from "react";
import me from "./img/me.jpg";

class Body extends Component {
    state = {};
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
                                An enthusiastic and responsible man with
                                ambition and creativity. Capable of working as a
                                dedicated team member as well as an independent
                                initiative taker. Proud <b>Taiwanese</b>!
                                Currently, a 2nd year Master student in Computer
                                Science at University of San Francisco who is
                                graduating on May 18, 2019.
                                <br />
                                <br />
                                [ Interests ]<br />
                                <a className="interest theme-yellow">
                                    <i className="fas fa-globe-americas" />{" "}
                                    Distributed System
                                </a>
                                <br />
                                <a className="interest theme-purple">
                                    <i className="fas fa-cubes" /> Site
                                    Reliability
                                </a>
                                <br />
                                <a className="interest theme-green">
                                    <i className="fas fa-shield-alt" />{" "}
                                    Cybersecurity
                                </a>
                                <br />
                                <a className="interest theme-orange">
                                    <i className="fas fa-chart-pie" /> Data
                                    Visualization
                                </a>
                                <br />
                                <a className="interest theme-blue">
                                    <i className="fas fa-chess" /> Board Games
                                </a>
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Body;
