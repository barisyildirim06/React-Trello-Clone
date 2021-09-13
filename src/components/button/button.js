import React from 'react';

// styles
import styles from './button.module.scss';

export default function Button({
  children,
  disabled,
  type = '',
  inverted,
  forwardRef,
  className = '',
  style,
  onClick,
}) {
  const _style = {
    ...style,
  };


  switch (type) {
    case 'add':
        _style.backgroundColor = '#42ab56';
        break;
    case 'copy':
        _style.backgroundColor = '#3db4e5';
        break;
    case 'edit':
        _style.backgroundColor = '#f0ad4e';
        break;
    case 'refresh':
        _style.backgroundColor = '#3db4e5';
        break;
    case 'remove':
        _style.backgroundColor = '#e51937';
        break;
    case 'report':
        _style.backgroundColor = '#f6bb42';
        break;
    case 'save':
        _style.backgroundColor = '#42ab56';
        break;
    case 'upload':
        _style.backgroundColor = '#3db4e5';
        break;
    default:
        _style.backgroundColor = '#fffff';
  }

  return (
    <div className={styles.buttonWrapper}>
        <button
            className={`${styles.button} ${className} ${inverted && styles.inverted}`}
            disabled={disabled}
            ref={forwardRef}
            style={_style}
            onClick={onClick}
        >
            {children}
        </button>
    </div>
  );
}
