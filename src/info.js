import React from 'react';

const Info = (props) => {
    const song = props.song || 'Info';

    return (
        <div id="SMPinfo">
            <h1>{song.title}</h1>
            <h1>{song.notes}</h1>
            <h1>{song.date}</h1>
            
        </div>
    );
}

export { Info };