import React from 'react';
import styles from './Footer.module.css';
import instagramIcon from '../images/Icons/logo2.png'; // Make sure you have the correct path to your Instagram icon
import soundIcon from '../images/Icons/soundlogo.png'; // Make sure you have the correct path to your Sound icon
import vimeoIcon from '../images/Icons/vimeo.png'; // Make sure you have the correct path to your Vimeo icon
import telegramIcon from '../images/Icons/telegram.png'
import mail from '../images/Icons/milo.png'
import whats from '../images/Icons/whats.png'
import imdb from '../images/Icons/imdb.png'
const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.iconRow}>
     <a href="https://www.instagram.com/ars_dop/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
        <img src={instagramIcon} alt="Instagram" />
     </a>
     <a href="https://vimeo.com/arsdop" target="_blank" rel="noopener noreferrer" className={styles.socialLink}> 
     <img src ={vimeoIcon} alt="Vimeo" />
     </a>
     <a href="https://t.me/ars_dop" target="_blank" rel="noopener noreferrer" className={styles.socialLink}> 
     <img src ={telegramIcon} alt="Vimeo" />
     </a>
     
     <a href = "https://soundcloud.com/abogunov" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
     <img src={soundIcon} alt="SoundCloud" /> {/* Added class name */}
     </a>

     <a href="mailto:bogunov.dop@gmail.com"  target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
     <img src={mail} alt="Email" /> {/* Added class name */}
     </a>

     <a href="https://wa.me/48571037706"  target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
     <img src={whats} alt="Email" /> {/* Added class name */}
     </a>

     <a href="https://www.imdb.com/name/nm15853764/"  target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
     <img src={imdb} alt="Email" /> {/* Added class name */}
     </a>
     
    </div>
    <div className={styles.textRow}>
      <p>Arseny Bogunov. All rights reserved. 2024</p>
    </div>
    </footer>
  );
};

export default Footer;
