import React from 'react';

const Info = (props) => {
    const song = props.song || 'Info';

    return (
        <div id="SMPinfo">
            <h1 className='SMPinfoTextTitle'>{song.title}</h1>
            <h1 className='SMPinfoTextDate'>{song.date}</h1>
            <h1 className='SMPinfoTextNotes'>{song.notes}</h1>
        </div>
    );
}

export { Info };