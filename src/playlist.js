import React, { useState } from 'react';
import { SeekBar } from './seekbar';
import { Info } from './info.js';

const Playlist = (props) => {
    /** State for currently playing song */
    const [currentSong, setCurrentSong] = useState();

    /** array of songs passed in from app */
    const songs = props.songs;

    /** Playlist entries array */
    let pl = [];

    /** click handler for playlist items */
    const click = ({ target }) => {
        console.log (target.id);
        setCurrentSong(target.id);
    }


    for (let song = 0; song < songs.length; song++) {
        pl.push(<li id={song} onClick={click}>{songs[song]._src}</li>);
    }
    

    return (
        <div id='playlist'>
            <Info song={songs[currentSong]}/>
            <SeekBar song={songs[currentSong]} />
            <ol>
                {pl}
            </ol>
        </div>
    );
}

export { Playlist };