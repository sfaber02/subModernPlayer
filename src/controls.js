import React from 'react';

const Controls = (props) => {
    return (
        <div id='SMPcontrols'>
            <button className='SMPcontrolButtons' onClick={props.prev}>{`${String.fromCharCode(9668)}${String.fromCharCode(9668)}`}</button>
            <button className='SMPcontrolButtons' onClick={props.play}>{String.fromCharCode(9654)}</button>
            <button className='SMPcontrolButtons' onClick={props.pause} id="pauseButton">{`${String.fromCharCode(9616)}${String.fromCharCode(9616)}`}</button>
            <button className='SMPcontrolButtons' onClick={props.stop} id="stopButton">{String.fromCharCode(9642)}</button>
            <button className='SMPcontrolButtons' onClick={props.next}>{`${String.fromCharCode(9654)}${String.fromCharCode(9654)}`}</button>
        </div>
    );
}

export { Controls };