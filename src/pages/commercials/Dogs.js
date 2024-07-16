import React, { useState,useEffect  } from 'react';
import styles from '../styles/commercials/Dogs.module.css';
import { Link } from 'react-router-dom';
import logo from "../../images/Dogs/Dogs1.webp";
import Metadata from '../../components/Metadata';
import Modal from '../../components/Modal';

import image1 from "../../images/Dogs/Dogs1.webp";
import image2 from "../../images/Dogs/Dogs2.webp";
import image3 from "../../images/Dogs/Dogs3.webp";
import image4 from "../../images/Dogs/Dogs4.webp";
import image5 from "../../images/Dogs/Dogs5.webp";
import image6 from "../../images/Dogs/Dogs6.webp";
import image7 from "../../images/Dogs/Dogs7.webp";
import image8 from "../../images/Dogs/Dogs8.webp";
import image9 from "../../images/Dogs/Dogs9.webp";



const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9]; // ... add more as needed



const Dogs = () => {
  const title = "Dogs Commercial";
  const description = "Dogs commercial video";
  const image = logo;
  const url = "https://arsdop.com/commercials/dogs";


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

      <iframe className={styles.iframe} src="https://player.vimeo.com/video/500336022" allowFullScreen></iframe>
        </div>
        {!modalOpen && (
          <>
        <Link to="/commercials/dills">
        <button className={styles.rightArrow}>{">"}</button>
        </Link>

        <Link to="/commercials/bolt">
        <button className={styles.leftArrow}>{"<"}</button>
        </Link>

        <div className={styles.title}>
        <h2 className={styles.projectTitle}>Happy Gree – Commercial</h2>
        </div>
        </>
    )}
        <div className={styles.creditsContainer}>
  <div className={styles.creditsList}>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Production:</h2> Prostovideo</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Director:</h2> @gorskyiroma</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>DOP:</h2> @ars_dop</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Prompt:</h2> Ruslan Harap</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Producer:</h2> @juliyavasilitsa</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Gaffer:</h2> Vadim Terex</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Sound Dir:</h2> Sergei Kuchinskii</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>1AC:</h2> @chernyshsasha</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>2AC:</h2> @evgeniy_chushkin</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Playback:</h2> Maxim Aleekseenko</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Make-up & Hair:</h2> @katerina_talkovskaya @talkovskaya.art</div>
    </div>
    <div className={styles.creditItem} style={{ marginBottom: '15px' }}>
      <div className={styles.creditName}><h2>Edit:</h2> @gorskyiroma</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}>arri alexa mini + master prime</div>
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

export default Dogs;




