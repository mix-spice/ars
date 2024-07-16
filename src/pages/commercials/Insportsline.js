import React, { useState,useEffect  } from 'react';
import styles from '../styles/commercials/Insportsline.module.css';
import { Link } from 'react-router-dom';
import logo from "../../images/Insportsline/sportLogo.webp";
import Metadata from '../../components/Metadata';
import Modal from '../../components/Modal';

import image1 from "../../images/Insportsline/img1.webp"
import image2 from "../../images/Insportsline/img2.webp"
import image3 from "../../images/Insportsline/img3.webp"
import image4 from "../../images/Insportsline/img4.webp"
import image5 from "../../images/Insportsline/img5.webp"
import image6 from "../../images/Insportsline/img6.webp"
import image7 from "../../images/Insportsline/img7.webp"
import image8 from "../../images/Insportsline/img8.webp"
import image9 from "../../images/Insportsline/img9.webp"
import image10 from "../../images/Insportsline/img10.webp"
import image11 from "../../images/Insportsline/img11.webp"
import image12 from "../../images/Insportsline/img12.webp"


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12]; // ... add more as needed



const Insportsline = () => {
  const title = "Insportsline Commercial";
  const description = "Insportsline commercial video";
  const image = logo;
  const url = "https://arsdop.com/commercials/insportsline";




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
      <iframe className={styles.iframe} src="https://player.vimeo.com/video/727734909" allowFullScreen></iframe>
        </div>

        {!modalOpen && (
        <>
        <Link to="/commercials/career">
        <button className={styles.rightArrow}>{">"}</button>
        </Link>

        <Link to="/commercials/sphera">
        <button className={styles.leftArrow}>{"<"}</button>
        </Link>
        </>
        )}

        <div className={styles.title}>
        <h2 className={styles.projectTitle}>Insportline – Czech Republic</h2>
        </div>

        <div className={styles.projectDescription}>
        <p className={styles.paragraph} style={{ marginBottom: '15px' }}>An captivating advertisement for a sports equipment store, 
        filmed in the Czech Republic with a minimal budget. 
        Natural sunlight was our primary source, supplemented by one artificial light for the opening scene. 
        Thanks to meticulous planning and specialized equipment for dynamic shots, we achieved outstanding results.
        </p>
         <p className={styles.paragraph}>
        Leveraging the legendary Leica R lenses further highlighted the beauty of the showcased products.
        This advertisement targeted three European countries.</p> 
     
        </div>

        <div className={styles.creditsContainer}>
    <div className={styles.creditsList}>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Client:</h2> @insportlinecz</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Director/Edit/Idea:</h2> @andriilagutin</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Dop:</h2> @ars_dop</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Production:</h2> @mgfilmcz</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Camercar:</h2> @secondunitpl</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Art Director:</h2> @aloisjurinek</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Focuspuller/1AC:</h2> @dlgvv</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>2AC:</h2> @oskex</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Gaffer:</h2> @ovsiannikovserov</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Best Boy:</h2> @mara_senar</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>SFX, Music:</h2> @sayhelooo_music</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>VFX:</h2> sorryallusernamesaretaken</div>
    </div>
    <div className={styles.creditItem} style={{ marginBottom: '15px' }}>
      <div className={styles.creditName}><h2>Color:</h2> @olegkupshukov</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}>arri alexa mini + Leica R</div>
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

export default Insportsline;




