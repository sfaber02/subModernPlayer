import React from 'react';
import { Howl } from 'howler';
import { Playlist } from './playlist.js';

const App = () => {

    /** 
     * Will recieve data based on username and access permissions
     * this is some mock data in the meantime to get this up and running
     */
    const songs  = [
        new Howl({
            src: [require('./audio-files/07 - Game Of Pricks.mp3')],
            html5: true,
        }),
        new Howl({
            src: [require('./audio-files/01 Damaged Bug – Rubber Lips.mp3')],
            html5: true,
        }),
        new Howl({
            src: [require('./audio-files/VitaminC.mp3')],
            html5: true,
        }),
    ]


    return (
        <div>
            <Playlist songs={songs} />
        </div>
    );
}

export { App };