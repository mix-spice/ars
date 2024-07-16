import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/narrative/Space.module.css';
import space from '../../images/space.jpg';
import Modal from '../../components/Modal';
import Metadata from '../../components/Metadata';

import image1 from "../../images/Space/space1.webp"
import image2 from "../../images/Space/space2.webp"
import image3 from "../../images/Space/space3.webp"
import image4 from "../../images/Space/space4.webp"
import image5 from "../../images/Space/space5.webp"
import image6 from "../../images/Space/space6.webp"
import image7 from "../../images/Space/space7.webp"
import image8 from "../../images/Space/space8.webp"
import image9 from "../../images/Space/space9.webp"


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9]; // ... add more as needed



const Space = () => {
  const title = "Space Narrative";
  const description = "Space – narrative";
  const image = image1;
  const url = "https://arsdop.com/narrative/space";



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
        <iframe className={styles.iframe} src="https://player.vimeo.com/video/717798808" allowFullScreen></iframe>
        </div>
        {!modalOpen && (
        <>
        <Link to="/narrative/grow-motion">
        <button className={styles.rightArrow}>{">"}</button>
        </Link>

        <Link to="/narrative/take-action">
        <button className={styles.leftArrow}>{"<"}</button>
        </Link>
         </>
        )}

        <div className={styles.title}>
        <h2 className={styles.projectTitle}>Space - narrative</h2>
        </div>

        <div className={styles.projectDescription}>
        <p className={styles.paragraph} style={{ marginBottom: '15px' }}>
        Unique shots, created using state-of-the-art LED walls with the finest pixel pitch, ensure high-quality images without any camera distortion. 
        During filming, we had to overcome angle limitations due to the screens' compact size, as well as tackle challenges with reflections in glass helmets. 
        </p>
        <p className={styles.paragraph}>
        This required devising more sophisticated lighting schemes and abandoning conventional illumination methods. To achieve a soft and pleasant visual with beautiful flares,
         the Cooke Anamorphic lenses were a perfect fit, seamlessly integrating into the narrative.
        </p>
        </div>

        <div className={styles.creditsContainer}>
  <div className={styles.creditsList}>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Production:</h2> @supamotion_inc</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Dirs:</h2> @supamotion_inc @vanabanana</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Dop:</h2> @ars_dop</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Art dir:</h2> @genadzi_tumelevich</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Producer:</h2>@lusi_tim</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>1AC: </h2> @arina_dop</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Studio:</h2> @bymovie_production</div>
      </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Rental:</h2> @myrental.by</div>
      </div>
      <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Stuntmen:</h2> @thesitnik</div>
      </div>
      <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Actor:</h2> @vi_akinchits</div>
        </div>
      <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Msuic:</h2> @neonknighttt</div>
        </div>
      <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Sounds:</h2> @nasa</div>
        </div>
      <div className={styles.creditItem} style={{ marginBottom: '15px' }}>
      <div className={styles.creditName}><h2>Edit:</h2> @ars_dop</div>
      </div>
   
    
      <div className={styles.creditItem}>
      <div className={styles.creditName}>arri alexa mini + cooke anamorphic </div>
      </div>
   

      
    </div>
    </div>

    <div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-custom mx-auto" className={styles.photoSection}>
    {images.map((src, index) => (
      <div key={index} className="px-2 sm:px-0" onClick={() => handleClick(index)}>
        <img 
          src={src} 
          alt={`Image ${index}`} 
          className="w-full h-auto object-cover max-w-full"
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
export default Space;




