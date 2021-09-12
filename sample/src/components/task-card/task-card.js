import React, { useCallback } from 'react'
import './task-card.scss';

/* Components */
import Image from 'components/image';
// import Spacer from 'components/spacer';

export default function TaskCard({ task, color, onTaskCardClick }) {
    const handleCardClick = useCallback((e) => {
        if (onTaskCardClick) {
            onTaskCardClick({
                target: {
                    value: task
                }
            })
        }
    }, [task, onTaskCardClick]);

    let statusColor = "rgb(0,0,0)";
    let title = "";

    if (task) {
        title = `${task.title} - ${task.id}`;
    }

    if (color) {
        statusColor = color;
    }

    return (
        <div className="task-card"  onClick={handleCardClick}>
            <div className="task-card-icon" style={{ borderColor: statusColor, padding: "3px"}}>
                <Image src={"/static/img/checkmark.png"} />
            </div>
            <div className="task-card-details">
                <div style={{ display: "flex" }}>
                    <div className="task-card-title">{title}</div>
                </div>
            </div>
        </div>
    )
}