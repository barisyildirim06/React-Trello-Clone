import React, { useCallback, useState } from 'react';
/* Views */
import BoardView from 'views/board-view';

/* Components */
import { Input } from 'antd';

/* Dialogs */
import TaskDialog from 'dialogs/task-dialog';
import TaskEditDialog from 'dialogs/task-edit-dialog';
import StatusEditDialog from 'dialogs/status-edit-dialog';

/* Styles */
import './home-page.scss';

/* Helpers */
import filterTasksCallback from 'helpers/use-state-callback';

/* Data */
import { tasksData, statusesData, tagValues } from 'initial-data';


export default function HomePage() {
    const [ tasks, setTasks ] = useState(tasksData);
    const [ filteredTasks, setFilteredTasks ] = useState(tasksData);
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ statuses, setStatuses ] = useState(statusesData);
    const [ taskDialogVisible, setTaskDialogVisible ] = useState(false);
    const [ taskEditDialogVisible, setTaskEditDialogVisible ] = useState(false);
    const [ statusEditDialogVisible, setStatusEditDialogVisible ] = useState(false);
    const [ currentTask, setCurrentTask ] = useState(null);
    const [ currentStatus, setCurrentStatus ] = useState(null);
    const [updateState, setUpdateState] = useState(null);

    const filterTasks = useCallback((_searchTerm = searchTerm) => {
        let _filteredTasks = tasks.filter(task => {
            if (String(task?.id)?.includes(_searchTerm) || task?.title?.toLowerCase()?.includes(_searchTerm.toLowerCase()) || task?.tags?.map(t=> t?.label?.toLowerCase())?.join('')?.includes(_searchTerm.toLowerCase())) {
                return true
            }
            return false;
        })
        setFilteredTasks(_filteredTasks);
    }, [tasks, searchTerm, ]);

    filterTasksCallback(() => {
        filterTasks(searchTerm);
    }, [searchTerm, updateState]); // eslint-disabled

    const handleSearchTermChange = useCallback((e) => {
        let _searchTerm = e.target.value;
        setSearchTerm(_searchTerm);
    
        filterTasks(_searchTerm)
    }, [filterTasks]);

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
        setUpdateState(prev => prev + 1);
    }, [tasks, currentTask]);

    const handleStatusSave = useCallback((e) => {
        let status = e.target.value
        let newStatuses = [...statuses]

        // Find the max id to incremental increase
        const max = Math.max.apply(null, newStatuses.map(item => Number(item.id)));

        let index = statuses.findIndex(s => s.id === status.id)

        if (index < 0) {
            newStatuses.push({...status, id: (max + 1).toString()})
        } else {
            newStatuses = newStatuses.map(el => {
                if (el.id === status.id) return status
                return el;
            });
        }
        if (currentStatus) {
            setCurrentStatus(status);
        }
        setStatuses(newStatuses);
        setStatusEditDialogVisible(false);
    }, [statuses, currentStatus]);

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

    const handleAddStatusClick = useCallback((e) => {
        const status = {
            text: '',
            color: '#5243AA'
        }
        setCurrentStatus(status)
        setStatusEditDialogVisible(true);
    }, []);

    const handleTaskDialogClose = useCallback(e => {
        setTaskDialogVisible(false);
        setCurrentTask(null);
    }, []);

    const handleTaskEditDialogClose = useCallback(e => {
        setTaskEditDialogVisible(false);
        setCurrentTask(null);
    }, []);

    const handleStatusEditDialogClose = useCallback(e => {
        setStatusEditDialogVisible(false);
        setCurrentStatus(null);
    }, []);

    const handleTaskDelete = useCallback(e => {
        let task = e.target.value;
        let filteredTasks = tasks.filter(t => t.id !== task.id);
        setTaskDialogVisible(false);
        setCurrentTask(null);
        setTasks(filteredTasks);
        setUpdateState(prev => prev + 1);
    }, [tasks]);

    const handleLaneScroll = useCallback(e => {
        const { removedIndex, addedIndex } = e.target;
        let newStatuses = [...statuses];
        // Used algorithm from the below function
        // Array.prototype.move = function (from, to) {
        //     this.splice(to, 0, this.splice(from, 1)[0]);
        // };
        newStatuses.splice(addedIndex, 0, newStatuses.splice(removedIndex, 1)[0])
        setStatuses(newStatuses)
    }, [statuses]);

    return (
        <div style={{ backgroundColor: '#3979bf' }}>
            <div style={{ padding: '20px' }}>
                <Input allowClear={true} placeholder="Quick Search" value={searchTerm} onChange={handleSearchTermChange}/>
            </div>
            <BoardView
                searchTerm={searchTerm}
                statuses={statuses}
                tasks={filteredTasks}
                onTaskSave={handleTaskSave}
                onTaskCardClick={handleTaskCardClick}
                onAddTaskClick={handleAddTaskClick}
                onAddStatusClick={handleAddStatusClick}
                onLaneScroll={handleLaneScroll}
            />
            <TaskDialog
                task={currentTask}
                visible={taskDialogVisible}
                onClose={handleTaskDialogClose}
                onDelete={handleTaskDelete}
                onSave={handleTaskSave}
                tagValues={tagValues}
            />
            <TaskEditDialog
                task={currentTask}
                visible={taskEditDialogVisible}
                onClose={handleTaskEditDialogClose}
                onDelete={handleTaskDelete}
                onSave={handleTaskSave}
                tagValues={tagValues}
            />
            <StatusEditDialog
                status={currentStatus}
                visible={statusEditDialogVisible}
                onClose={handleStatusEditDialogClose}
                onSave={handleStatusSave}
            />
        </div>
    )
}

