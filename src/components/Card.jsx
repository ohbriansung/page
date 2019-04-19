import React from "react";

const createCard = (onShowDetail, item) => {
    return (
        <div key={item.id} className="card" onClick={() => onShowDetail(item)}>
            <div className="card-image">
                <figure className="image is-3by2">
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
    let numInRow = 3;
    let len =
        props.present.length % numInRow === 0
            ? props.present.length / numInRow
            : parseInt(props.present.length / numInRow) + 1;
    let present = [...Array(len).keys()];
    let counts = [...Array(numInRow).keys()];

    const result = (
        <div className="rows">
            {present.map(function(index) {
                // for each row
                const i = index * 3;
                return (
                    <div key={"row" + index} className="row">
                        <div className="columns">
                            {counts.map(function(c) {
                                // for each column
                                return i + c < props.present.length ? (
                                    <div
                                        key={"card" + index + "-" + c}
                                        className="column is-one-third"
                                    >
                                        {createCard(
                                            props.onShowDetail,
                                            props.present[i + c]
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
