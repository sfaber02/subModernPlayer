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
- figure out waveform rendering
- fancy animated buttons of course


## Ideas 
- howler.js looks pretty sweet


## Dependencies
- React.js
- Howler.js
