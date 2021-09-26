import React, { useEffect, useRef } from 'react';

/* Styles */
import './header.css';

export default function Header({ leftButton, rightButton, style, children }) {
    const header = useRef(null); 

    useEffect(() => {
        const elmnt = header.current.closest('.ant-modal');
        dragElement(elmnt);
    }, []);

    function dragElement(elmnt) {
        let pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;
        if (elmnt.getElementsByClassName('dialog-header').length > 0) {
            /* if present, the header is where you move the DIV from:*/
            elmnt.getElementsByClassName('dialog-header')[0].onmousedown = dragMouseDown;
        }
        else {
            /* otherwise, move the DIV from anywhere inside the DIV:*/
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;

            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;

            // set the element's new position:
            elmnt.style.top = elmnt.style.top === '' ? '0px' : `${parseInt(elmnt.style.top, 10) - pos2}px`;
            elmnt.style.left = elmnt.style.left === '' ? '0px' : `${parseInt(elmnt.style.left, 10) - pos1}px`;
        }

        function closeDragElement(e) {
            if (elmnt.offsetTop < 0) {
                elmnt.style.top = `${parseInt(elmnt.style.top, 10) - elmnt.offsetTop}px`;
            }
            if (elmnt.offsetLeft < 0) {
                elmnt.style.left = `${parseInt(elmnt.style.left, 10) - elmnt.offsetLeft}px`;
            }

            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    return (
        <div className='dialog-header' ref={header}>
            <div className='row'>
                <div className='col-xs-4' style={{ paddingLeft: '10px' }}>
                    {leftButton}
                </div>
                <div className='col-xs-4 dialog-header-title' style={style}>
                    {children}
                </div>
                <div className='col-xs-4' style={{ paddingRight: '10px', textAlign: 'right' }}>
                    {rightButton}
                </div>
            </div>
        </div>
    );
}
