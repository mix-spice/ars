import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/musicVideos/Nasteisha.module.css';
import logo from '../../images/SpheraMusic/imgLogo.webp'
import { Helmet } from 'react-helmet';
import Modal from '../../components/Modal';
import Metadata from '../../components/Metadata';

import image1 from "../../images/Nasteisha/img1.webp"
import image2 from "../../images/Nasteisha/img2.webp"
import image3 from "../../images/Nasteisha/img3.webp"
import image4 from "../../images/Nasteisha/img4.webp"
import image5 from "../../images/Nasteisha/img5.webp"
import image6 from "../../images/Nasteisha/img6.webp"
import image7 from "../../images/Nasteisha/img7.webp"
import image8 from "../../images/Nasteisha/img8.webp"
import image9 from "../../images/Nasteisha/img9.webp"
import image10 from "../../images/Nasteisha/img10.webp"
import image11 from "../../images/Nasteisha/img11.webp"
import image12 from "../../images/Nasteisha/img12.webp"
import image13 from "../../images/Nasteisha/img13.webp"
import image14 from "../../images/Nasteisha/img14.webp"
import image15 from "../../images/Nasteisha/img15.webp"


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15]; // ... add more as needed




const Nasteisha = () => {

  const title = "Nasteisha Music Video";
  const description = "NASTEISHA x INSOMNIA - SKY";
  const image = image1;
  const url = "https://arsdop.com/music-videos/nasteisha"; // Your actual URL

const [currentIndex, setCurrentIndex] = useState(null);
const [modalOpen, setModalOpen] = useState(false); // Track whether the modal is open
const [imageStyle, setImageStyle] = useState({ height: "600px", width: "auto", objectFit: 'contain' });

const handleClick = (index) => {
    setCurrentIndex(index);
    setModalOpen(true); // Open the modal
  };

const closeLightbox = () => {
    setCurrentIndex(null);
    setModalOpen(false); // Open the modal
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
      <iframe className={styles.iframe} src="https://player.vimeo.com/video/887664560" allowFullScreen></iframe>

      </div>
      {!modalOpen && (
        <>
      <Link to="/music-videos/dance">
        <button className={styles.rightArrow}>{">"}</button>
        </Link>

        <Link to="/music-videos/spheraMusic">
        <button className={styles.leftArrow}>{"<"}</button>
        </Link>
        </>
      )}
     
        <div className={styles.title}>
        <h2 className={styles.projectTitle}>NASTEISHA x INSOMNIA – SKY</h2>
        </div>
        <div className={styles.creditsContainer}>
  <div className={styles.creditsList}>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Music Video for:</h2> @itsnasteisha & @insomabitch</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Director:</h2> Darya Zahorskaya @madsangria</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>DOP:</h2> Arseny Bogunov @ars_dop</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Producer:</h2> Yana Savchuk @_n666k</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Edit:</h2> Sasha Ponyal</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Casting Director:</h2> Palina Porka @po_rka</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Styling:</h2> Fresh @fresholia</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Styling Assistant:</h2> Duven-Georgia Anasko @bruitduvent.brand</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Make-up/Hair:</h2> Julia Belchik @julli_belchik</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Set Design:</h2> @chernoslivph, @_n666k</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>1AC/Focus:</h2> Jakub Makowski @_makowski_</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>2nd AC:</h2> Tomasz Zonik @zohnnick</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Gaffer:</h2> Andrew Ovsyannikov @ovsiannikovserov</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Best Boy:</h2> Aleksei Potapenko @alexpot_light</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Steadicam:</h2> Andrii Koval @andriismith</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Color:</h2> Jan Almashan @almashanjan, @milo_postproduction</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Backstage Photo/Video:</h2> Polina Talai @talai.polina</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Photographer:</h2> Valeria Slivakova @chernoslivph</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Assistants:</h2> Margo @rawmory, Vitali @4eversens</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Special Thanks to:</h2> Little Beast @littlebeast.pl, Open Media @openmediawarszawa, @pawilon_bliska12, @nastyavakhova</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Thanks for Props:</h2> @worse404, @olyakozhemyak</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Cast:</h2> Maxi Zagorsky @maximzagorsky, Katia Cherniavska @cherniavs.ka, Jakub Czerniak @czernyjackob, Vlada Herasymchuk @takrada_vlada</div>
    </div>
    <div className={styles.creditItem} style={{ marginBottom: '15px' }}>
      <div className={styles.creditName}><h2>Dancer:</h2> Karolina Sharfman @sharfman.karolina</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}>red epic dragon + illumina s35 + laowa 12</div>
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

export default Nasteisha;




