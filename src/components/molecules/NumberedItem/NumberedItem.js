import React from 'react';
import PropTypes from 'prop-types';
import styles from './NumberedItem.module.scss';

const NumberedItem = ({ children }) => <li className={styles.item}>{children}</li>;

NumberedItem.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default NumberedItem;
