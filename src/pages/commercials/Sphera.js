import React, { useState,useEffect  } from 'react';
import styles from '../styles/commercials/Sphera.module.css';
import { Link } from 'react-router-dom';
import logo from "../../images/Sphera/sphera1.webp";
import Metadata from '../../components/Metadata';
import Modal from '../../components/Modal';

import image1 from "../../images/Sphera/img1.webp"
import image2 from "../../images/Sphera/img2.webp"
import image3 from "../../images/Sphera/img3.webp"
import image4 from "../../images/Sphera/img4.webp"
import image5 from "../../images/Sphera/img5.webp"
import image9 from "../../images/Sphera/img6.webp"
import image7 from "../../images/Sphera/img7.webp"
import image8 from "../../images/Sphera/img8.webp"
import image6 from "../../images/Sphera/img9.webp"
import image10 from "../../images/Sphera/img10.webp"
import image11 from "../../images/Sphera/img11.webp"
import image12 from "../../images/Sphera/img12.webp"


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12]; // ... add more as needed



const Sphera = () => {
  const title = "Sphera Commercial";
  const description = "Sphera festival trailer";
  const image = logo;
  const url = "https://arsdop.com/commercials/sphera";


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
      <iframe className={styles.iframe} src="https://player.vimeo.com/video/777315675" allowFullScreen></iframe>

        </div>
        {!modalOpen && (
          <>
        <Link to="/commercials/insportsline">
        <button className={styles.rightArrow}>{">"}</button>
        </Link>

        <Link to="/commercials/dills">
        <button className={styles.leftArrow}>{"<"}</button>
        </Link>
        </>
         )}
        <div className={styles.title}>
        <h2 className={styles.projectTitle}>Sphera merchandise</h2>
        </div>

        <div className={styles.projectDescription}>
        <p className={styles.paragraph} style={{ marginBottom: '15px' }}>Ecological handmade merchandise made from nettle. sphera° is a lifestyle that combines love for nature, music, and movement. Working on this project, we have placed great emphasis on our creative taste and vision. 
      </p>  
        <p className={styles.paragraph }>
        Relying solely on our ambitions, without a budget and in a short period of time, we found a solution to convey not only the quality of the product but also the essence of the sphera° philosophy.
       </p> </div>


        <div className={styles.creditsContainer}>
  <div className={styles.creditsList}>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Client:</h2> @spherafest</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Dir:</h2> @seryijah</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Dop:</h2> @ars_dop</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Producer:</h2> @sharfman.karolina</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Equipment:</h2> @myrental.by</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Location:</h2> @hfa.gallery, @matreshka_photostudio</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Backstage:</h2> @creatingyouthproject</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Film photo:</h2> @krishtaphoto</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Gaffer:</h2> @sid3walk</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Stylist:</h2> @liz_vasilevskaya</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Make-up:</h2> @tanya_chebblkina</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>1AC:</h2> @metivan7</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Casting:</h2> @sooolar_mooon</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Help:</h2> @evgrafovareality</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Property:</h2> @dashka_pravilo</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Color:</h2> @tikhonov.colorist</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Edit:</h2> @turbodimon</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Music:</h2> @charley_vince</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Partners:</h2> @tea_mail, @myrental.by, @beatheadcom</div>
    </div>
    <div className={styles.creditItem} style={{ marginBottom: '15px' }}>
      <div className={styles.creditName}><h2>Actors:</h2> @panisativa, @veganika__, @airapairap, @bj.skelbie, @rexigner</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}>sony FX6 + sigma high speed</div>
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

export default Sphera;




