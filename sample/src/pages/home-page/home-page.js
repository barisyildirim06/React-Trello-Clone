import React, { useCallback, useState } from 'react';
import { tasksData, statusesData } from 'initial-data';
import './home-page.scss';
import BoardView from 'views/board-view';
import TaskDialog from 'dialogs/task-dialog';

export default function HomePage() {
    const [ tasks, setTasks ] = useState(tasksData);
    const [ statuses, ] = useState(statusesData);
    const [ taskDialogVisible, setTaskDialogVisible ] = useState(false);
    const [ currentTask, setCurrentTask ] = useState(null);

    const handleTaskSave = useCallback((e) => {
        let task = e.target.value
        console.log(task)
        let index = tasks.find(t => t.id === task.id)
        let newTasks = [...tasks]
        if (index < 0) {
            newTasks.push(task)
        } else {
            newTasks = tasks.map(el => {
                if (el.id === task.id) return task
                return el;
            });
        }
        if (currentTask) {
            setCurrentTask(task);
        }
        setTasks(newTasks);
    }, [tasks, currentTask]);

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
    }, [tasks]);

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
                onSave={handleTaskSave}
            />
        </div>
    )
}

