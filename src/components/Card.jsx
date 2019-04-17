import React from "react";

const createCard = (func, item) => {
    return (
        <div key={item.id} className="card" onClick={() => func(item.url)}>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={item.img} alt={item.name} />
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    <span className="subtitle">{item.name}</span>
                    <br />
                    {/* eslint-disable-next-line */}
                    <span className="tag">{item.tag}</span>
                    <br />
                    <div className="has-text-right">
                        <time>{item.date}</time>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Card = props => {
    let max = 3;
    let len =
        props.content.length % max === 0
            ? props.content.length / max
            : parseInt(props.content.length / max) + 1;
    let content = [...Array(len).keys()];
    let counts = [...Array(max).keys()];

    const result = (
        <div className="rows">
            {content.map(function(index) {
                // for each row
                const i = index * 3;
                return (
                    <div key={"row" + index} className="row">
                        <div className="columns">
                            {counts.map(function(c) {
                                // for each column
                                return i + c < props.content.length ? (
                                    <div
                                        key={"card" + index + "-" + c}
                                        className="column is-one-third"
                                    >
                                        {createCard(
                                            props.onShowDetail,
                                            props.content[i]
                                        )}
                                    </div>
                                ) : (
                                    ""
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );

    return result;
};

export default Card;
