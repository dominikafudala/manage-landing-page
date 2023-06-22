import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.scss';

const Navigation = ({ children, ariaLabel, id, dataVisible }) => (
  <nav aria-label={ariaLabel} className={styles.nav} id={id} data-visible={dataVisible}>
    <ul>{children}</ul>
  </nav>
);

Navigation.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  ariaLabel: PropTypes.string.isRequired,
  id: PropTypes.string,
  dataVisible: PropTypes.bool,
};

Navigation.defaultProps = {
  id: '',
  dataVisible: false,
};

export default Navigation;
