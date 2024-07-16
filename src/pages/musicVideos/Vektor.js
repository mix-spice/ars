import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/musicVideos/SpheraMusic.module.css';
import logo from '../../images/Vektor/img1.webp'
import Modal from '../../components/Modal';
import Metadata from '../../components/Metadata';

import image1 from "../../images/Vektor/img1.webp"
import image2 from "../../images/Vektor/img2.webp"
import image3 from "../../images/Vektor/img3.webp"
import image4 from "../../images/Vektor/img4.webp"
import image5 from "../../images/Vektor/img5.webp"
import image6 from "../../images/Vektor/img6.webp"
import image7 from "../../images/Vektor/img7.webp"
import image8 from "../../images/Vektor/img8.webp"
import image9 from "../../images/Vektor/img9.webp"
import image10 from "../../images/Vektor/img10.webp"
import image11 from "../../images/Vektor/img11.webp"
import image12 from "../../images/Vektor/img12.webp"
import image13 from "../../images/Vektor/img13.webp"
import image14 from "../../images/Vektor/img14.webp"
import image15 from "../../images/Vektor/img15.webp"


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15]; // ... add more as needed



const Vektor = () => {
  const title = "Vektor Music Video";
  const description = "Vektor – 08:00 in Minsk";
  const image = logo;
  const url = "https://arsdop.com/music-videos/vektor";


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
      {!modalOpen && (
           <>
      <Link to="/music-videos/spheraMusic">
        <button className={styles.rightArrow}>{">"}</button>
        </Link>

        <Link to="/music-videos/georgia">
        <button className={styles.leftArrow}>{"<"}</button>
        </Link>
        </>
      )}
         
<iframe     className={styles.iframe}
          src="https://www.youtube.com/embed/_UsCDwr2mG0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
          </iframe>
        </div>

        <div className={styles.title}>
        <h2 className={styles.projectTitle}>Vektor – 08:00 in Minsk</h2>
        </div>

        <div className={styles.creditsContainer}>
        <div className={styles.creditsList}>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Director:</h2> @andrii.lagutin</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>DOP:</h2> @ars_dop</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Producer:</h2> @davidv.a.n</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Gaffer:</h2> @gaffer_light_pl</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>1AC/Focuspuller:</h2> @daniil.hayou</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Assistant Director:</h2> @rawmory</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Photo:</h2> @klacayu_po_fotiku</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Style:</h2> @fresholia</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Props:</h2> @shanz_takker</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Admin:</h2> @kokokolesnyk</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Edit:</h2> @andrii.lagutin</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Color:</h2> @igor_pavluk</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Trailer:</h2> @dmitrylogan</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Driver:</h2> @piotrmielony</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Rental:</h2> @littlebeast.pl</div>
    </div>
    <div className={styles.creditItem} style={{ marginBottom: '15px' }}>
      <div className={styles.creditName}><h2>Special thanks:</h2> @katja_lisitina @rokez.sound @most8 woodmadegomel</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}>red epic dragon + illumina s35 + laowa 12 </div>
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


export default Vektor;




