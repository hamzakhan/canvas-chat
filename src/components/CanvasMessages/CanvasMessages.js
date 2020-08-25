import React, { useEffect } from 'react';
import Drawing from '../Drawing/Drawing';
import ScrollToBottom from 'react-scroll-to-bottom';
import './CanvasMessages.css'

const CanvasMessages = ({drawings}) => {
    
    useEffect(() => {
        document.querySelector(".canvas-message-container").style.height = window.innerHeight - 300;
        console.log()
    })

    return(
        <ScrollToBottom className="canvas-message-container">
            <div className="canvas-message-inner-container">
                {drawings.map((data, i) => <div key={i}><Drawing drawing={data}/></div>)}
            </div>
        </ScrollToBottom>
    );
}

export default CanvasMessages;