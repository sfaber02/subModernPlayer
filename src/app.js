import React from 'react';
import { Howl } from 'howler';
import { Playlist } from './playlist.js';

const App = () => {

    /** 
     * Will recieve data based on username and access permissions
     * this is some mock data in the meantime to get this up and running
     */
    const songs = [
        {
            title: 'Rubber Lips',
            notes: ['first bounce with vocals, rough covid demo'],
            date: '01/09/22',
            src: './audio-files/01 Damaged Bug – Rubber Lips.mp3',
        },
        {
            title: 'Game of Pricks',
            notes: ['first bounce with vocals, rough covid demo'],
            date: '01/09/22',
            src: './audio-files/07 - Game Of Pricks.mp3',
        },
        {
            title: 'Vitamin C',
            notes: ['first bounce with vocals, rough covid demo'],
            date: '01/09/22',
            src: './audio-files/VitaminC.mp3'
        },
        {
            title: '13 Monsters',
            notes: ['first bounce with vocals, rough covid demo'],
            date: '01/09/22',
            src: './audio-files/03 - Lightning Bolt - 13 Monsters.mp3'
        }
    ]


    return (
        <div id='SMPplayerContainer'>
            <Playlist songs={songs} />
        </div>
    );
}

export { App };