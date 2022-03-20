import React from 'react';

const Info = (props) => {
    const song = props.song || 'Info';

    return (
        <div id="info">
            <h1>{song._src}</h1>
        </div>
    );
}

export { Info };