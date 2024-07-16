import React, { useState,useEffect  } from 'react';
import styles from '../styles/commercials/Dills.module.css';
import { Link } from 'react-router-dom';
import logo from "../../images/Dills/duhlogo.webp";
import Metadata from '../../components/Metadata';
import Modal from '../../components/Modal';

import image1 from "../../images/Dills/duh1.webp";
import image2 from "../../images/Dills/duh2.webp";
import image3 from "../../images/Dills/duh3.webp";
import image4 from "../../images/Dills/duh5.webp";
import image5 from "../../images/Dills/duh6.webp";
import image6 from "../../images/Dills/duhlogo.webp";




const images = [image1, image2, image3, image4, image5, image6]; // ... add more as needed



const Dills = () => {
  const title = "Dills Commercial";
  const description = "Dills commercial video";
  const image = logo;
  const url = "https://arsdop.com/commercials/dills";


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
      <iframe className={styles.iframe} src="https://player.vimeo.com/video/520286646" allowFullScreen></iframe>

        </div>
        {!modalOpen && (
          <>
        <Link to="/commercials/sphera">
        <button className={styles.rightArrow}>{">"}</button>
        </Link>

        <Link to="/commercials/dogs">
        <button className={styles.leftArrow}>{"<"}</button>
        </Link>
        </>
        )}

        <div className={styles.title}>
  <h2 className={styles.projectTitle}>Advertising video for the Dilis Parfum</h2>
</div>

<div className={styles.creditsContainer}>
  <div className={styles.creditsList}>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Director:</h2> Roman Gorsky</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>DOP:</h2> Arseny Bogunov</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Producer:</h2> Ulyana Khamenia</div>
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
      onClose={() => {
        setCurrentIndex(null);
        setModalOpen(false); // Add this line
      }}
      onLeftArrowClick={navigateLeft}
      onRightArrowClick={navigateRight}
      imageStyle={imageStyle} 
    />
  )}
</div>
</div>
  );
}

export default Dills;




