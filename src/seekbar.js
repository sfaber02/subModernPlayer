import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer  from 'wavesurfer.js';
import { Controls } from './controls.js'

const SeekBar = (props) => {
    const song = props.song || '';
    const currentSong = useRef();
    const timeInterval = useRef();
    const [playing, setPlaying] = useState(() => false);
    const [time, setTime] = useState(() => { return { current: [0, 0], duration: [0, 0] } });
    const [volume, setVolume] = useState(100);
    const [speed, setSpeed] = useState(1);
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
                    splitChannels: true,
                    waveColor: '#AA0000',
                    progressColor: 'purple',
                    cursorColor: '#FFFF55',
                    hideScrollbar: true,
                    // audioRate: .1,
                    height: 90,
                    // normalize: true,
                    responsive: true,
                    barWidth: 0,
                    barRadius: 3,
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
                const duration = currentSong.current.getDuration();
                currentSong.current.setVolume(Number(volume) / 100);
                currentSong.current.setPlaybackRate(Number(speed));
                setTime({
                    current: [`0`, `00.00`],
                    duration: [Math.floor(duration / 60), (duration % 60).toFixed(2) < 10 ? `0${(duration % 60).toFixed(2)}`: (duration % 60).toFixed(2)]
                });
                if (playing) {
                    currentSong.current.play();
                    startTimer();
                }
            });

            /**Seek event listener to update time after seeking if song is paused */
            currentSong.current.on('seek', () => {
                setTime((c) => {
                    const cTime = currentSong.current.getCurrentTime();
                    return {
                        ...c,
                        current: [Math.floor(cTime / 60), (cTime % 60).toFixed(2) < 10 ? `0${(cTime % 60).toFixed(2)}`: (cTime % 60).toFixed(2)] 
                    }
                })
            });

            /** if current song finishes and there are more songs in PL go to next song 
             * maybe add this  
            */
            currentSong.current.on("finish", () => nextIt());
        }
    }, [song])


    useEffect(() => {
        if (currentSong.current) {
            currentSong.current.un("finish");
            currentSong.current.on("finish", () => nextIt());
        }
    }, [props.playlist]);


    /**
     * monitors loading state of song 
     * once song is loaded get duration and set current time to 0
     */
    useEffect(() => {
        if (loading == 100) {
            currentSong.current.un('loading');
        }
    }, [loading]);
    
    /** updates volume state when slider is moved */
    useEffect(() => {
        if (currentSong.current) {
            currentSong.current.setVolume(Number(volume) / 100);
        }
    }, [volume])

    /** updates speed state when slider is moved */
    useEffect(() => {
        if (currentSong.current) {
            currentSong.current.setPlaybackRate(Number(speed));
        }
    }, [speed])

    /** function to start and stop the timer update interval */
    const startTimer = () => {
        timeInterval.current = setInterval(() => {
            // console.log ('INTERVAL RUNNING');
            setTime((prev) => {
                const cTime = currentSong.current.getCurrentTime();
                return {
                    ...prev,
                    current: [Math.floor(cTime / 60), (cTime % 60).toFixed(2) < 10 ? `0${(cTime % 60).toFixed(2)}`: (cTime % 60).toFixed(2)]
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
        console.log ('NEXT');
        console.log (props.playlistExists);
        // if (props.playlistExists) {
            props.next();
            stopTimer();
        // }
    }
    const prevIt = () => {
        // if (props.playlistExists) {    
            props.prev();
            stopTimer();
        // }
    }

    /** Handles volume slider */
    const changeVolume = (e) => setVolume(e.target.value);
    /** Handles speed slider */
    const changeSpeed = (e) => setSpeed(e.target.value);
    /** Handles speed reset button */
    const resetSpeed = () => setSpeed(1);


    return (
        <>
            <div id='SMPwaveform'></div>
            
            <div id='SMPcontrols'>
                <div id="SMPvolumeDiv">
                    <label id="SMPvolumeText">Volume: {volume}</label>
                    <input type="range" id="SMPvolume" name="volume" min="0" max="100" value={volume} onChange={changeVolume}></input>
                </div>
                {loading < 100 ? 
                    <div className='SMPtimeText'>Loading: {loading} %</div> :
                    <h3 className='SMPtimeText'>{`${time.current[0]}:${time.current[1]}`} / {`${time.duration[0]}:${time.duration[1]}`}</h3>
                }
                <div id="SMPspeedDiv">
                    <label id="SMPspeedText">Speed {speed}</label><button id="SMPspeedReset" onClick={resetSpeed}>Reset</button>
                    <input type="range" id="SMPspeed" name="speed" min=".2" max="2" step=".05" value={speed} onChange={changeSpeed}></input>
                </div>
                <Controls 
                    play={playIt}
                    stop={stopIt}
                    pause={pauseIt}
                    next={nextIt}
                    prev={prevIt}
                />
            </div>
        </>
    );
}

export { SeekBar };