import React, { useEffect, useState } from "react";
import WaveSurfer  from 'wavesurfer.js';

import { SeekBar } from './seekbar';
import { Info } from './info.js';


const Playlist = (props) => {
    const libraryPlaylist = props.playlistSongs;
    const [playlist, setPlaylist] = useState(() => []);
    const [currentSong, setCurrentSong] = useState();

    useEffect(() => {
        const newSong = libraryPlaylist[libraryPlaylist.length - 1];
        console.log (newSong);
        if (!playlist.find(song => song.id === newSong.id) && libraryPlaylist.length > 0) {
            console.log ('NEW SONG');
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

    const handleClick = ({ target }) => setCurrentSong(playlist[target.id]);
 
    // /** Event handlers that respond to back and next button clicks from controls component */
    // const playNext = () => currentSong == songs.length - 1 ? setCurrentSong(0) : setCurrentSong(c => c += 1);
    // const playPrev = () => currentSong == 0 ? setCurrentSong(songs.length -  1) : setCurrentSong(c => c -= 1);

    return (
        <div id="SMPplaylistContainer">
            {currentSong && <Info song={currentSong} />}
            <SeekBar song={currentSong} />
            <h1>PLAYLIST HERE</h1>
            {playlist.map((e, i) => <div className='SMPplaylistItem' id={i} onClick={handleClick}>{e.title}</div>)}
        </div>
    );
}


export { Playlist };


