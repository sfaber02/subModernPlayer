import React from 'react';

const Controls = (props) => {




    return (
        <div id='controls'>
            <button onClick={props.prev}>Back</button>
            <button onClick={props.play}>Play</button>
            <button onClick={props.pause}>Pause</button>
            <button onClick={props.stop}>Stop</button>
            <button onClick={props.next}>Next</button>
        </div>
    );
}

export { Controls };