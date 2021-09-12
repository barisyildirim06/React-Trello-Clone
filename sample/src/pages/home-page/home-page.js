import React, { useCallback, useState } from 'react';
/* Views */
import BoardView from 'views/board-view';

/* Dialogs */
import TaskDialog from 'dialogs/task-dialog';
import TaskEditDialog from 'dialogs/task-edit-dialog';

/* Styles */
import './home-page.scss';

/* Data */
import { tasksData, statusesData } from 'initial-data';


export default function HomePage() {
    const [ tasks, setTasks ] = useState(tasksData);
    const [ statuses, ] = useState(statusesData);
    const [ taskDialogVisible, setTaskDialogVisible ] = useState(false);
    const [ taskEditDialogVisible, setTaskEditDialogVisible ] = useState(false);
    const [ currentTask, setCurrentTask ] = useState(null);

    const handleTaskSave = useCallback((e) => {
        let task = e.target.value
        let newTasks = [...tasks]

        // Find the max id to incremental increase
        const max = Math.max.apply(null, newTasks.map(item => Number(item.id)));
        
        let index = tasks.findIndex(t => t.id === task.id)
        if (index < 0) {
            newTasks.push({...task, id: (max + 1).toString()})
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
        setTaskEditDialogVisible(false);
    }, [tasks, currentTask]);

    const handleTaskCardClick = useCallback((e) => {
        let task = e.target.value;
        setCurrentTask(task);
        setTaskDialogVisible(true);
    }, []);

    const handleAddTaskClick = useCallback((e) => {
        const { laneId } = e.target;
        const task = {
            title: '',
            status: statuses?.find(s => s.id === laneId)?.text,
        }
        setCurrentTask(task)
        setTaskEditDialogVisible(true);
        
    }, [statuses]);

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
                onAddTaskClick={handleAddTaskClick}
            />
            <TaskDialog
                task={currentTask}
                visible={taskDialogVisible}
                onClose={handleTaskDialogClose}
                onDelete={handleTaskDelete}
                onSave={handleTaskSave}
            />
            <TaskEditDialog
                task={currentTask}
                visible={taskEditDialogVisible}
                onClose={handleTaskDialogClose}
                onDelete={handleTaskDelete}
                onSave={handleTaskSave}
            />
        </div>
    )
}

