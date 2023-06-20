import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.scss';

const Heading = ({ headingType: Component, children }) => (
  <Component className={`${styles[Component]} ${styles.heading}`}>{children}</Component>
);

Heading.propTypes = {
  headingType: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Heading;
