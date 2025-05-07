import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ children, buttonStyle, className, ...props }) => {
  const btnClass = buttonStyle === 'unstyled' ? styles.unstyled : styles.default;
  return (
    <button className={`${btnClass} ${className || ''}`} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonStyle: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  buttonStyle: 'default',
  className: '',
};

export default Button;
