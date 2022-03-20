import React, { useEffect } from 'react';
import WaveSurfer  from 'wavesurfer.js';
import { Controls } from './controls.js'

const SeekBar = (props) => {
    const song = props.song || '';
    console.log (song);
    
    let wavesurfer;

    useEffect(() => {
        wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'violet',
            progressColor: 'purple'
        });
        wavesurfer.load(require('./audio-files/VitaminC.mp3'));
    }, [])

    
    const playIt = () => wavesurfer.play();
    const stopIt = () => wavesurfer.stop();
    const pauseIt = () => wavesurfer.pause();
    const nextIt = () => {};
    const prevIt = () => {};

    // if (song) {
    //     stopIt();
    //     playIt();
    // }

    return (
        <>
            <div id='waveform'></div>
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