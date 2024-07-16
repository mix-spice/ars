import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/narrative/GrowMotion.module.css';
import GameOver from "../../images/gameOver/logo.jpeg"
import Metadata from '../../components/Metadata';
import Modal from '../../components/Modal';


import image1 from "../../images/gameOver/gameover1.webp"
import image11 from "../../images/gameOver/game101.webp"
import image12 from "../../images/gameOver/game102.webp"
import image2 from "../../images/gameOver/game202.webp"
import image3 from "../../images/gameOver/game203.webp"
import image4 from "../../images/gameOver/game206.webp"
import image7 from "../../images/gameOver/game2032.webp"
import image8 from "../../images/gameOver/gameover2.webp"
import image9 from "../../images/gameOver/game2013.webp"
import image10 from "../../images/gameOver/gameover2.webp"
import image6 from "../../images/gameOver/game2010.webp"
import image5 from "../../images/gameOver/game207.webp"



const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];


const GrowMotion = () => {
  const title = "Grow Motion Narrative";
  const description = "Grow Motion - Short Film";
  const image = image1;
  const url = "https://arsdop.com/narrative/grow-motion";



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
      <iframe className={styles.iframe} src="https://player.vimeo.com/video/879129727?h=d7de9d5724" allowFullScreen></iframe>
      </div>
      {!modalOpen && (
        <>
      <Link to="/narrative/life">
        <button className={styles.rightArrow}>{">"}</button>
        </Link>

        <Link to="/narrative/space">
        <button className={styles.leftArrow}>{"<"}</button>
        </Link>
        </>
        )}

        <div className={styles.title}>
        <h2 className={styles.projectTitle}>Grow Motion - Short Film</h2>
        </div>

        <div className={styles.projectDescription}>
        <p className={styles.paragraph} style={{marginBottom:'15px'}}>
         This short film is a vivid homage to the iconic German series  "4 Blocks ",
         but with its own unique twist. It's an unconventional commercial endeavour intertwining promotion for a startup engaged in medical cannabis cultivation with the theme of legalization. 
         </p><p className={styles.paragraph}>
         Shot in Switzerland and Germany, our success on a limited budget is attributed to talented film crew and  actors and the use of a single zoom lens from P+S Technik, 
         ensuring efficiency without compromising quality.
        </p>   
        </div>

        <div className={styles.creditsContainer}>
  <div className={styles.creditsList}>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Short movie for</h2> @growmotion.official & @growmotion.nft </div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Dir:</h2> @danielzlotin</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Producer:</h2> @edindzinic</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Script:</h2> @Hazir489, @serhatcanalimfilm</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>DOP:</h2> @ars_dop</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Gaffers:</h2> @nazargolub, @marcomachtlicht</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Light assistants:</h2> @n.grigorishin, Kai Steinke</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Sound:</h2> Hayat van Eck, Salvator Lleshi</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Production assistant:</h2> René Seefeldt, Aleksey Razumnikov</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>1AC:</h2> Tibor Togbonou & @domenolasini</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Drone:</h2> @ticon.media</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Actors:</h2> @massiv, @sami_nasser_offiziell, @rauandtaleb, @armankashanii, @joergwestphal_official, @BEN.GREEN.420, @bernd_woellmer</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Makeup:</h2> Nathalie Stamm & Samiha Masovic</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Setrunner:</h2> Nils Holland</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>SFX:</h2> Eric Zumkley</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Edit:</h2> @danielzlotin</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Music:</h2> Alexander Tchorny</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Sound design:</h2> Khilobok Valeriy</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Dialog Editing:</h2> Roman Homeniuk</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Re-recording mixer / Ton Supervising:</h2> Maksym Ponomarchuk</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Color Grading:</h2> @tikhonov.colorist</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>VFX:</h2> Dmitro Sukhodol</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Production design:</h2> Setpartner.de</div>
    </div>
    <div className={styles.creditItem} style={{ marginBottom: '15px' }}>
      <div className={styles.creditName}><h2>Executive Producer:</h2> @Hazir489 & Malic Bargiel</div>
    </div>
    
    <div className={styles.creditItem}>
      <div className={styles.creditName}>arri alexa mini lf + PS technik zoom
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
      imageStyle={imageStyle}/>
    
  )}
</div>
</div>

  );
}

export default GrowMotion;




