import React, { useState } from 'react';
import { SeekBar } from './seekbar';
import { Info } from './info.js';

const Playlist = (props) => {
    /** State for currently playing song */
    const [currentSong, setCurrentSong] = useState();

    /** array of songs passed in from app */
    const songs = props.songs;

    /** Playlist entries array */
    let playlist = [];

    /** click handler for playlist items */
    const click = ({ target }) => {
        console.log (target.id);
        setCurrentSong(target.id);
    }


   
    

    return (
        <div id='playlist'>
            <Info />
            <SeekBar />
            <ol>
                {playlist}
            </ol>
        </div>
    );
}

export { Playlist };