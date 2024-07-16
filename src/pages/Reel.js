import React, { useState, useEffect, useCallback } from 'react';
import styles from './styles/Reel.module.css';
import Modal from '../components/Modal';
import play from "../images/Icons/play.png";
import logoshowreel from "../images/Reel/reelLogo.jpg"; // Low resolution
import logoshowreelHighRes from "../images/Reel/reelLogoHighRes.jpg"; // High resolution

const Reel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [isBigScreen, setIsBigScreen] = useState(window.innerWidth >= 1920);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [modalStyle, setModalStyle] = useState({ iframe: { width: '1000px', height: '600px' } });

  const images = [
    { thumbnail: logoshowreel, videoLink: 'https://player.vimeo.com/video/793631376?title=0&byline=0&portrait=0', filmName: 'Narrative Showreel' },
    { thumbnail: logoshowreel, videoLink: 'https://player.vimeo.com/video/795157249?title=0&byline=0&portrait=0', filmName: 'Commercial Showreel' },
  ];

  const handleClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const navigateLeft = useCallback(() => {
    setCurrentIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : images.length - 1);
  }, [images.length]);

  const navigateRight = useCallback(() => {
    setCurrentIndex(prevIndex => prevIndex < images.length - 1 ? prevIndex + 1 : 0);
  }, [images.length]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsBigScreen(screenWidth >= 1920);
      setIsMobile(screenWidth <= 768);
      setModalStyle({
        iframe: {
          width: screenWidth < 768 ? "95%" : "1000px",
          height: screenWidth < 768 ? "auto" : "600px"
        }
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.gridContainer}>
      <h1 className={styles.title}>SHOWREELS</h1>
      <div className={styles.imageContainer}>
          <img
      src={isMobile ? logoshowreel : logoshowreelHighRes}
      alt="Showreel Thumbnail"
      onClick={handleClick}
      className={isMobile ? styles.mobileImage : styles.desktopImage}
    />
  
        {!modalOpen && <button onClick={handleClick} className={styles.buttonStyle}><img src = {play}></img></button>}
      </div>
  
      {modalOpen && (
        <Modal
          contentSrc={images[currentIndex].videoLink}
          filmName={<div className={styles.filmNameContainer}>{images[currentIndex].filmName}</div>}
          onClose={closeModal}
          onLeftArrowClick={navigateLeft}
          onRightArrowClick={navigateRight}
          modalStyle={modalStyle}
        />
      )}
    </div>
  );
};

export default Reel;