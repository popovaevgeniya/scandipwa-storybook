import PropTypes from 'prop-types';
import cn from 'classnames';
import React from 'react';

import styles from './UiButton.module.css';

const UiButton = ({
    text,
    onClick,
    disabled,
    theme='dark',
    classes,
   // pseudo,
    background
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(styles.button, styles[theme], classes)}
           // pseudo={styles}
            background={styles[background]}
        >
            {text}
        </button>
    )
}

UiButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    classes: PropTypes.string,
   // pseudo: PropTypes.string
    background: PropTypes.string
}

export default UiButton;
