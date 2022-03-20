import { Howl } from 'howler';
import React from 'react';
import { Controls } from './controls.js'

const SeekBar = (props) => {
    const song = props.song || '';
    console.log (song);
    

    const playIt = () => song.play();
    const stopIt = () => song.stop();
    const pauseIt = () => song.pause();
    const nextIt = () => {};
    const prevIt = () => {};

    if (song) {
        stopIt();
        playIt();
    }

    return (
        <>
            <h1>{song._src}</h1>
            <Controls 
                play={playIt}
                stop={stopIt}
                pause={pauseIt}
                next={nextIt}
                prev={prevIt}
            />
            
        </>
    );
}

export { SeekBar };