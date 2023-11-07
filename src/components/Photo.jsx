import React from 'react';

const Photo = (props) => {

    return (
        <li>
            <img src={props.src} alt={props.title} />
        </li>
    )
};

export default Photo;