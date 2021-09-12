import React, { useState } from 'react';
import { tasksData, statusesData } from 'initial-data.js';
import './home-page.scss';
import BoardView from 'views/board-view';

export default function HomePage() {
    const [ tasks, setTasks ] = useState(tasksData);
    const [ statuses, setStatuses ] = useState(statusesData);

    return (
        <div>
            <BoardView 
                statuses={statuses}
                tasks={tasks}
            />
        </div>
    )
}

