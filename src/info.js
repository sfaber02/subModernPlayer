import React from 'react';

const Info = (props) => {
    const song = props.song || 'Info';

    return (
        <div id="SMPinfo">
            <h1 className='SMPinfoText'>{song.title}</h1>
            <h1 className='SMPinfoText'>{song.date}</h1>
            <h1 className='SMPinfoText'>{song.notes}</h1>
        </div>
    );
}

export { Info };