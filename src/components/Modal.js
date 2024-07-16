import React, { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ contentSrc, filmName, onClose, onLeftArrowClick, onRightArrowClick, imageStyle, modalStyle }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onLeftArrowClick();
      if (event.key === 'ArrowRight') onRightArrowClick();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onLeftArrowClick, onRightArrowClick, onClose]);

  // Check if contentSrc is a video link
  const isVideoLink = contentSrc.startsWith("https://player.vimeo.com/video/");

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div
        className={`${styles.modalContent} ${styles.modalContentVisible}`}
        onClick={(e) => e.stopPropagation()}
      >
        {filmName && <div className={styles.filmName}>{filmName}</div>}
        {isVideoLink ? (
         <iframe src={contentSrc} style={modalStyle.iframe} frameBorder="0" allowFullScreen></iframe>
        ) : (
          <img src={contentSrc} alt={filmName} style={imageStyle} />
        )}
        <button className={styles.leftArrow} onClick={onLeftArrowClick}>{"<"}</button>
        <button className={styles.rightArrow} onClick={onRightArrowClick}>{">"}</button>
        <button className={styles.closeButton} onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default Modal;