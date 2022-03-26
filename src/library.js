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
    const handleSongClick = ({ target }) => {
        console.log ('now song change');
        setNowSong(songs[target.id]);
    }

    const clearNowSong = () => setNowSong('');

    const removeFromPlaylist = (song) => {
        console.log (song);
        console.log (playlistSongs.indexOf(song));
        console.log (playlistSongs);
        const removeIndex = playlistSongs.indexOf(song);
        setPlaylistSongs((p) => {
            return [...p.splice(0, removeIndex), ...p.splice(removeIndex, p.length - 1)]
        });
        
    }

    /** click handler for adding a song to the playlist */
    const handleAddtoPlaylist = ({ target }) => setPlaylistSongs(p => [...p, songs[target.id]]);

    /** watches songs from server and playlist to decide what songs to generate into library view */
    useEffect(() => {
        console.log (playlistSongs);
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
            <Playlist playlistSongs={playlistSongs} nowSong={nowSong} clearNowSong={clearNowSong} removeFromPlaylist={removeFromPlaylist} />
            <div id="SMPlibraryContainer">
                <h3>Library</h3>
                {library}
            </div>
        </div>
    );
}

export { Library };