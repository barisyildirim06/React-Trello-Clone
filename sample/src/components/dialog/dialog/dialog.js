import React, { useEffect } from 'react';

import { Modal } from 'antd';

/* Helpers */
import usePrevious from 'helpers/use-previous';

/* Styles */
import './dialog.css';

export default function Dialog({ visible = false, overflow = 'hidden', size = 'medium', children, onOpen, onClose, className, width = 800, height = 540, closeIcon }) {


    /* Effects */
    const wasVisible = usePrevious(visible);

    useEffect(() => {
        if (!wasVisible && visible) {
            if (onOpen) {
                onOpen();
            }
        }
    }, [wasVisible, visible, onOpen]);

    // default size, medium

    if (size === 'small') {
        width = 600;
    }
    else if (size === 'large') {
        width = 1200;
    }

    return (
        <Modal
            bodyStyle={{ overflow, padding: '0px', backgroundColor: "rgba(0, 0,0, 0.49)", position: "relative" }}
            closeIcon={closeIcon}
            centered
            className={className}
            destroyOnClose={true}
            footer={null}
            maskClosable={false}
            title={null}
            height={height}
            visible={visible}
            width={width}
            onCancel={onClose}
        >
            {children}
        </Modal>
    );
}
