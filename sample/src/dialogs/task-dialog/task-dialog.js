import React, { useCallback, useState } from 'react'

/* Components */
import Dialog from 'components/dialog';
import Button from 'components/button';

/* Dialogs */
import TaskEditDialog from 'dialogs/task-edit-dialog';

import './task-dialog.scss'

export default function TaskDialog({ visible, onClose, onDelete, onSave, task, tagValues }) {
    const [taskEditDialogVisible, setTaskEditDialogVisible] = useState(false);

    const handleTaskEditDialogClose = useCallback(() => {
        setTaskEditDialogVisible(false);
    }, []);

    const handleTaskEditClick = useCallback(() => {
        setTaskEditDialogVisible(true);
    }, []);

    const handleTaskDeleteClick = useCallback((e) => {
        if (onDelete) {
            onDelete({
                target: {
                    value: task
                }
            })
        }
    }, [onDelete, task]);

    const handleTaskEditSave = useCallback((e) => {
        if (onSave) {
            onSave({
                target: {
                    value: e.target.value
                }
            })
        }
    }, [onSave]);

    return (
        <Dialog visible={visible} onClose={onClose} width={400} style={{ backgroundColor: 'white' }}>
            <Dialog.Header>{task?.title}</Dialog.Header>
            <Dialog.Body>
                <div style={{ border: '1px solid #3db6e8'}}>
                    <div style= {{ padding: '10px'}}>
                        <label className="label">Title</label>
                        {task?.title}
                    </div>
                </div>
            </Dialog.Body>
            <Dialog.Footer>
                <Button type="remove" onClick={handleTaskDeleteClick}>delete</Button>
                <div style={{ flex: '1 1 0px' }}/>
                <Button type="edit" onClick={handleTaskEditClick}>edit</Button>
            </Dialog.Footer>
            <TaskEditDialog
                task={task}
                onSave={handleTaskEditSave}
                onClose={handleTaskEditDialogClose}
                visible={taskEditDialogVisible}
                tagValues={tagValues}
            />
        </Dialog>
    )
}

