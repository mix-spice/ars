import React, { useState, useEffect, useCallback } from 'react';
import styles from './styles/PhotoGallery.module.css';
import Modal from '../components/Modal';
import '../components/Modal.module.css';


import image1 from "../images/PhotoGallery/img1.webp";
import image2 from "../images/PhotoGallery/img2.webp";
import image3 from "../images/PhotoGallery/img3.webp";
import image4 from "../images/PhotoGallery/img4.webp";
import image5 from "../images/PhotoGallery/img5.webp";
import image6 from "../images/PhotoGallery/img6.webp";
import image7 from "../images/PhotoGallery/img7.webp";
import image8 from "../images/PhotoGallery/img8.webp";
import image9 from "../images/PhotoGallery/img9.webp";
import image10 from "../images/PhotoGallery/img10.webp";
import image11 from "../images/PhotoGallery/img11.webp";
import image12 from "../images/PhotoGallery/img12.webp";
import image13 from "../images/PhotoGallery/img13.webp";
import image14 from "../images/PhotoGallery/img14.webp";
import image15 from "../images/PhotoGallery/img15.webp";
import image16 from "../images/PhotoGallery/img16.webp";
import image17 from "../images/PhotoGallery/img17.webp";
import image18 from "../images/PhotoGallery/img18.webp";
import image19 from "../images/PhotoGallery/img19.webp";
import image20 from "../images/PhotoGallery/img20.webp";
import image21 from "../images/PhotoGallery/img21.webp";
import image22 from "../images/PhotoGallery/img22.webp";
import image23 from "../images/PhotoGallery/img23.webp";
import image24 from "../images/PhotoGallery/img24.webp";
import image25 from "../images/PhotoGallery/img25.webp";
import image26 from "../images/PhotoGallery/img26.webp";
import image27 from "../images/PhotoGallery/img27.webp";
import image28 from "../images/PhotoGallery/img28.webp";
import image29 from "../images/PhotoGallery/img29.webp";


const images = [image1, image2, image3, image4, image5, image6, image7,image8, image9, image10, image11, image12, image13, image14, image15, image16, image17,image18, image19, image20, image21, image22, image23, image24, image25, image26] ; // ... add more as needed

const imageData = [
  { src: image1, filmName: 'Film Kodak Portra 400, UAE, 2023' },
  { src: image2, filmName: 'Film Kodak Portra 400, UAE, 2023' },
  { src: image3, filmName: 'Film Kodak Portra 400, UAE, 2023' },
  { src: image4, filmName: 'Film Kodak Portra 400, UAE, 2023' },
  { src: image5, filmName: 'Film Kodak Portra 400, UAE, 2023' },
  { src: image6, filmName: 'Film Kodak Portra 400, UAE, 2023' },
  { src: image7, filmName: 'Film Kodak Portra 400, UAE, 2023' },
  { src: image8, filmName: 'Film Kodak Portra 400, UAE, 2023' },
  { src: image9, filmName: 'Film Kodak Portra 400, UAE, 2023' },
  { src: image10, filmName: 'Film Kodak Portra 400, UAE, 2023' },
  { src: image11, filmName: 'Film Kodak Portra 400, UAE, 2023' },
  { src: image12, filmName: 'Film Kodak Portra 400, UAE, 2023' },
  { src: image13, filmName: 'Film Kodak Portra 400, UAE, 2023' },
  { src: image14, filmName: 'Film B&W, Poland, 2023' },
  { src: image27, filmName: 'Film Kodak Vision 500T, Ukraine, 2021'},
  { src: image15, filmName: 'Film Kodak Portra 400, UAE, 2023' },
  { src: image16, filmName: 'Film Cinestill 800T, Georgia, 2021' },
  { src: image17, filmName: 'Film Cinestill 800T, Georgia, 2021' },
  { src: image18, filmName: 'Film Cinestill 800T, Georgia, 2021' },
  { src: image19, filmName: 'Film Cinestill 800T, Georgia, 2021' },
  { src: image20, filmName: 'Film Kodak Vision 500T, Ukraine, 2021' },
  { src: image21, filmName: 'Film Kodak Vision 500T, Ukraine, 2021' },
  { src: image29, filmName: 'Film Kodak Gold 200, France, 2023' },
  { src: image22, filmName: 'iphone 7, Ukraine, 2021' },
  { src: image23, filmName: 'iphone 11, Ukraine, 2021' }, 
  { src: image24, filmName: 'Film Kodak Portra 400, UAE, 2023' },
  { src: image25, filmName: 'iphone 11, Ukraine, 2021' },
  { src: image26, filmName: 'iphone 11, Ukraine, 2021' },
  { src: image28, filmName: 'Film B&W, Ukraine, 2021' },


];



const PhotoGallery = () => {
  const [isBigScreen, setIsBigScreen] = useState(window.innerWidth >= 1920);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [imageStyle, setImageStyle] = useState({ height: "600px", width: "auto", objectFit: 'contain' });

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const navigateLeft = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : imageData.length - 1));
  }, [imageData.length]);

  const navigateRight = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex < imageData.length - 1 ? prevIndex + 1 : 0));
  }, [imageData.length]);

  
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
    <div className={`${styles.galleryContainer} max-w-[1130px] mx-auto 2xl:max-w-[1140px] xxl:max-w-[1450px]`}>
    <div className="flex justify-center items-start flex-col">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 p-4">
        {imageData.map((item, index) => (
          <div key={index} className="mb-4 break-inside-avoid-column" onClick={() => handleClick(index)}>
            <img src={item.src} alt={`Image ${index}`} className="w-full h-auto object-contain" />
          </div>
        ))}
        </div>
      </div>
  
      {currentIndex !== null && (
        <>
          <Modal
            contentSrc={imageData[currentIndex].src}
            onClose={() => setCurrentIndex(null)}
            onLeftArrowClick={navigateLeft}
            onRightArrowClick={navigateRight}
            imageStyle={imageStyle} 
          />
      <div className={styles.filmNameContainer}>{imageData[currentIndex].filmName}</div>
        </>
      )}
    </div>
  );
};

export default PhotoGallery;