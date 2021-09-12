import React, { useCallback, useState } from 'react';
import { tasksData, statusesData } from 'initial-data';
import './home-page.scss';
import BoardView from 'views/board-view';
import TaskDialog from 'dialogs/task-dialog';

export default function HomePage() {
    const [ tasks, setTasks ] = useState(tasksData);
    const [ statuses, setStatuses ] = useState(statusesData);
    const [ taskDialogVisible, setTaskDialogVisible ] = useState(false);
    const [ currentTask, setCurrentTask ] = useState(null);

    const handleTaskSave = useCallback((e) => {
        let task = e.target.value
        let newTasks = tasks.map(el => {
            if (el.id === task.id) return task
            return el;
        });
        setTasks(newTasks);
    }, [tasks]);

    const handleTaskCardClick = useCallback((e) => {
        let task = e.target.value;
        setCurrentTask(task);
        setTaskDialogVisible(true);
    }, []);

    const handleTaskDialogClose = useCallback(e => {
        setTaskDialogVisible(false);
        setCurrentTask(null);
    }, [])

    const handleTaskDelete = useCallback(e => {
        let task = e.target.value;
        let filteredTasks = tasks.filter(t => t.id !== task.id);
        setTaskDialogVisible(false);
        setCurrentTask(null);
        setTasks(filteredTasks)
    }, [tasks])

    return (
        <div>
            <BoardView 
                statuses={statuses}
                tasks={tasks}
                onTaskSave={handleTaskSave}
                onTaskCardClick={handleTaskCardClick}
            />
            <TaskDialog
                task={currentTask}
                visible={taskDialogVisible}
                onClose={handleTaskDialogClose}
                onDelete={handleTaskDelete}
            />
        </div>
    )
}

