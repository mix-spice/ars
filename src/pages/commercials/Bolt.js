import React, { useState, useEffect  } from 'react';
import styles from '../styles/commercials/Bolt.module.css';
import { Link } from 'react-router-dom';
import logo from "../../images/Bolt/boltLogo.webp";
import Metadata from '../../components/Metadata';
import Modal from '../../components/Modal';

import image1 from "../../images/Bolt/bolt1.webp";
import image2 from "../../images/Bolt/bolt2.webp";
import image3 from "../../images/Bolt/bolt3.webp";
import image4 from "../../images/Bolt/bolt4.webp";
import image5 from "../../images/Bolt/bolt5.webp";
import image6 from "../../images/Bolt/bolt6.webp";
import image7 from "../../images/Bolt/bolt7.webp";
import image8 from "../../images/Bolt/bolt8.webp";
import image9 from "../../images/Bolt/boltLogo.webp";




const images = [image1, image2, image3, image4, image5, image6, image7, image8]; // ... add more as needed



const Bolt = () => {
  const title = "Bolt Commercial";
  const description = "Bolt commercial video";
  const image = logo;
  const url = "https://arsdop.com/commercials/bolt";



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
      <iframe className={styles.iframe} src="https://player.vimeo.com/video/561699876" allowFullScreen></iframe>
        </div>
        {!modalOpen && (
          <>
        <Link to="/commercials/dogs">
        <button className={styles.rightArrow}>{">"}</button>
        </Link>

        <Link to="/commercials/dairy">
        <button className={styles.leftArrow}>{"<"}</button>
        </Link>
        </>
        )}

        <div className={styles.title}>
        <h2 className={styles.projectTitle}>Bolt – Taxi</h2>
        </div>
    
        <div className={styles.projectDescription}>
        <p className={styles.paragraph} style={{marginBottom:'20px'}}>
        The video depicted two states of the character depending on his job. 
        In the first scenario, he feels discomfort and wants to leave. 
        </p>
        <p className={styles.paragraph} >
        However, as soon as he gets into his car and accepts a job through the Bolt app, 
        we see him transform into a different person: He becomes inspired and enjoys his work, as the car represents his freedom and passion.</p>
        </div>

<div className={styles.creditsContainer}>
  <div className={styles.creditsList}>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Director:</h2> @gorskyiroma</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>DOP:</h2> @ars_dop</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Producer:</h2> @alexandearspirin</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Color:</h2> @tikhonov.colorist</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>1AD:</h2> @dasha.keyl</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Production Design:</h2> @charlie_kiddin @michael_vandrare</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Gaffer:</h2> @husarleo</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Make-up:</h2> @anita_sova</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>BTS:</h2> @defaultdesign</div>
    </div>
    <div className={styles.creditItem} style={{ marginBottom: '15px' }}>
      <div className={styles.creditName}><h2>Help:</h2> @radford88 @mgpru @stavpinsky @syoshi_______________kun</div>
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

export default Bolt;




