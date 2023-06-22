/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Logo from 'components/atoms/Logo/Logo';
import Navigation from 'components/molecules/Navigation/Navigation';
import Button from 'components/atoms/Button/Button';
import iconHamburger from 'assets/images/icon-hamburger.svg';
import iconClose from 'assets/images/icon-close.svg';
import styles from './Header.module.scss';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenuMobile = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className={`${styles.header} container`} data-visible={menuVisible}>
      <Logo />
      <button
        className={styles.mobileControl}
        type="button"
        aria-controls="primary-nav"
        aria-expanded={menuVisible}
        onClick={toggleMenuMobile}
      >
        <img
          className={styles.hamburger}
          src={iconHamburger}
          alt=""
          aria-hidden="true"
          data-visible={!menuVisible}
        />
        <img
          className={styles.close}
          src={iconClose}
          alt=""
          aria-hidden="true"
          data-visible={menuVisible}
        />
        <span className="visually-hidden">Menu</span>
      </button>
      <Navigation ariaLabel="primary" id="primary-nav" dataVisible={menuVisible}>
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
};

export default Header;
