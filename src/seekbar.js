import { Howl } from 'howler';
import React, { useEffect } from 'react';
import WaveSurfer  from 'wavesurfer.js';
import { Controls } from './controls.js'

const SeekBar = (props) => {
    const song = props.song || '';
    console.log (song);
    
    

    const wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple'
    });

    wavesurfer.on('ready', function () {
        wavesurfer.play();
    });

    wavesurfer.load(require('./audio-files/01 Damaged Bug – Rubber Lips.mp3'));

    const playIt = () => song.play();
    const stopIt = () => song.stop();
    const pauseIt = () => song.pause();
    const nextIt = () => {};
    const prevIt = () => {};

    // if (song) {
    //     stopIt();
    //     playIt();
    // }

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