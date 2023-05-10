import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.scss';

const Navigation = ({ children, ariaLabel }) => (
  <nav aria-label={ariaLabel} className={styles.nav}>
    <ul>{children}</ul>
  </nav>
);

Navigation.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default Navigation;
