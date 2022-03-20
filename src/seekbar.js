import React, { useEffect, useRef } from 'react';
import WaveSurfer  from 'wavesurfer.js';
import { Controls } from './controls.js'

const SeekBar = (props) => {
    const song = props.song || '';
    const currentSong = useRef();

    /**
     * Watches for a change in the selected song from the playlist
     * unloads current song and loads new song
     * AUTOPLAY NOT WORKING
     */
    useEffect(() => {
        if (currentSong.current) currentSong.current.destroy();
        if (song) {
            currentSong.current =
                WaveSurfer.create({
                    container: '#SMPwaveform',
                    waveColor: 'violet',
                    progressColor: 'purple',
                    // audioRate: .8,
                    height: 500,
                    // normalize: true,
                    responsive: true,
                    barWidth: 5,
                    barRadius: 5,
                    cursorWidth: 3,
                    // backend: 'MediaElement',
                    // mediaControls: true,

                });
            currentSong.current.load(require(`${song}`));
        }
    }, [song])

    
    const playIt = () => currentSong.current.play();
    const stopIt = () => currentSong.current.stop();
    const pauseIt = () => currentSong.current.pause();
    const nextIt = () => {};
    const prevIt = () => {};

    return (
        <>
            <div id='SMPwaveform'></div>
            <h1>{song}</h1>
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