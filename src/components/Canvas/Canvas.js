import React, { useRef, useEffect } from 'react';
import './Canvas.css'

const Canvas = ({socket, name}) => {
    const canvas = useRef();
    const ctx = useRef();
    const rect = useRef();
    let drawing = false;

    useEffect(() => {
        let cv = canvas.current; //for cleanup in return statement

        ctx.current = canvas.current.getContext("2d");
        ctx.current.fillStyle = "#FFFFFF";
        ctx.current.fillRect(0, 0, 350, 200);
        rect.current = canvas.current.getBoundingClientRect();
        
        document.addEventListener("mousedown", startDrawing);
        document.addEventListener("mouseup", stopDrawing);
        document.addEventListener("mousemove", draw);
        document.addEventListener("mouseenter", setPosition);
        document.addEventListener("contextmenu", stopDrawing);
        canvas.current.addEventListener("contextmenu", event => event.preventDefault());

        document.addEventListener("touchstart", startDrawing, false);
        document.addEventListener("touchmove", (e) => {
            var touch = e.touches[0];
            var mouseEvent = new MouseEvent("mousemove", {
              clientX: touch.clientX,
              clientY: touch.clientY
            });
            document.dispatchEvent(mouseEvent);
          }, false);
        document.addEventListener("touchend", stopDrawing, false);

        return () => {
            document.removeEventListener("mousedown", startDrawing);
            document.removeEventListener("mouseup", stopDrawing);
            document.removeEventListener("mousemove", draw);
            document.removeEventListener("mouseenter", setPosition);
            document.removeEventListener("contextmenu", stopDrawing);
            cv.removeEventListener("contextmenu", event => event.preventDefault());

            document.removeEventListener("touchstart", startDrawing, false);
            document.removeEventListener("touchmove", (e) => {
                var touch = e.touches[0];
                var mouseEvent = new MouseEvent("mousemove", {
                clientX: touch.clientX,
                clientY: touch.clientY
                });
                document.dispatchEvent(mouseEvent);
            }, false);
            document.removeEventListener("touchend", stopDrawing, false);
        };
    });

    let pos = { x: 0, y: 0 };

    const setPosition = (e) => {
        rect.current = canvas.current.getBoundingClientRect();
        pos.x = e.clientX - rect.current.left;
        pos.y = e.clientY - rect.current.top;
    }

    const startDrawing = (e) => {
        drawing = true;
        setPosition(e);
    }
    const stopDrawing = () => {
        drawing = false;
    }

    function draw(e) {
        e.preventDefault();
        e.stopPropagation();

        if (!drawing) return;
        //var color = document.getElementById("hex").value;
        let color = '#000000'

        ctx.current.beginPath();

        ctx.current.lineWidth = 5; // line width
        ctx.current.lineCap = "round"; // rounded end

        //if (color[0] !== '#'){
        //    color = '#' + color;
        //}

        ctx.current.strokeStyle = color; // hex color of line

        ctx.current.moveTo(pos.x, pos.y); // from position
        setPosition(e);
        ctx.current.lineTo(pos.x, pos.y); // to position

        ctx.current.stroke(); // draw
    }

    const sendImage = () => {
        sessionStorage.setItem('canvas', canvas.current.toDataURL());
        var dataURL = sessionStorage.getItem('canvas');
        console.log(dataURL);
        socket.emit('imageSubmit', {
            image: dataURL,
            user: name
        });
        clearCanvas();
    }

    const clearCanvas = () => {
        ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
    }

    return (
        <div className="canvas-container">
            <div className="center">
                <canvas ref={canvas} className="draw" width='350' height='200'>Canvas is not supported.</canvas>
            </div>
            <div className="center noselect">
                <button type="button" name="submitBtn" onClick={sendImage}>Send</button>
                <button type="button" name="clearBtn" onClick={clearCanvas}>Clear</button>
            </div>
        </div>
    );
}

export default Canvas;