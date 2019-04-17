import React from "react";
import Card from "./Card";

const Projects = props => {
    return (
        <React.Fragment>
            <div className="columns is-centered">
                <div className="column is-one-third">
                    <input
                        className="input"
                        type="text"
                        placeholder="Search Name or Tag"
                        onChange={event =>
                            props.onSearchChange(event.target.value)
                        }
                    />
                </div>
            </div>
            <br />
            <Card present={props.present} onShowDetail={props.onShowDetail} />
        </React.Fragment>
    );
};

export default Projects;
