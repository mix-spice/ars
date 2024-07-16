import React, { useState,useEffect } from 'react';
import styles from '../styles/commercials/Dairy.module.css';
import { Link } from 'react-router-dom';
import logo from "../../images/Carrier/imgLogo.webp";
import Metadata from '../../components/Metadata';
import Modal from '../../components/Modal';

import image1 from "../../images/Dairy/img1.webp"
import image2 from "../../images/Dairy/img2.webp"
import image3 from "../../images/Dairy/img3.webp"
import image4 from "../../images/Dairy/img4.webp"
import image5 from "../../images/Dairy/img5.webp"
import image6 from "../../images/Dairy/img6.webp"
import image7 from "../../images/Dairy/img7.webp"
import image8 from "../../images/Dairy/img8.webp"
import image9 from "../../images/Dairy/img9.webp"
import image10 from "../../images/Dairy/img10.webp"
import image11 from "../../images/Dairy/img11.webp"
import image12 from "../../images/Dairy/img12.webp"


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12]; // ... add more as needed



const Dairy = () => {
  const title = "Dairy Commercial";
  const description = "Dairy commercial video";
  const image = logo;
  const url = "https://arsdop.com/commercials/dairy";


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
      <iframe className={styles.iframe} src="https://player.vimeo.com/video/727733923"allowFullScreen></iframe>
        </div>
        {!modalOpen && (
          <>
        <Link to="/commercials/bolt">
        <button className={styles.rightArrow}>{">"}</button>
        </Link>

        <Link to="/commercials/career">
        <button className={styles.leftArrow}>{"<"}</button>
        </Link>
        </>
     )}
        <div className={styles.title}>
        <h2 className={styles.projectTitle}>Dairy – Krunka</h2>
        </div>

        <div className={styles.mainContent}>
      {/* Other content */}
      <div className={styles.creditsContainer}>
        <div className={styles.creditsList}>
        
          <div className={styles.creditItem}>
            <div className={styles.creditName}>arri alexa mini + cooke s5</div>
          </div>

          {/* Continue listing other credits as needed */}
        </div>
     
  </div>
</div>
<div className="photoSection flex justify-center items-start flex-col max-w-[1130px] mx-auto 2xl:max-w-[1130px] xxl:max-w-[1420px]">
  <div className="columns-1 md:columns-2 lg:columns-3 gap-4 p-0">
    {images.map((src, index) => (
      <div key={index} className="mb-4 break-inside-avoid-column">
        <img 
          src={src} 
          alt={`Image ${index}`}
          className="h-auto object-contain w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.3333%-1rem)] xl:w-[calc(33.3333%-1rem)] xxl:w-[calc(33.3333%-1rem)]"
          onClick={() => handleClick(index)} 
        />
      </div>
    ))}
  </div>
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

export default Dairy;