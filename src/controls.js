import React from 'react';
import buttons from "./graphics/buttons.js"

const Controls = (props) => {
    console.log (buttons);
    
    return (
        <div id='SMPtransportButtons'>
            <button className='SMPcontrolButtons' onClick={props.prev}><img className='SMPcontrolButtonsImg' src={buttons.prev} /><img className='SMPcontrolButtonsImg' src={buttons.prev} /></button>
            <button className='SMPcontrolButtons' onClick={props.play}><img className='SMPcontrolButtonsImg' src={buttons.bigPlay} /></button>
            <button className='SMPcontrolButtons' onClick={props.pause}><img className='SMPcontrolButtonsImg' src={buttons.pause} /></button>
            <button className='SMPcontrolButtons' onClick={props.stop}><img className='SMPcontrolButtonsImg' src={buttons.stop} /></button>
            <button className='SMPcontrolButtons' onClick={props.next}><img className='SMPcontrolButtonsImg' src={buttons.bigPlay} /><img className='SMPcontrolButtonsImg' src={buttons.bigPlay} /></button>
        </div>
    );
}

export { Controls };