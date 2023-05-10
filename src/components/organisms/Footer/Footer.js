/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from 'components/atoms/Logo/Logo';
import facebook from 'assets/images/icon-facebook.svg';
import youtube from 'assets/images/icon-youtube.svg';
import twitter from 'assets/images/icon-twitter.svg';
import pinterest from 'assets/images/icon-pinterest.svg';
import instagram from 'assets/images/icon-instagram.svg';
import Navigation from 'components/molecules/Navigation/Navigation';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={`${styles.footer} container`}>
    <Logo />
    <ul className={styles.socials} aria-label="Links to socials">
      <li className={styles.socialItem}>
        <a aria-label="facebook" href="#">
          <img src={facebook} alt="Facebook" />
        </a>
      </li>
      <li className={styles.socialItem}>
        <a aria-label="youtube" href="#">
          <img src={youtube} alt="YouTube" />
        </a>
      </li>
      <li className={styles.socialItem}>
        <a aria-label="twitter" href="#">
          <img src={twitter} alt="Twitter" />
        </a>
      </li>
      <li className={styles.socialItem}>
        <a aria-label="pinterest" href="#">
          <img src={pinterest} alt="Pinterest" />
        </a>
      </li>
      <li className={styles.socialItem}>
        <a aria-label="instagram" href="#">
          <img src={instagram} alt="Instagram" />
        </a>
      </li>
    </ul>
    <Navigation ariaLabel="footer">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Pricing</a>
      </li>
      <li>
        <a href="#">Products</a>
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
      <li>
        <a href="#">Privacy Policy</a>
      </li>
    </Navigation>
    <form className={styles.form}>
      <input type="email" placeholder="Updates in your inbox" />
      <Button type="submit">Go</Button>
    </form>
    <Paragraph>Copyright 2020. All Rights Reserved</Paragraph>
  </footer>
);

export default Footer;
