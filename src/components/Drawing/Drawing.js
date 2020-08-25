import React from 'react';
import './Drawing.css'

const Drawing = ({drawing}) => {
    return(
            <div className="drawing-outer-container noselect">
                <div className="drawing-username">{drawing['user']}</div> 
                <div className="drawing">
                    <img draggable="false" alt="canvas drawing" src={drawing['image']}/>
                </div>
            </div>
    );
}

export default Drawing;