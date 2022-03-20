import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer  from 'wavesurfer.js';
import { Controls } from './controls.js'

const SeekBar = (props) => {
    console.log (props.song);
    const song = props.song || '';
    const currentSong = useRef();
    const [playing, setPlaying] = useState(() => false);
    /**
     * Watches for a change in the selected song from the playlist
     * unloads current song and loads new song
     */
    useEffect(() => {
        if (currentSong.current) {
            currentSong.current.destroy();
        }
        if (song) {
            currentSong.current =
                WaveSurfer.create({
                    container: '#SMPwaveform',
                    waveColor: '#AA0000',
                    progressColor: 'purple',
                    cursorColor: '#FFFF55',
                    // audioRate: .1,
                    height: 200,
                    // normalize: true,
                    responsive: true,
                    barWidth: 5,
                    barRadius: 5,
                    cursorWidth: 3,
                    // backend: 'MediaElement',
                    // mediaControls: true,
                });
            currentSong.current.load(require(`${song.src}`));
            if (playing) {
                currentSong.current.on('ready', () => {
                    currentSong.current.play();
                });
            }
        }
    }, [song])
    
    const playIt = () => {
        currentSong.current.play();
        setPlaying(true);
    }
    const stopIt = () => {
        currentSong.current.stop();
        setPlaying(false);
    }
    const pauseIt = () => {
        currentSong.current.pause();
        setPlaying(false);
    }
    const nextIt = () => props.next();
    const prevIt = () => props.prev();

    return (
        <>
            {song && <div id='SMPwaveform'></div>}
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