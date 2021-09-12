import React, { useCallback } from 'react'

/* Components */
import Dialog from 'components/dialog';
import Button from 'components/button';

import './task-dialog.scss'

export default function TaskDialog({ visible, onClose, onDelete, task }) {
    const handleTaskDelete = useCallback((e) => {
        if (onDelete) {
            onDelete({
                target: {
                    value: task
                }
            })
        }
    }, [onDelete, task])
    return (
        <div>
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
                    <Button type="remove" onClick={handleTaskDelete}>delete</Button>
                    <div style={{ flex: '1 1 0px' }}/>
                    <Button type="edit">edit</Button>
                </Dialog.Footer>
            </Dialog>
        </div>
    )
}

