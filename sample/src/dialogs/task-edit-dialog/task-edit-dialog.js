import React, { useCallback, useState } from 'react'

/* Components */
import Dialog from 'components/dialog';
import Button from 'components/button';

import './task-edit-dialog.scss'

export default function TaskEditDialog({ visible, onClose, onSave, task }) {
    const [inputValues, setInputValues] = useState(task)

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
        console.log(_inputValues)
        setInputValues(_inputValues)
    }, [inputValues]);

    return (
        <Dialog visible={visible} onClose={onClose} width={400} style={{ backgroundColor: 'white' }}>
            <Dialog.Header>{task.title}</Dialog.Header>
            <Dialog.Body>
                <div style={{ border: '1px solid #3db6e8'}}>
                    <div style= {{ padding: '10px'}}>
                        <label className="label">Title</label>
                        <input type='text' value={inputValues.title} onChange={handleChange} />
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

