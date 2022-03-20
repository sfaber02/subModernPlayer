import React from 'react';

const Info = (props) => {
    const song = props.song || 'Info';

    return (
        <div id="info">
            <h1>Info</h1>
        </div>
    );
}

export { Info };