/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from 'components/atoms/Logo/Logo';
import Navigation from 'components/molecules/Navigation/Navigation';
import Button from 'components/atoms/Button/Button';
import styles from './Header.module.scss';

const Header = () => (
  <header className={`${styles.header} container`}>
    <Logo />
    <Navigation ariaLabel="primary">
      <li>
        <a href="#">Pricing</a>
      </li>
      <li>
        <a href="#">Product</a>
      </li>
      <li>
        <a href="#">About Us</a>
      </li>
      <li>
        <a href="#">Careers</a>
      </li>
      <li>
        <a href="#">Community</a>
      </li>
    </Navigation>
    <Button>Get Started</Button>
  </header>
);

export default Header;
