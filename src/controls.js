import React from 'react';

const Controls = (props) => {
    return (
        <div id='SMPcontrols'>
            <button className='SMPcontrolButtons' onClick={props.prev}>Back</button>
            <button className='SMPcontrolButtons' onClick={props.play}>Play</button>
            <button className='SMPcontrolButtons' onClick={props.pause}>Pause</button>
            <button className='SMPcontrolButtons' onClick={props.stop}>Stop</button>
            <button className='SMPcontrolButtons' onClick={props.next}>Next</button>
        </div>
    );
}

export { Controls };