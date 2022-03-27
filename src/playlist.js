import React, { useEffect, useState } from "react";
import WaveSurfer  from 'wavesurfer.js';
import { v4 as uuidv4 } from 'uuid';

import { SeekBar } from './seekbar';
import { Info } from './info.js';


const Playlist = (props) => {
    const libraryPlaylist = props.playlistSongs;
    const nowSong = props.nowSong;
    const [playlist, setPlaylist] = useState(() => []);
    const [currentSong, setCurrentSong] = useState();


    /** watches for changes in nowSong to play a selected library song right away */
    useEffect(() => {
        console.log (nowSong);
        if (nowSong) {
            setCurrentSong(nowSong);
            props.clearNowSong();
        }
    }, [nowSong]);

    /** watches for changes in the playlist to populate a new playlist */
    useEffect(() => {
        setPlaylist(libraryPlaylist);
    }, [libraryPlaylist]);

    /** handles click on playlist item to change current song */
    const handleClick = ({ target }) => {
        setCurrentSong(playlist[target.id]);
    }

    /** handles click on playlist remove button */
    const handleRemoveFromPlaylistClick = ({ target }) => {
        console.log (target.id);
        props.removeFromPlaylist(playlist[target.id])
    }
 
    // /** Event handlers that respond to back and next button clicks from controls component */
    const playNext = () => {
        const plIndex = playlist.indexOf(currentSong);
        plIndex === playlist.length - 1 ? setCurrentSong(playlist[0]) : setCurrentSong(c => playlist[plIndex + 1]);
    }
    const playPrev = () => {
        const plIndex = playlist.indexOf(currentSong);
        plIndex == 0 ? setCurrentSong(playlist[playlist.length -  1]) : setCurrentSong(playlist[plIndex - 1]);
    }

    return (
        <>
            {currentSong && <Info song={currentSong} />}
            <SeekBar song={currentSong} prev={playPrev} next={playNext} playlistExists={playlist.length > 0 ? true : false} />
            {playlist.length > 0 && 
                <div id="SMPplaylistContainer">
                    <h1>PLAYLIST HERE</h1>
                    {playlist.map((e, i) => {
                        return (
                            <div className='SMPplaylistItem' key={uuidv4()}>
                                <p className='SMPplaylistText' id={i} key={uuidv4()} onClick={handleClick}>{e.title}</p>
                                <button className="SMPplaylistButton" id={i} key={uuidv4()} onClick={handleRemoveFromPlaylistClick}>-</button>
                            </div>
                        );
                    })}
                </div>
            }
        </>
    );
}


export { Playlist };


