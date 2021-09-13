import React, { useCallback, useState, useEffect } from 'react'

/* Components */
import Dialog from 'components/dialog';
import Button from 'components/button';
import ColorSelect from 'components/color-select/color-select';
import { Input } from 'antd';

/* Styles */
import './status-edit-dialog.scss'

export default function StatusEditDialog({ visible, onClose, onSave, status, statuses }) {
    const [inputValues, setInputValues] = useState(status? status : {});

    const validate = useCallback(() => {
        if (inputValues.text === '' || inputValues.text === undefined || !inputValues?.text?.trim()) {
            alert('Please enter a title');
            return false;
        }
        if (statuses.some(s => s.text.includes(inputValues.text))) {
            alert("Please write a title that doesn't exist");
            return false;
        }
        return true;
    }, [inputValues, statuses]);

    const handleStatusEditSave = useCallback((e) => {
        if (!validate()) {
            return;
        }
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
    }, [onSave, inputValues, onClose, validate]);

    const handleChange = useCallback((e) => {
        let _inputValues = {...inputValues}
        if (e.target.type === 'color') {
            _inputValues = {
                ...inputValues,
                color: e.target.value
            }
        } else {
            _inputValues = {
                ...inputValues,
                text: e.target.value
            }
        }
        setInputValues(_inputValues)
    }, [inputValues]);

    useEffect(() => {
        setInputValues(status)
    }, [status])

    return (
        <Dialog visible={visible} onClose={onClose} width={400} style={{ backgroundColor: 'white' }}>
            <Dialog.Header>{status?.id ? status.title : 'Create New Status'}</Dialog.Header>
            <Dialog.Body>
                <div style={{ border: '1px solid #3db6e8'}}>
                    <div style= {{ padding: '10px'}}>
                        <label className="label">Status Color</label>
                        <ColorSelect onChange={handleChange}/>
                    </div>
                    <div style= {{ padding: '10px'}}>
                        <label className="label">Title</label>
                        <Input allowClear={true} style={{ width: '100%' }} placeholder="Enter any Title" value={inputValues?.title} onChange={handleChange}/>
                    </div>
                </div>
            </Dialog.Body>
            <Dialog.Footer>
                <div style={{ flex: '1 1 0px' }}/>
                <Button type="save" onClick={handleStatusEditSave}>save</Button>
            </Dialog.Footer>
        </Dialog>
    )
}

