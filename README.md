# SubModern Audio Ultimate Media Player

## Design
- app component should recieve data from the website with all songs user has access to
- should be info about the songs as well?
- app component will send the songs to playlist to generate the playlist
- playlist will send the song to be played to seekbar to render a waveform and play the song
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
        - playlist
            - seekbar
                - control
            - info

## ToDo
- need to get a precise mockup of what the player will recieve from the website
- fancy animated buttons of course
- make play/pause the same button?
- current time display with an interval function?
- refactor playlist into library view and playlist
    - should perhaps preload files added to playlist for quick play
- figure out how to cancel time update interval

## Bugs
- Loading display only works on first song loaded


## Ideas 
- howler.js looks pretty sweet
    - has no way to generate waveforms!! booo
- maybe wavesurfer.js?
    - seems to be working much better
    - will be less of a headache to generate waveforms




## Dependencies
- React.js
- Howler.js
- wavesurfer.js
