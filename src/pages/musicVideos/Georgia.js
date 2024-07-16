import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/musicVideos/Georgia.module.css';
import logo from '../../images/SpheraMusic/imgLogo.webp'
import Modal from '../../components/Modal';
import Metadata from '../../components/Metadata';

import image1 from "../../images/Georgia/img1.webp"
import image2 from "../../images/Georgia/img2.webp"
import image3 from "../../images/Georgia/img3.webp"
import image4 from "../../images/Georgia/img4.webp"
import image5 from "../../images/Georgia/img5.webp"
import image6 from "../../images/Georgia/img6.webp"
import image7 from "../../images/Georgia/img7.webp"
import image8 from "../../images/Georgia/img8.webp"
import image9 from "../../images/Georgia/img9.webp"


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9]; // ... add more as needed



const Georgia = () => {
  const title = "Georgia Music Video";
  const description = "Georgia – music video dop cut";
  const image = logo;
  const url = "https://arsdop.com/music-videos/georgia";

  const [currentIndex, setCurrentIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false); // Track whether the modal is open
  const [imageStyle, setImageStyle] = useState({ height: "600px", width: "auto", objectFit: 'contain' });

  const handleClick = (index) => {
    setCurrentIndex(index);
    setModalOpen(true); // Open the modal
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
    setModalOpen(false); // Ensure this is called to set modalOpen to false when the modal is closed
  };

  const navigateLeft = () => {
    setCurrentIndex(oldIndex => oldIndex === 0 ? images.length - 1 : oldIndex - 1);
  };

  const navigateRight = () => {
    setCurrentIndex(oldIndex => oldIndex === images.length - 1 ? 0 : oldIndex + 1);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 2560) {
        setImageStyle({ width: "1400px", height: "auto", objectFit: 'contain' });
      } else if (window.innerWidth >= 1920) {
        setImageStyle({ width: "1100px", height: "auto", objectFit: 'contain' });
      } else if (window.innerWidth <= 760) {
        setImageStyle({ width: "300px", height: "auto", objectFit: 'contain' });}
        else {   setImageStyle({ width: "1100px", height: "auto", objectFit: 'contain' });
      }
    };
  
    handleResize(); // Apply initially on mount
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.mainContent}>
       <Metadata title={title} description={description} image={image} url={url} />
      <div className={styles.project}>
        <iframe className={styles.iframe} src="https://player.vimeo.com/video/929087912" allowFullScreen></iframe>
      </div>
      
      {/* Conditional rendering of navigation buttons */}
      {!modalOpen && (
        <>
          <Link to="/music-videos/vektor">
            <button className={styles.rightArrow}>{">"}</button>
          </Link>
          <Link to="/music-videos/pohoda">
            <button className={styles.leftArrow}>{"<"}</button>
          </Link>
        </>
      )}

      <div className={styles.title}>
        <h2 className={styles.projectTitle}>Georgia - music video dop cut</h2>
      </div>

      <div className={styles.creditsContainer}>
        <div className={styles.creditsList}>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Director:</h2> @zlytkin</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Dop:</h2> @ars_dop</div>
          </div>
          <div className={styles.creditItem} style={{ marginBottom: '15px' }}>
            <div className={styles.creditName}><h2>Production:</h2> @juliyavasilitsa</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}>arri alexa mini/ alexa xt + master prime</div>
          </div>
        </div>
      </div>

      <div className={styles.photoSection}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index}`} onClick={() => handleClick(index)} />
        ))}
        {currentIndex !== null && (
          <Modal
            contentSrc={images[currentIndex]}
            onClose={closeLightbox}
            onLeftArrowClick={navigateLeft}
            onRightArrowClick={navigateRight}
            imageStyle={imageStyle} />
        )}
      </div>
    </div>
  );
}

export default Georgia;
