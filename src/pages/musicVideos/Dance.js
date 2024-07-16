import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/musicVideos/SpheraMusic.module.css';
import Metadata from '../../components/Metadata';
import Modal from '../../components/Modal';

import image1 from "../../images/Dance/1.webp"
import image2 from "../../images/Dance/2.webp"
import image3 from "../../images/Dance/3.webp"
import image4 from "../../images/Dance/4.webp"
import image5 from "../../images/Dance/5.webp"
import image6 from "../../images/Dance/6.webp"
import image7 from "../../images/Dance/7.webp"
import image8 from "../../images/Dance/8.webp"
import image9 from "../../images/Dance/9.webp"
import image10 from "../../images/Dance/10.webp"
import image11 from "../../images/Dance/11.webp"
import image12 from "../../images/Dance/12.webp"



const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12]; // ... add more as needed



const Dance = () => {

    const title = "Dance Music Video";
    const description = "Dance – dance video project";
    const image = image1;
    const url = "https://arsdop.com/music-videos/dance";
  

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
      <iframe className={styles.iframe} src="https://player.vimeo.com/video/955543060" allowFullScreen></iframe>
        </div>
        {!modalOpen && (
          <>
        <Link to="/music-videos/pohoda">
        <button className={styles.rightArrow}>{">"}</button>
        </Link>

        <Link to="/music-videos/nasteisha">
        <button className={styles.leftArrow}>{"<"}</button>
        </Link>
         </>
        )}




        <div className={styles.title}>
        <h2 className={styles.projectTitle}>Anastasiya Rydlevskaya – Dance on my own</h2>
        </div>

        <div className={styles.projectDescription}>
                <p className={styles.paragraph} style={{marginBottom: '15px'}}>
                The idea of the video is that people often pass judgments on each other. The main characters judge the heroine, Nastya, while the house symbolizes the society we all live in.
              </p>
                <p className={styles.paragraph}>
                The video becomes a symbol of inner transformation, allowing all the characters to break free from the chains of judgment and realize the power of sincere self-acceptance. 
                </p>
        </div>

        <div className={styles.creditsContainer}>
  <div className={styles.creditsList}>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Artist:</h2> Anastasia Rydlevskaya @arydlevskaya_art</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Sound Production:</h2> INSOMNIA @insomabitch</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Production:</h2> КЛIК</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>CEO:</h2> Nikita Abramchik @the.vektor</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Creative Director:</h2> Alina Mazavets @klacayu_po_fotiku</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Producer:</h2> David Petrosyan @davidv.a.n</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Video credits:</h2></div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Director:</h2> Dasha Zahorskaya @madsangria</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>DOP:</h2> Arseny Bogunov @ars_dop</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Line Producer, Casting:</h2> Palina Porka @po_rka</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>1AC:</h2> Oleksandr Drobilko @drobilko.o</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Steadicam:</h2> Oskar Lui @13luioz1</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Gaffer:</h2> Andrey @gaffer_light_pl</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Light:</h2> Alexandr @patkanian_dp</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Set Designer:</h2> Anton Yurkevich @_anton_yurkevich_</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Set Manager:</h2> Vadim Mats @mats.raw</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Stylist:</h2> Valentyna Nesavchyn @nesavchyn</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>MUA:</h2> Anastasia Mateychik @mateynastya</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Casting</h2></div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Actress:</h2> Lile @selflovingbird</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Actress:</h2> Serafima @serafimakiseleva_</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Actress:</h2> Renata @renata.szkup</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Actor:</h2> Siarhei @mr_unvrs</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Actor:</h2> Hayk @hikegasparpatrik</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Editor:</h2> Dima Verhushkin @turbodimon</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Colorist:</h2> John Krylov @johnkrylov</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>VFX Artist:</h2> Kateryna Zlobina</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>3D Artist:</h2> Kostyantyn Kulakov @kulakovkostantin87</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>VFX Artist:</h2> Mary Yushko @maryyushka</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>VFX Artist:</h2> Volodymyr Levytskyi @vladimirlevitsky</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Credits Design:</h2> Denis Polyakov @polyyyakov</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Rental:</h2> Koi Studio @koistudiorental</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Driver:</h2> Piotr mielony @piotrmielony</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Special Thanks:</h2> Artem Dulub @iceon_mk</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Location:</h2> @obiekt_zagubiony</div>
    </div>
    <div className={styles.creditItem} style={{ marginBottom: '15px' }}>
      <div className={styles.creditName}>red epic dragon + illumina MKI + optex borescope set + dzofilm zoom</div>
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

export default Dance;




