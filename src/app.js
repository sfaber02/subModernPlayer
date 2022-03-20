import React from 'react';
import { Howl } from 'howler';
import { Playlist } from './playlist.js';

const App = () => {

    /** 
     * Will recieve data based on username and access permissions
     * this is some mock data in the meantime to get this up and running
     */
    const songs = [
        './audio-files/01 Damaged Bug – Rubber Lips.mp3',
        './audio-files/07 - Game Of Pricks.mp3',
        './audio-files/VitaminC.mp3'
    ]


    return (
        <div id='SMPplayerContainer'>
            <Playlist songs={songs} />
        </div>
    );
}

export { App };