import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/musicVideos/Mefedron.module.css';
import Metadata from '../../components/Metadata';
import Modal from '../../components/Modal';

import image1 from "../../images/Mefedron/img1.webp"
import image2 from "../../images/Mefedron/img2.webp"
import image3 from "../../images/Mefedron/img3.webp"
import image4 from "../../images/Mefedron/img4.webp"
import image5 from "../../images/Mefedron/img5.webp"
import image6 from "../../images/Mefedron/img6.webp"
import image7 from "../../images/Mefedron/img7.webp"
import image8 from "../../images/Mefedron/img8.webp"
import image9 from "../../images/Mefedron/img9.webp"
import image10 from "../../images/Mefedron/img10.webp"
import image11 from "../../images/Mefedron/img11.webp"
import image12 from "../../images/Mefedron/img12.webp"


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12]; // ... add more as needed



const Mefedron = () => {

  const title = "Mefedron Music Video";
  const description = "Nastya Lisa – Pohoda";
  const image = image1;
  const url = "https://arsdop.com/music-videos/pohoda";


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
      <iframe className={styles.iframe} src="https://www.youtube.com/embed/qmcUcwEVFuQ" allowFullScreen></iframe>
        </div>
        {!modalOpen && (
          <>
        <Link to="/music-videos/georgia">
        <button className={styles.rightArrow}>{">"}</button>
        </Link>

        <Link to="/music-videos/dance">
        <button className={styles.leftArrow}>{"<"}</button>
        </Link>
         </>
        )}

        <div className={styles.title}>
        <h2 className={styles.projectTitle}>Nastya Lisa - Pohoda</h2>
        </div>

        <div className={styles.creditsContainer}>
        <div className={styles.creditsList}>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Director and Editor: </h2> Amin Parpiev @amin.pomnit</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>DOP: </h2> Arseny Bogunov @ars_dop</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Producer: </h2> Anthony Shaguta @inotnantoni</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Producer Assistance: </h2> Nikita Shaguta @nshaguta</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Actor: </h2> Pavel Luxtale @Pavel_Luxtale</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Stylist: </h2> Victoria Centoloi @victoriacentoloj</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Dress: </h2> Inna Rek @inna_rek_atelier</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Hairstylist: </h2> Irenn Naydanova @irenn_naydanova</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Make-up: </h2> Snizhana Usova @usova_mua_permanent</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>1AC: </h2> Aleksandr Patkanian @Patkanian_dp</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Gaffer: </h2> Aliaksei Patapenka @alexpot_light</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Color: </h2> John Krylov @johnkrylov</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Backstage: </h2> Alex Filipowski @alex.filirowski</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Helper: </h2> Oleksandr Rusanov @acee__2k</div>
          </div>
          <div className={styles.creditItem} style={{ marginBottom: '15px' }}>
            <div className={styles.creditName}><h2>Thanks for VHS: </h2> @sashaponyal</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}>sony FX6 + sigma high speed + dzofilm </div>
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

export default Mefedron;




