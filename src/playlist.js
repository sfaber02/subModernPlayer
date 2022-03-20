import React, { useState } from 'react';
import { SeekBar } from './seekbar';
import { Info } from './info.js';

const Playlist = (props) => {
    /** State for currently playing song */
    const [currentSong, setCurrentSong] = useState();

    /** array of songs passed in from app */
    const songs = props.songs;

    /** click handler for playlist items */
    const click = ({ target }) => {
        setCurrentSong(target.id);
    }


   
    

    return (
        <div id='SMPplaylist'>
            <Info song={songs[currentSong]} />
            <SeekBar song={songs[currentSong]} />
            <ol>
                {songs.map((song, i) => <li id={i} onClick={click}>{song}</li>)}
            </ol>
        </div>
    );
}

export { Playlist };