import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paragraph.module.scss';

const Paragraph = ({ children, paddingLimit }) => (
  <p className={`${styles.paragraph} ${paddingLimit}`}>{children}</p>
);

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  paddingLimit: PropTypes.string,
};

Paragraph.defaultProps = {
  paddingLimit: '',
};

export default Paragraph;
