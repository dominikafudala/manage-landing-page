import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, type, secondary }) => (
  <button className={`${styles.button} ${secondary ? styles.secondary : styles.primary}`} type={type}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  secondary: false,
};

export default Button;
