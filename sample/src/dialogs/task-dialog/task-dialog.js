import React from 'react'

/* Components */
import Dialog from 'components/dialog';

import './task-dialog.scss'

export default function TaskDialog({ visible, onClose, task }) {
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
            </Dialog>
        </div>
    )
}

