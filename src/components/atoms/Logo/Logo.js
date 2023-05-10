import React from 'react';
import logo from 'assets/images/logo.svg';
import styles from './Logo.module.scss';

const Logo = () => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a href="#">
    <img className={styles.logo} src={logo} alt="Logo" />
  </a>
);

export default Logo;
