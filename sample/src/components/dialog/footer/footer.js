import React from 'react';

/* Styles */
import './footer.css'

export default function Footer({ style, children }) {
    return (
        <div className="dialog-footer" style={style}>
            {children}
        </div>
    );
}
