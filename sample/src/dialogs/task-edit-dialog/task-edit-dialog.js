import React, { useCallback, useState, useEffect } from 'react'

/* Components */
import Dialog from 'components/dialog';
import Button from 'components/button';

import './task-edit-dialog.scss'

export default function TaskEditDialog({ visible, onClose, onSave, task }) {
    const [inputValues, setInputValues] = useState(task? task : {})

    const handleTaskEditSave = useCallback((e) => {
        if (onSave) {
            onSave({
                target: {
                    value: inputValues
                }
            })
        }
        if (onClose) {
            onClose();
        }
    }, [onSave, inputValues, onClose]);

    const handleChange = useCallback((e) => {
        let _inputValues = {
            ...inputValues,
            title: e.target.value
        }
        setInputValues(_inputValues)
    }, [inputValues]);

    useEffect(() => {
        setInputValues(task)
    }, [task])

    return (
        <Dialog visible={visible} onClose={onClose} width={400} style={{ backgroundColor: 'white' }}>
            <Dialog.Header>{task?.id ? task.title : 'Create New Task'}</Dialog.Header>
            <Dialog.Body>
                <div style={{ border: '1px solid #3db6e8'}}>
                    <div style= {{ padding: '10px'}}>
                        <label className="label">Title</label>
                        <input type='text' style={{ width: '100%' }} value={inputValues?.title} onChange={handleChange} />
                    </div>
                </div>
            </Dialog.Body>
            <Dialog.Footer>
                <div style={{ flex: '1 1 0px' }}/>
                <Button type="save" onClick={handleTaskEditSave}>save</Button>
            </Dialog.Footer>
        </Dialog>
    )
}

