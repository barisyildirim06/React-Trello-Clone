import React from 'react';
import './tag-select.scss';
import { Select, Tag } from 'antd';

export default function TagSelect({ onChange, tags, tagValues }) {
    const handleChange = (arr) => {
        if (onChange) {
            onChange({
                target:{
                    value: arr,
                    type: 'tag-select'
                }
            })
        }
    }

    const tagRender = (props) => {
        const { label, value, closable, onClose } = props;
        const onPreventMouseDown = event => {
          event.preventDefault();
          event.stopPropagation();
        };
        return (
          <Tag
            color={value}
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{ marginRight: 3 }}
          >
            {label}
          </Tag>
        );
      }

    return <Select
        mode="multiple"
        showArrow
        defaultValue={tags}
        tagRender={tagRender}
        style={{ width: '100%' }}
        options={tagValues}
        onChange={handleChange}
    />
}

