import React from 'react';

/* Style */
import './body.css';

export default function Body({ style, children }) {
    return (
        <div className='dialog-body' style={style}>
            {children}
        </div>
    );
}
