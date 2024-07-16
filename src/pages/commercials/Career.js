import React, { useState, useEffect } from 'react';
import styles from '../styles/commercials/Career.module.css';
import { Link } from 'react-router-dom';
import logo from "../../images/Carrier/imgLogo.webp";
import Metadata from '../../components/Metadata';
import Modal from '../../components/Modal';

import image1 from "../../images/Carrier/img1.webp"
import image2 from "../../images/Carrier/img2.webp"
import image3 from "../../images/Carrier/img3.webp"
import image4 from "../../images/Carrier/img4.webp"
import image5 from "../../images/Carrier/img5.webp"
import image6 from "../../images/Carrier/img6.webp"
import image7 from "../../images/Carrier/img7.webp"
import image8 from "../../images/Carrier/img8.webp"
import image9 from "../../images/Carrier/img9.webp"
import image10 from "../../images/Carrier/img10.webp"
import image11 from "../../images/Carrier/img11.webp"
import image12 from "../../images/Carrier/img12.webp"


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12]; // ... add more as needed



const Career = () => {
  const title = "Career Commercial";
  const description = "Career commercial video";
  const image = logo;
  const url = "https://arsdop.com/commercials/career";


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
      <iframe className={styles.iframe} src="https://player.vimeo.com/video/564378177" frameBorder="0" allowFullScreen></iframe>
        </div>
        {!modalOpen && (
          <>
        <Link to="/commercials/dairy">
        <button className={styles.rightArrow}>{">"}</button>
        </Link>

        <Link to="/commercials/insportsline">
        <button className={styles.leftArrow}>{"<"}</button>
        </Link>
          </>
        )}
        <div className={styles.title}>
        <h2 className={styles.projectTitle}>A1 – mobile carrier</h2>
        </div>

        <div className={styles.projectDescription}>
        <p className={styles.paragraph} style={{marginBottom: '15px'}}>
        It was a grand shoot for the A1 mobile operator's ad campaign. 
        Our goal: to film 5 short videos in 5 different locations in just one day. 
        One standout challenge was capturing a girl driving a tram. 
        </p>
        <p  className={styles.paragraph}>
        We rented a tram, circling it around the city center while the director directed from another tram behind, using playback. 
        Thanks to meticulous planning and a professional team, we nailed every shot on time, without any hiccups.</p>
        </div>


     
      {/* Other content */}
      <div className={styles.creditsContainer}>
        <div className={styles.creditsList}>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Client:</h2> @a1</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Agency:</h2> @salmon_minsk</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Directors:</h2> Alexander Molokovych, Dmitry Basko</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>DOP:</h2> @ars_dop</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Art Director:</h2> @artmihus</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>1st AC:</h2> @evgeniy_chushkin</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Edit:</h2> @izzi_dullidov</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Gaffer:</h2> @dimaakunevi4</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Color:</h2> @tikhonov.colorist</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Focus Puller:</h2> @patseyeu</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Equipment:</h2> @photobuba</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Casting:</h2> @otravkina @casting_belarus</div>
          </div>
          <div className={styles.creditItem} style={{ marginBottom: '15px' }}>
            <div className={styles.creditName}><h2>Photo:</h2> @defaultdesign</div>
          </div>
          <div className={styles.creditItem}>
            <div className={styles.creditName}>arri alexa mini + cooke anamorphic </div>
          </div>

  
          {/* Continue listing other credits as needed */}
      
     
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
    )};
  </div>
  </div>
  );
}


export default Career;




