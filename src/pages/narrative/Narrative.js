import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/narrative/Narrative.module.css';
import takeAction from '../../images/TakeAction/takeactLogo.webp';
import space from '../../images/Space/space1.webp';
import growMotion from '../../images/gameOver/logo.jpeg';
import life from '../../images/Life/imgLogo.webp';
import animals from '../../images/Animals/logo.webp';
import arka from '../../images/Arka/logo.webp'

import takeActionGif from '../../images/NarrativeGif/takeAction.gif';
import spaceGif from '../../images/NarrativeGif/space.gif';
import growMotionGif from '../../images/NarrativeGif/growMotion.gif';
import lifeGif from '../../images/NarrativeGif/life.gif';


const Narrative = () => {
  const [hoverProject, setHoverProject] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={styles.mainContent}>
      <div className={styles.title}>
        <h1>NARRATIVE</h1>
      </div>
      <div className={styles.projects}>
        <div 
          className={styles.project1}
          onMouseEnter={() => setHoverProject('takeAction')}
          onMouseLeave={() => setHoverProject(null)}
        >
          <Link to="/narrative/take-action">
            <img src={hoverProject === 'takeAction' ? takeActionGif : takeAction} alt="Take Action" />
          </Link>
          <p>Take action – teaser</p>
        </div>
        <div 
          className={styles.project2}
          onMouseEnter={() => setHoverProject('space')}
          onMouseLeave={() => setHoverProject(null)}
        >
          <Link to="/narrative/space">
            <img src={hoverProject === 'space' ? spaceGif : space} alt="Space" />
          </Link>
          <p>Space – narrative</p>
        </div>
        <div 
          className={styles.project3}
          onMouseEnter={() => setHoverProject('growMotion')}
          onMouseLeave={() => setHoverProject(null)}
        >
          <Link to="/narrative/grow-motion">
            <img src={hoverProject === 'growMotion' ? growMotionGif : growMotion} alt="Grow Motion" />
          </Link>
          <p>Grow Motion - Short Film</p>
        </div>
        <div 
          className={styles.project4}
          onMouseEnter={() => setHoverProject('life')}
          onMouseLeave={() => setHoverProject(null)}
        >
          <Link to="/narrative/life">
            <img src={hoverProject === 'life' ? lifeGif : life} alt="Life" />
          </Link>
          <p>Midlife – trailer</p>
          </div>

          <div 
          className={styles.project5}
          onMouseEnter={() => setHoverProject('life')}
          onMouseLeave={() => setHoverProject(null)}
        >
          <Link to="/narrative/animals">
            <img src={hoverProject === 'animals' ? animals : animals} alt="Life" />
          </Link>
          <p>Magical animals - short film</p>
          </div>

          <div 
          className={styles.project6}
          onMouseEnter={() => setHoverProject('life')}
          onMouseLeave={() => setHoverProject(null)}
        >
          <Link to="/narrative/arka">
            <img src={hoverProject === 'arka' ? arka : arka} alt="Life" />
          </Link>
          <p>Arka - short film</p>
          </div>
    </div>
    </div>
  );
};

export default Narrative;