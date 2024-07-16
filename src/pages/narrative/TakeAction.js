import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/narrative/TakeAction.module.css';
import takeAction from '../../images/TakeAction/takeactLogo.webp';
import Modal from '../../components/Modal';
import Metadata from '../../components/Metadata';
import { Helmet } from 'react-helmet';

import image8 from "../../images/TakeAction/takeact1.webp"
import image2 from "../../images/TakeAction/takeact4.webp"
import image3 from "../../images/TakeAction/takeact7.webp"
import image4 from "../../images/TakeAction/takeact11.webp"
import image5 from "../../images/TakeAction/takeact13.webp"
import image6 from "../../images/TakeAction/takeact15.webp"
import image7 from "../../images/TakeAction/takeact19.webp"
import image1 from "../../images/TakeAction/takeact20.webp"
import image9 from "../../images/TakeAction/takeact54.webp"
import image10 from "../../images/TakeAction/takeact23.webp"
import image11 from "../../images/TakeAction/takeact46.webp"
import image12 from "../../images/TakeAction/takeact55.webp"


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12]; // ... add more as needed



const TakeAction = () => {
  const title = "Take Action Narrative";
  const description = "Take Action - teaser";
  const image = takeAction;
  const url = "https://arsdop.com/narrative/take-action";

const [currentIndex, setCurrentIndex] = useState(null);
const [modalOpen, setModalOpen] = useState(false); // Track whether the modal is open
const [imageStyle, setImageStyle] = useState({ width: "600px", height: "auto", objectFit: 'contain' });

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
         <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
     
    
      <div className={styles.project}>
      <iframe className={styles.iframe} src="https://player.vimeo.com/video/944105713" allowFullScreen></iframe>
        </div>
        {!modalOpen && (
           <>
        <Link to="/narrative/space">
        <button className={styles.rightArrow}>{">"}</button>
        </Link>

        <Link to="/narrative/arka">
        <button className={styles.leftArrow}>{"<"}</button>
        </Link>
          </>
        )}

        <div className={styles.title}>
        <h2 className={styles.projectTitle}>Take action - short film teaser</h2>
        </div>

        <div className={styles.projectDescription}>
        <p className={styles.paragraph} style={{ marginBottom: '15px' }}>"The desert is a place where you can find yourself and lose yourself. Wake up and take action".</p>
        <p className={styles.paragraph}>The world is unpredictable. Many of us found ourselves in a situation where we needed to start life from scratch. 
          It’s like a desert. There are so many routes and it’s difficult to know which one is right for us. 
          Which direction will make us truly happy. This story is about a dancer, passion for dancing helped him find the right route and destiny.</p>
        </div>

        <div className={styles.creditsContainer}>
  <div className={styles.creditsList}>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Director: </h2> Natali Rozhok</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>DOP: </h2> Arseny Bogunov</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Film editor: </h2> Dmitry Verhushkin</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Sound: </h2> Ilya Semashkevich</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Color: </h2> Olha Korzhynska</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Design: </h2> Denis Polyakov</div>
    </div>
    <div className={styles.creditItem}>
    <div className={styles.creditName}>
        <h2>Dancers: </h2> 
        <span> MOHSEN AL ABDALLAH,</span>
        <span> Jisel Rengifo,</span>
        <span> Teo Krl,</span>
        <span> Mad off project</span>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Cast: </h2> Mad of project</div>
    </div>
   
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
  };

export default TakeAction;




