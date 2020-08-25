import React, {useState, useEffect} from 'react';
import Canvas from '../../components/Canvas/Canvas';
import CanvasMessages from '../../components/CanvasMessages/CanvasMessages';
import {socket} from '../../service/socket';

const ChatApp = () => {
    

    //const [name, setName] = useState('');
    //const [room, setRoom] = useState('');
    const [drawings, setDrawings] = useState([]);

    useEffect(() => {
        socket.on('imagePost', data => {
            setDrawings(drawings => [...drawings, data]);
        })
    }, []);

    return(
        <React.Fragment>
            <CanvasMessages drawings={drawings}/>
            <Canvas socket={socket} name="Test"/>
        </React.Fragment>
    );
}

export default ChatApp;