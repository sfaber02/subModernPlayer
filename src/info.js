import React from 'react';

const Info = (props) => {
    const song = props.song || 'Info';

    return (
        <div id="SMPinfo">
            <h1>{song}</h1>
        </div>
    );
}

export { Info };