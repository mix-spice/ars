import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import instLogo from '../images/Icons/logo.png';

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const showDropdown = () => {
    setIsDropdownVisible(true);
  };

  const hideDropdown = () => {
    setIsDropdownVisible(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarTitle}>
          <Link to="/" className={styles.navbarTitle}>
          <h1>ARSENY BOGUNOV</h1>
          <p>Director of Photography</p>
        </Link>
        </div>
        <div className={styles.navbarLinks}>
          <div className={styles.dropdown} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            <button className={styles.link}>
              Work
            </button>
            {isDropdownVisible && (
              <div className={styles.dropdownContent}>
                <Link to="/narrative" className={styles.dropdownItem}>Narrative</Link>
                <Link to="/commercials" className={styles.dropdownItem}>Commercial</Link>
                <Link to="/music-video" className={styles.dropdownItem}>Music video</Link>
              </div>
            )}
          </div>
          <Link to="/reel" className={styles.link}>Reel</Link>
          <Link to="/photo" className={styles.link}>Photo</Link>
          <Link to="/about" className={styles.link}>About</Link>
          <a href="https://www.instagram.com/ars_dop/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <img src={instLogo} alt="Instagram" />
        </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;