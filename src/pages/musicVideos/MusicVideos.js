import {React,useState} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/musicVideos/MusicVideos.module.css';
import spheraMusic from '../../images/SpheraMusic/imgLogo.webp';
import nasteisha from '../../images/Nasteisha/img14.webp';
import vektor from '../../images/Vektor/img1.webp';
import mefedron from '../../images/Mefedron/img3.webp';
import georgia from  "../../images/Georgia/img1.webp";
import dance from "../../images/Dance/1.webp"


import spheraMusicGif from '../../images/MusicVideosGif/SpheraMusic.gif';
import nasteishaGif from "../../images/MusicVideosGif/Nasteisha.gif";
import vektorGif from "../../images/MusicVideosGif/Dolboyob.gif";
import mefedronGif from "../../images/MusicVideosGif/Mefedron.gif";
import georgiaGif from "../../images/MusicVideosGif/Georgia.gif";
import danceGif from "../../images/MusicVideosGif/Dance.gif"

const MusicVideos = () => {
  const [hoverProject, setHoverProject] = useState(null);

  return (
    <div className={styles.mainContent}>
      <div className={styles.title}>
        <h1>MUSIC VIDEO</h1>
      </div>
      <div className={styles.projects}>
      <div 
          className={styles.project1}
          onMouseEnter={() => setHoverProject('spheraMusic')}
          onMouseLeave={() => setHoverProject(null)}
        >
          <Link to="/music-videos/spheraMusic">
            <img src={hoverProject === 'spheraMusic' ? spheraMusicGif : spheraMusic} alt="Take Action" />
          </Link>
          <p>Sphera festival trailer</p>
        </div>
        <div 
          className={styles.project2}
          onMouseEnter={() => setHoverProject('nasteisha')}
          onMouseLeave={() => setHoverProject(null)}
        >
          <Link to="/music-videos/nasteisha">
            <img src={hoverProject === 'nasteisha' ? nasteishaGif : nasteisha} alt="Take Action" />
          </Link>
          <p>NASTEISHA x INSOMNIA - SKY</p>
          </div>
        <div className={styles.project3}
          onMouseEnter={() => setHoverProject('dance')}
          onMouseLeave={() => setHoverProject(null)}>
        <Link to="/music-videos/dance">
            <img src={hoverProject === 'dance' ? danceGif : dance} alt="Take Action" />
          </Link>
          <p>Anastasiya Rydlevskaya – Dance on my own</p>
        </div>
        <div 
          className={styles.project4}
          onMouseEnter={() => setHoverProject('mefedron')}
          onMouseLeave={() => setHoverProject(null)}
        >
          <Link to="/music-videos/pohoda">
            <img src={hoverProject === 'mefedron' ? mefedronGif : mefedron} alt="Take Action" />
          </Link>
          <p>Nastya Lisa – Pohoda</p>
          </div>

          <div 
          className={styles.project5}
          onMouseEnter={() => setHoverProject('georgia')}
          onMouseLeave={() => setHoverProject(null)}
        >
          <Link to="/music-videos/georgia">
            <img src={hoverProject === 'georgia' ? georgiaGif : georgia} alt="Take Action" />
          </Link>
          <p>Georgia – music video dop cut</p>
          </div>

          <div 
            className={styles.project6}
            onMouseEnter={() => setHoverProject('vektor')}
            onMouseLeave={() => setHoverProject(null)}>
            <Link to="/music-videos/vektor">
              <img src={hoverProject === 'vektor' ? vektorGif : vektor} alt="Take Action" />
            </Link>
            <p>Vektor – 08:00 in Minsk</p>
        </div>
    
  
      </div>
    </div>
  );
}

export default MusicVideos;