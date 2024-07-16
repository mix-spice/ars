import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/narrative/TakeAction.module.css';
import Arka from '../../images/Arka/logo.webp';
import Modal from '../../components/Modal';
import Metadata from '../../components/Metadata';
import image1 from "../../images/Arka/1.webp"
import image2 from "../../images/Arka/2.webp"
import image3 from "../../images/Arka/3.webp"



const images = [image1, image2, image3]; // ... add more as needed



const Ark = () => {
  const title = "Arka Narrative";
  const description = "Arka - short film";
  const image = image1;
  const url = "https://arsdop.com/narrative/arka";



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
        <Metadata title={title} description={description} image={image} url={url} />
    
     
    
      <div className={styles.project}>
      <iframe className={styles.iframe} src="https://player.vimeo.com/video/953179378" allowFullScreen></iframe>
        </div>
        {!modalOpen && (
           <>
        <Link to="/narrative/take-action">
        <button className={styles.rightArrow}>{">"}</button>
        </Link>

        <Link to="/narrative/animals">
        <button className={styles.leftArrow}>{"<"}</button>
        </Link>
          </>
        )}

        <div className={styles.title}>
        <h2 className={styles.projectTitle}>Arka - short film</h2>
        </div>

        <div className={styles.projectDescription}>
        <p className={styles.paragraph} style={{ marginBottom: '15px' }}>"The documentary introduces us to aspiring artist LERA (27) from Minsk, her artistic career, the ups and downs she faced as an artist in Poland, and her unique approach to painting. She sustains herself through her craft, using classical oil paint to create intangible works."
        </p>
        </div>

        <div className={styles.creditsContainer}>
        <div className={styles.creditsList}>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Workshop:</h2> Wajda School workshop scene @wajda_school_and_studio</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Dir:</h2> Paweł Herman @byhrmn_</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Script:</h2> Maja Głogowska @majaglogowska</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Starring:</h2> @warrchol, @mr.kowalunas</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>DOP:</h2> Arseny Bogunov @ars_dop</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>1AC:</h2> Stachu Furman</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>2AC:</h2> Piotr Kułakowski</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Gear:</h2> Stachu Furman, Piotr Kułakowski</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Sound:</h2> Dimitrij Fedorovych</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Sound post prod:</h2> Eugene Dziachek @zhenyadiachek</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Color:</h2> John Krylov @johnkrylov</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>2AD:</h2> Maja Głogowska</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>1AD:</h2> Maksymilian Jaworski</div>
            </div>
            <div className={styles.creditItem} style={{ marginBottom: '15px' }}>
            <div className={styles.creditName}><h2>Artistic supervision:</h2> Kinga Dębska</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}>red komodo + sigma high speed zoom 50-100</div>
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

export default Ark;




