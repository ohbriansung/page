import React from "react";

const InterestItem = props => {
    const className = "interest theme-" + props.item.color;

    return (
        // eslint-disable-next-line
        <a className={className}>
            <i className={props.item.icon} />
            {" " + props.item.name}
        </a>
    );
};

export default InterestItem;
