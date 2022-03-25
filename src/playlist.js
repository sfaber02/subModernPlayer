import React, { useEffect, useState } from "react";
import WaveSurfer  from 'wavesurfer.js';

import { SeekBar } from './seekbar';
import { Info } from './info.js';


const Playlist = (props) => {
    const libraryPlaylist = props.playlistSongs;
    const [playlist, setPlaylist] = useState(() => []);

    useEffect(() => {
        const newSong = libraryPlaylist[libraryPlaylist.length - 1];
        console.log (newSong);
        if (!playlist.find(song => song.id === newSong.id) && libraryPlaylist.length > 0) {
            console.log ('NEW SONG');
            const song = 
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

            setPlaylist((prev) => {

                return [
                    ...prev,
                    newSong
                ];
            });
        } else if (libraryPlaylist.length > 0) {
            console.log ('DOUBLE');
        }
    }, [libraryPlaylist]);

    // /** Event handlers that respond to back and next button clicks from controls component */
    // const playNext = () => currentSong == songs.length - 1 ? setCurrentSong(0) : setCurrentSong(c => c += 1);
    // const playPrev = () => currentSong == 0 ? setCurrentSong(songs.length -  1) : setCurrentSong(c => c -= 1);

    return (
        <div id="SMPplaylistContainer">
            <Info />
            <SeekBar />
            <h1>PLAYLIST HERE</h1>
            {props.playlistSongs.map(e => e.title)}
        </div>
    );
}


export { Playlist };


