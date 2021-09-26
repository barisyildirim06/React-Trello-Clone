import React from 'react';

/* Styles */
import './image.scss';

export default function Image({ title, src, alt, onClick, onError }) {
    return (
        <div className="image-wrapper" title={title} onClick={onClick}>
            <img className="image" src={src} alt={alt} onError={onError} />
        </div>
    );
}
