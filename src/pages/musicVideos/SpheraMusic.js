import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/musicVideos/SpheraMusic.module.css';
import logo from '../../images/SpheraMusic/imgLogo.webp'
import Modal from '../../components/Modal';
import Metadata from '../../components/Metadata';

import image1 from "../../images/SpheraMusic/img1.webp"
import image2 from "../../images/SpheraMusic/img2.webp"
import image3 from "../../images/SpheraMusic/img3.webp"
import image4 from "../../images/SpheraMusic/img4.webp"
import image5 from "../../images/SpheraMusic/img5.webp"
import image6 from "../../images/SpheraMusic/img6.webp"
import image7 from "../../images/SpheraMusic/img7.webp"
import image8 from "../../images/SpheraMusic/img8.webp"
import image9 from "../../images/SpheraMusic/img9.webp"
import image10 from "../../images/SpheraMusic/img10.webp"
import image11 from "../../images/SpheraMusic/img11.webp"
import image12 from "../../images/SpheraMusic/img12.webp"
import image13 from "../../images/SpheraMusic/img13.webp"
import image14 from "../../images/SpheraMusic/img14.webp"
import image15 from "../../images/SpheraMusic/img15.webp"
import image16 from "../../images/SpheraMusic/img16.webp"
import image17 from "../../images/SpheraMusic/img17.webp"
import image18 from "../../images/SpheraMusic/img18.webp"


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15,  image16, image17, image18]; // ... add more as needed



const SpheraMusic = () => {
  const title = "Sphera Music Video";
  const description = "Sphera Music Festival Trailer";
  const image = logo;
  const url = "https://arsdop.com/music-videos/spheraMusic";



const [currentIndex, setCurrentIndex] = useState(null);
const [modalOpen, setModalOpen] = useState(false); // Track whether the modal is open
const [imageStyle, setImageStyle] = useState({ height: "600px", width: "auto", objectFit: 'contain' });

const handleClick = (index) => {
    setCurrentIndex(index);
    setModalOpen(true); 
  };

const closeLightbox = () => {
    setCurrentIndex(null);
    setModalOpen(false);
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
      <iframe className={styles.iframe} src="https://player.vimeo.com/video/753291470" allowFullScreen></iframe>
        </div>
        {!modalOpen && (
        <>
        <Link to="/music-videos/nasteisha">
        <button className={styles.rightArrow}>{">"}</button>
        </Link>

        <Link to="/music-videos/vektor">
        <button className={styles.leftArrow}>{"<"}</button>
        </Link>
        </>
        )}
     
        <div className={styles.projectDescription}>
        <p className={styles.paragraph} style={{marginBottom: '15px'}}>
        We've shown three groups of people who differ in customs, appearance, and mood.
        But music is something that can unite all of them and make them feel love and warmth. </p>
        <p className={styles.paragraph}>
        This concept reveals the philosophy of sphera° festival — regardless of who you are and what you do, everything becomes one at the part
        </p>
        </div>

        <div className={styles.title}>
        <h2 className={styles.projectTitle}>Sphera festival trailer</h2>
        </div>
        <div className={styles.creditsContainer}>
  <div className={styles.creditsList}>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Director:</h2> @gorskyiroma</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Dop:</h2> @ars_dop</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Production:</h2> @prostovideoby</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Producer:</h2> alexandearspirin, @krukman</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Music:</h2> @alexeidebronhe</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Clothes:</h2> @elpnkdzgn</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Stylist:</h2> @tasya_yesman</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Art dir:</h2> @p.asinov</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>1st ac:</h2> @evgeniy_chushkin</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Edit:</h2> @turbodimon, @gorskyiroma</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Color:</h2> @tikhonov.colorist</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Focus puller:</h2> @patseyeu</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Equipment:</h2> @myrental.by</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Casting:</h2> @myactrez @whynotfound</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Property:</h2> @charlie_kiddin, @dashka_0609</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Make-up:</h2> @mateynastya, @knigalyuba</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Help:</h2> @goodnickoff, @struzlove, @lermo</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Photo backstage:</h2> @moonaliphoto</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Partners:</h2> @beatheadcom, @photobuba, @tea_mail, @belonica.art, @_jagervibes_, @adept.store, @nkzuemo</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Actors:</h2> @pavelyaromka @thelizablya @tikolatov @osminoginogi @magnificat_mabongo</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}><h2>Total black:</h2> @a.bona_9 @myactrez @sofiakorol @i_julion @alinalelyamer @kristina.baronova2018 @kategaze</div>
    </div>
    <div className={styles.creditItem} style={{ marginBottom: '15px' }}>
      <div className={styles.creditName}><h2>Hippie:</h2> @bj.skelbie @__bochtareva__ @lanapolikanova @sarushka__ @ammar_alshaar__ @dicky.plan</div>
    </div>
    <div className={styles.creditItem}>
      <div className={styles.creditName}>arri alexa mini + master prime lenses </div>
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


export default SpheraMusic;




