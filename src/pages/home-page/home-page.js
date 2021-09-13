import React, { useCallback, useState } from 'react';
import { tasksData, statusesData } from 'initialData.js';
import './home-page.scss';
import BoardView from 'views/board-view';

export default function HomePage() {
    const [ tasks, setTasks ] = useState(tasksData);
    const [ statuses, setStatuses ] = useState(statusesData);

    const handleTaskSave = useCallback((e) => {
        let task = e.target.value
        let newTasks = tasks.map(el => {
            if (el.id === task.id) return task
            return el;
        });
        setTasks(newTasks);
    }, [tasks]);

    return (
        <div>
            <BoardView 
                statuses={statuses}
                tasks={tasks}
                onTaskSave={handleTaskSave}
            />
        </div>
    )
}

