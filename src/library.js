import React, { useState, useEffect } from 'react';

import { Playlist } from './playlist.js'


const Library = (props) => {
    /** State for currently playing song */
    const [playlistSongs, setPlaylistSongs] = useState(() => []);
    const [nowSong, setNowSong] = useState();
    const [library, setLibrary] = useState();

    /** array of songs passed in from app */
    const songs = props.songs;

    /** click handler playing a song right away */
    const handleSongClick = ({ target }) => setNowSong(songs[target.id]);

    /** click handler for adding a song to the playlist */
    const handleAddtoPlaylist = ({ target }) => setPlaylistSongs(p => [...p, songs[target.id]]);

    /** watches songs from server and playlist to decide what songs to generate into library view */
    useEffect(() => {
        setLibrary(() => {
            let libraryView = [];
            songs.forEach((e, i) => {
                if (!playlistSongs.find(song => song.id === i)) {
                    libraryView.push(
                        <div className={`SMPlibraryList ${i % 2 ? "SMPlibraryListEven" : "SMPlibraryListOdd"}`} key={i}>
                            <p className='SMPlibraryText' onClick={handleSongClick} id={i}>{`${e.date} - ${e.title} - ${e.notes.map(e => e)}`}</p>
                            <button className='SMPlibraryPlaylistAdd' id={i} onClick={handleAddtoPlaylist}>+</button>
                        </div>
                    );
                }
            });
            return libraryView;
        });
    }, [songs, playlistSongs]);
    
    return (
        <div id='SMPmainContainer'>
            <Playlist playlistSongs={playlistSongs} nowSong={nowSong} />
            <div id="SMPlibraryContainer">
                <h3>Library</h3>
                {library}
            </div>
        </div>
    );
}

export { Library };