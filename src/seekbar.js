import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer  from 'wavesurfer.js';
import { Controls } from './controls.js'

const SeekBar = (props) => {
    const song = props.song || '';
    const currentSong = useRef();
    const timeInterval = useRef();
    const [playing, setPlaying] = useState(() => false);
    const [time, setTime] = useState(() => { return { current: [0, 0], duration: [0, 0] } });
    const [loading, setLoading] = useState();

    
    /**
     * Watches for a change in the selected song from the playlist
     */
    useEffect(() => {
        /** Unloads current song */
        if (currentSong.current) {
            currentSong.current.destroy();
        }
        /** If a song as been selected, create a new waveform */
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
                    backend: 'MediaElement',
                    // mediaControls: true,
                });

            /** Loads Song */
            currentSong.current.load(require(`${song.src}`));

            /** Monitors Loading Percentage */
            currentSong.current.on('loading', (p) => {
                setLoading(p);
            });

            /** 
             * Once the song is fully loaded calculate the duration and set up time display
             * also if last song was playing, auto play the new song
             */
            currentSong.current.on('ready', () => {
                console.log ('READY');
                const duration = currentSong.current.getDuration();
                setTime({
                    current: [0, 0],
                    duration: [Math.floor(duration / 60), (duration % 60).toFixed(1)]
                });
                if (playing) {
                    currentSong.current.play();
                    startTimer();
                }
            });

            /** if current song finishes and there are more songs in PL go to next song */
            currentSong.current.on("finish", () => nextIt());
        }
    }, [song])


    /**
     * monitors loading state of song 
     * once song is loaded get duration and set current time to 0
     */
    useEffect(() => {
        if (loading == 100) {
            currentSong.current.un('loading');
        }
    }, [loading]);
    

    /** function to start and stop the timer update interval */
    const startTimer = () => {
        timeInterval.current = setInterval(() => {
            console.log ('INTERVAL RUNNING');
            setTime((prev) => {
                const cTime = currentSong.current.getCurrentTime();
                return {
                    ...prev,
                    current: [Math.floor(cTime / 60), (cTime % 60).toFixed(1)]
                };
            })
        }, 50)
    }
    const stopTimer = () => {
        clearInterval(timeInterval.current);
    }


    /** Click handlers for transport buttons */
    const playIt = () => {
        currentSong.current.play();
        setPlaying(true);
        startTimer();
    }
    const stopIt = () => {
        currentSong.current.stop();
        stopTimer();
        setPlaying(false);
    }
    const pauseIt = () => {
        currentSong.current.pause();
        stopTimer();
        setPlaying(false);
    }
    const nextIt = () => {
        if (props.playlistExists) {
            props.next();
            stopTimer();
        }
    }
    const prevIt = () => {
        if (props.playlistExists) {    
            props.prev();
            stopTimer();
        }
    }

    return (
        <>
            {song && <div id='SMPwaveform'></div>}
            {!song || loading < 100 && <div className='SMPtime'>Loading: {loading} %</div>}
            {song && <div className='SMPtime'><h3 id='SMPtimeText'>{`${time.current[0]}:${time.current[1]}`} / {`${time.duration[0]}:${time.duration[1]}`}</h3></div>}
            {song && <Controls 
                play={playIt}
                stop={stopIt}
                pause={pauseIt}
                next={nextIt}
                prev={prevIt}
            />}
        </>
    );
}

export { SeekBar };