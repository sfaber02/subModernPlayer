import React, { useState, useEffect } from 'react';
import { SeekBar } from './seekbar';
import { Info } from './info.js';

const Library = (props) => {
    /** State for currently playing song */
    const [currentSong, setCurrentSong] = useState();
    const [library, setLibrary] = useState();

    /** array of songs passed in from app */
    const songs = props.songs;

    /** click handler for playlist items */
    const click = ({ target }) => setCurrentSong(Number(target.id));
    
    /** Event handlers that respond to back and next button clicks from controls component */
    const playNext = () => currentSong == songs.length - 1 ? setCurrentSong(0) : setCurrentSong(c => c += 1);
    const playPrev = () => currentSong == 0 ? setCurrentSong(songs.length -  1) : setCurrentSong(c => c -= 1);

    useEffect(() => {
        setLibrary(() => {
            let libraryView = [];
            songs.forEach((e, i) => {
                if (i % 2) {
                    libraryView.push(
                        <div className='SMPlibraryList SMPlibraryListEven' onClick={click} key={i} id={i}>
                            {`${e.date} - ${e.title} - ${e.notes.map(e => e)}`}
                        </div>
                    );
                } else {
                    libraryView.push(
                        <div className='SMPlibraryList SMPlibraryListOdd' onClick={click} key={i} id={i}>
                            {`${e.date} - ${e.title} - ${e.notes.map(e => e)}`}
                        </div>
                    ); 
                }
            });
            return libraryView;
        });
    }, [songs]);
    
    return (
        <div id='SMPmainContainer'>
            {currentSong !== undefined && <Info song={songs[currentSong]} />}
            <SeekBar song={songs[currentSong]} next={playNext} prev={playPrev} />
            <div id="SMPlibraryContainer">
                <h3>Library</h3>
                {library}
            </div>
        </div>
    );
}

export { Library };