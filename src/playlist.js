import React, { useState, useEffect } from 'react';
import { SeekBar } from './seekbar';
import { Info } from './info.js';

const Playlist = (props) => {
    /** State for currently playing song */
    const [currentSong, setCurrentSong] = useState();

    /** array of songs passed in from app */
    const songs = props.songs;

    /** click handler for playlist items */
    const click = ({ target }) => setCurrentSong(Number(target.id));
    
    /** Event handlers that respons to back and next button clicks from controls component */
    const playNext = () => currentSong == songs.length - 1 ? setCurrentSong(0) : setCurrentSong(c => c += 1);
    const playPrev = () => currentSong == 0 ? setCurrentSong(songs.length -  1) : setCurrentSong(c => c -= 1);
    
    
    return (
        <div id='SMPplaylist'>
            <Info song={songs[currentSong]} />
            <SeekBar song={songs[currentSong]} next={playNext} prev={playPrev} />
            <ol>
                {songs.map((song, i) => <li id={i} onClick={click}>{song.title}</li>)}
            </ol>
        </div>
    );
}

export { Playlist };