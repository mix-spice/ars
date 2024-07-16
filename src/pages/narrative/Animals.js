import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/commercials/Career.module.css';
import Modal from '../../components/Modal';
import Metadata from '../../components/Metadata';

import animalsLogo from '../../images/Animals/logo.webp';

import image8 from "../../images/Animals/1.webp"
import image2 from "../../images/Animals/2.webp"
import image3 from "../../images/Animals/3.webp"
import image4 from "../../images/Animals/4.webp"
import image5 from "../../images/Animals/5.webp"
import image6 from "../../images/Animals/6.webp"
import image7 from "../../images/Animals/7.webp"
import image1 from "../../images/Animals/8.webp"
import image9 from "../../images/Animals/9.webp"
import image10 from "../../images/Animals/10.webp"
import image11 from "../../images/Animals/11.webp"
import image12 from "../../images/Animals/12.webp"
import image13 from "../../images/Animals/13.webp"


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13]; // ... add more as needed



const Animals = () => {
  const title = "Animals Narrative";
  const description = "Animals - Short Film";
  const image = animalsLogo;
  const url = "https://arsdop.com/narrative/animals";



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
      <img className={styles.iframe} src={animalsLogo}></img>
        </div>
        {!modalOpen && (
           <>
        <Link to="/narrative/arka">
        <button className={styles.rightArrow}>{">"}</button>
        </Link>

        <Link to="/narrative/life">
        <button className={styles.leftArrow}>{"<"}</button>
        </Link>
          </>
        )}

        <div className={styles.title}>
        <h2 className={styles.projectTitle}>Magical animals - short film</h2>
        </div>

        <div className={styles.projectDescription}>
        <p className={styles.paragraph} style={{ marginBottom: '15px' }}>"The documentary introduces us to aspiring artist LERA (27) from Minsk, her artistic career, the ups and downs she faced as an artist in Poland, and her unique approach to painting. She sustains herself through her craft, using classical oil paint to create intangible works."
        </p>
        </div>

        <div className={styles.creditsContainer}>
        <div className={styles.creditsList}>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Country:</h2> Germany, Poland</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Production Company:</h2> @luckylucianopictures</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Director:</h2> @v.bololo (Veronika Bolotina)</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>DOP:</h2> @ars_dop</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>1AD:</h2> @moregoru (Anna Gnatenko)</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Production Designer:</h2> @natalia.anna.matejka</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Production Manager:</h2> @nadialyudchik (Nadia Lyudchik)</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Production Assistant:</h2> @juleeschneider (Julia Schneider)</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Protagonist:</h2> @lera.dubitskaya</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>1AC:</h2> @jasieksadowski (Jan Sadowski)</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>2AC:</h2> @kriostnaya</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Gaffer:</h2> Aleksander Sakhno</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Sound Operator:</h2> Sergio Szlomo Labandzi-Jewski</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Rentals:</h2> @panavisionofficial @openmediawarszawa @littlebeast.pl</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Backstage:</h2> @rawmory @alexskidan</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Light Assistant:</h2> @_patkanian_ (Aleksandr Patkanian)</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Partners:</h2></div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Editor:</h2> Dima Verhushkin</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Colorist:</h2> Alberto Rodríguez</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}><h2>Post Production House:</h2> Artic Pospro</div>
            </div>
            <div className={styles.creditItem} style={{ marginBottom: '15px' }}>
            <div className={styles.creditName}><h2>Processing:</h2> haghefilm</div>
            </div>
            <div className={styles.creditItem}>
            <div className={styles.creditName}>arriflex SR3 + panavision primo lenses (kodak vision3 16mm) elmo Super 108M super 8 (kodak vision3 super 8mm)</div>
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
  };

export default Animals;




