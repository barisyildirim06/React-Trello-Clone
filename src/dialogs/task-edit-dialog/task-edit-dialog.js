import React, { useCallback, useState, useEffect } from 'react'

/* Components */
import Dialog from 'components/dialog';
import Button from 'components/button';
import TagSelect from 'components/tag-select';
import { Input } from 'antd';

/* Utilities */
import { Utils } from 'utils';

/* Styles */
import './task-edit-dialog.scss';

export default function TaskEditDialog({ visible, onClose, onSave, task, tagValues }) {
    const { TextArea } = Input;
    const [inputValues, setInputValues] = useState(task? task : {});

    const validate = useCallback(() => {
        if (inputValues.title === '' || inputValues.title === undefined || !inputValues?.title?.trim()) {
            alert('Please enter a title');
            return false;
        }
        return true;
    }, [inputValues]);

    const handleTaskEditSave = useCallback((e) => {
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
        const tagsByValue = Utils.toMap(tagValues, 'value');
        let _inputValues = {...inputValues};
        if (e.target.type === 'tag-select') {
            const tags = e.target.value
            const tagsArray = tags.map(t => tagsByValue.get(t))
            _inputValues = {
                ..._inputValues,
                tags: tagsArray
            }
        } else if (e.target.localName === 'input'){
            _inputValues = {
                ..._inputValues,
                title: e.target.value
            }
        }
        else if (e.target.localName === 'textarea'){
            _inputValues = {
                ..._inputValues,
                comments: e.target.value
            }
        }
        setInputValues(_inputValues)
    }, [inputValues, tagValues]);

    useEffect(() => {
        setInputValues(task)
    }, [task])

    return (
        <Dialog visible={visible} onClose={onClose} width={400} style={{ backgroundColor: 'white' }}>
            <Dialog.Header>{task?.id ? task.title : 'Create New Task'}</Dialog.Header>
            <Dialog.Body style= {{ maxHeight:'300px', overflowY: 'scroll' }}>
                <div style={{ border: '1px solid #3db6e8'}}>
                    <div style= {{ padding: '10px'}}>
                        <label className="label">Title</label>
                        <Input style={{ width: '100%' }} placeholder="Enter any Title" value={inputValues?.title} onChange={handleChange}/>
                    </div>
                </div>
                <div style={{ border: '1px solid #3db6e8'}}>
                    <div style= {{ padding: '10px'}}>
                        <label className="label">Comments</label>
                        <TextArea rows={2} style={{ width: '100%' }} placeholder="Write any Comments" value={inputValues?.comments} onChange={handleChange}/>
                    </div>
                </div>
                <div style={{ border: '1px solid #3db6e8'}}>
                    <div style= {{ padding: '10px'}}>
                        <label className="label">Tag</label>
                        <TagSelect onChange={handleChange} tags={inputValues?.tags?.map(t => t.value)} tagValues={tagValues}/>
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

