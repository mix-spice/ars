// src/components/Preloader.js
import React, { useState, useEffect } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import styles from './Preloader.module.css';

const Preloader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const preloadFonts = () => {
      const font = new FontFaceObserver('SpaceMono-Regular');
      const font2 = new FontFaceObserver('Azeret-Mono');
      return Promise.all([font.load(), font2.load()]).catch(err => {
        console.error('Error loading fonts:', err);
      });
    };

    const preloadImages = (images) => {
      return Promise.all(images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      })).catch(err => {
        console.error('Error loading images:', err);
      });
    };

    const images = [
      require('../images/Sphera/sphera1.webp'),
      require('../images/Insportsline/sportLogo.webp'),
      require('../images/Bolt/boltLogo.webp'),
      require('../images/Dogs/Dogs1.webp'),
      require('../images/Dills/duhlogo.webp'),
      require('../images/Carrier/career.webp'),
      require('../images/Dairy/imgLogo.webp'),
      require('../images/CommercialsGif/sphera.gif'),
      require('../images/CommercialsGif/sport.gif'),
      require('../images/CommercialsGif/dog.gif'),
      require('../images/CommercialsGif/carrier.gif'),
      require('../images/CommercialsGif/krunka.gif'),
      require('../images/CommercialsGif/Bolt.gif'),
      require('../images/CommercialsGif/dills.gif'),
      require('../images/SpheraMusic/imgLogo.webp'),
      require('../images/Nasteisha/img14.webp'),
      require('../images/Vektor/img1.webp'),
      require('../images/Mefedron/img3.webp'),
      require('../images/Georgia/img1.webp'),
      require('../images/Dance/1.webp'),
      require('../images/MusicVideosGif/SpheraMusic.gif'),
      require('../images/MusicVideosGif/Nasteisha.gif'),
      require('../images/MusicVideosGif/Dolboyob.gif'),
      require('../images/MusicVideosGif/Mefedron.gif'),
      require('../images/MusicVideosGif/Georgia.gif'),
      require('../images/MusicVideosGif/Dance.gif'),
      require('../images/TakeAction/takeactLogo.webp'),
      require('../images/Space/space1.webp'),
      require('../images/gameOver/logo.jpeg'),
      require('../images/Life/imgLogo.webp'),
      require('../images/Animals/logo.webp'),
      require('../images/Arka/logo.webp'),
      require('../images/NarrativeGif/takeAction.gif'),
      require('../images/NarrativeGif/space.gif'),
      require('../images/NarrativeGif/growMotion.gif'),
      require('../images/NarrativeGif/life.gif'),
    ];

    const preloadAssets = async () => {
      await preloadFonts();
      await preloadImages(images);
    };

    preloadAssets().then(() => {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            onLoaded();
            return 100;
          }
          return prevProgress + 1;
        });
      }, 30); // Adjust the speed of the progress bar here
    });
  }, [onLoaded]);

  return (
    <div className={styles.preloaderContainer}>

        <div
          className={styles.progress}
          style={{ width: `${progress}%` }}
        ></div>
 
      <div className={styles.progressText}>{progress}%</div>
    </div>
  );
};

export default Preloader;
