# SubModern Audio Ultimate Media Player

## Design
- app component should recieve data from the website with all songs user has access to
- songs can played from library or added to a playlist
    - playlist should be saved between sessions

- playlist OR library will send the song to be played to seekbar to render a waveform and play the song
- info section
    - title
    - notes
    - download link
    - date
    - status?
    - edit details
    - delete?


## Component Hierarchy
- index.js
    - app
        - library
            - playlist
                - seekbar
                    - control
                - info

## Data flow
- songs come in as an array of objects into the app component
    - all songs are passed to the library as a prop also an array of objects
        - songs added to playlist are passed to playlist objecty as an array of objects

## ToDo
- highlight playing item in playlist
- make playlist arrangeable?
- repeat/ random buttons?
- need to get a precise mockup of what the player will recieve from the website
- fancy animated buttons of course
- make play/pause the same button?
- should perhaps preload files added to playlist for quick play
- add db meter?
- animations that slide div off screen in library and slide it onto screen in playlist

## Bugs
- Loading display only works on first song loaded


## Ideas 


## Dependencies
- React.js
- wavesurfer.js
