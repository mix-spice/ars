import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/narrative/Life.module.css';
import logo from '../../images/Life/imgLogo.webp'
import Modal from '../../components/Modal';
import Metadata from '../../components/Metadata';

import image1 from "../../images/Life/img1.webp"
import image2 from "../../images/Life/img2.webp"
import image3 from "../../images/Life/img3.webp"
import image4 from "../../images/Life/img4.webp"
import image5 from "../../images/Life/img5.webp"
import image6 from "../../images/Life/img6.webp"
import image7 from "../../images/Life/img7.webp"
import image8 from "../../images/Life/img8.webp"
import image9 from "../../images/Life/img9.webp"
import image10 from "../../images/Life/img10.webp"
import image11 from "../../images/Life/img11.webp"
import image12 from "../../images/Life/img12.webp"
import image13 from "../../images/Life/img13.webp"
import image14 from "../../images/Life/img14.webp"
import image15 from "../../images/Life/img15.webp"


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15]; // ... add more as needed



const Life = () => {
  const title = "Life Narrative";
  const description = "Midlife – trailer";
  const image = logo;
  const url = "https://arsdop.com/narrative/life";



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
      
            <iframe className={styles.iframe} src="https://player.vimeo.com/video/642194529?h=b0a4747595"allowFullScreen ></iframe>
      </div>

      {!modalOpen && (
        <>
 
      <Link to="/narrative/animals">
        <button className={styles.rightArrow}>{">"}</button>
        </Link>

        <Link to="/narrative/grow-motion">
        <button className={styles.leftArrow}>{"<"}</button>
        </Link>
        </>
      )}
        <div className={styles.title}>
        <h2 className={styles.projectTitle}>Midlife – trailer</h2>
        </div>

        
        <div className={styles.projectDescription}>
        <p className={styles.paragraph} style={{ marginBottom: '15px' }}>
        Egor returns to Ukraine after a challenging five years in America. 
        His marriage and business have fallen apart. 
        And now he hopes to start from scratch back home. 
        Zofia broke up with her girlfriend and now dreams of becoming a mother.
        Egor is the perfect donor for her future child. 
        </p> <p className={styles.paragraph} >
        That is a very complicated relationship in which Egor and Zofia try to use each 
        other in a race to chase their dream.
        </p>     
        </div>


        <div className={styles.creditsContainer}>
  <div className={styles.creditsList}>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Dir:</h2> Alexei Sobolev</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Dop:</h2> Arseny Bogunov</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Art dir:</h2> Diana Sazonova</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Producer:</h2> Olga Zhurzhenko, Ukrkino</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Actors:</h2> Anna Kuzina, Igor Aronov</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Gaffer:</h2> Godenko Danil</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Makeup:</h2> Daria Alekseeva</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Focus puller:</h2> Andrii Protsenko</div>
    </div>
    <div className={styles.creditItem} style={{ marginBottom: '15px' }}>
      <div className={styles.creditName}><h2>Color:</h2> Alexei Tikhonov</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}>arri alexa mini + cooke anamorphic</div>
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

export default Life;