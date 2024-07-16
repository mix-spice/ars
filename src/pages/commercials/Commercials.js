import {React,useState} from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/commercials/Commercials.module.css';
import sphera from "../../images/Sphera/sphera1.webp"
import sport from '../../images/Insportsline/sportLogo.webp';
import bolt from "../../images/Bolt/boltLogo.webp"
import dogs from "../../images/Dogs/Dogs1.webp"
import dills from "../../images/Dills/duhlogo.webp"
import career from "../../images/Carrier/career.webp"
import dairy from "../../images/Dairy/imgLogo.webp"

import spheraGif from "../../images/CommercialsGif/sphera.gif"
import sportGif from "../../images/CommercialsGif/sport.gif"
import dogsGif from "../../images/CommercialsGif/dog.gif"
import careerGif from "../../images/CommercialsGif/carrier.gif"
import dairyGif from "../../images/CommercialsGif/krunka.gif"
import boltGif from "../../images/CommercialsGif/Bolt.gif"
import dillsGif from "../../images/CommercialsGif/dills.gif"


const Commercials = () => {

  const [hoverProject, setHoverProject] = useState(null);

  return (
    <div className={styles.mainContent}>
      <div className={styles.title}>
        <h1>COMMERCIAL</h1>
      </div>
      <div className={styles.projects}>
      <div 
          className={styles.project1}
          onMouseEnter={() => setHoverProject('sphera')}
          onMouseLeave={() => setHoverProject(null)}
        >
        <Link to="/commercials/sphera"> 
          <img src={hoverProject === 'sphera' ? spheraGif : sphera} alt="bolt" />
        </Link>
        <p>Sphera merchandise</p>
        </div>
        <div 
          className={styles.project2}
          onMouseEnter={() => setHoverProject('carrier')}
          onMouseLeave={() => setHoverProject(null)}
        >
    
        <Link to="/commercials/career">
          <img src={hoverProject === 'carrier' ? careerGif : career} alt="bolt" />
        </Link>
          <p>A1(5 video) – mobile carrier</p>
        </div>
        <div 
          className={styles.project3}
          onMouseEnter={() => setHoverProject('dairy')}
          onMouseLeave={() => setHoverProject(null)}
        >
        <Link to="/commercials/dairy">
        <img src={hoverProject === 'dairy' ? dairyGif : dairy} alt="bolt" />
          </Link>
          <p>Dairy – Krunka</p>
        </div>
                <div 
          className={styles.project4}
          onMouseEnter={() => setHoverProject('sport')}
          onMouseLeave={() => setHoverProject(null)}
        >
        <Link to="/commercials/insportsline">

          <img src={hoverProject === 'sport' ? sportGif : sport} alt="bolt" />
        </Link>
          <p>Insportsline – Czech Republick</p>
        </div>
        <div 
          className={styles.project5}
          onMouseEnter={() => setHoverProject('bolt')}
          onMouseLeave={() => setHoverProject(null)}
        >
              <Link to="/commercials/bolt"> 
              <img src={hoverProject === 'bolt' ? boltGif : bolt} alt="bolt" />
        </Link>
        <p>Bolt taxi</p>
        </div>
        
        <div 
          className={styles.project6}
          onMouseEnter={() => setHoverProject('dogs')}
          onMouseLeave={() => setHoverProject(null)}
        >
        <Link to="/commercials/dogs"> 
        <img src={hoverProject === 'dogs' ? dogsGif : dogs} alt="dpgs" />
          </Link>
          <p>Happy Gree – dog vitamins</p>
        </div>
        <div 
          className={styles.project7}
          onMouseEnter={() => setHoverProject('dills')}
          onMouseLeave={() => setHoverProject(null)}
        >
        <Link to="/commercials/dills"> 
          <img src={hoverProject === 'dills' ? dillsGif : dills} alt="Dilis" />
        </Link>
        <p>Dilis Parfum</p>
      </div>
      </div>
      <div className={styles.credits}>
        <div className={styles.creditTitle}></div>
        <div className={styles.creditName}></div>
        <div className={styles.creditTitle}></div>
        <div className={styles.creditName}></div>
        <div className={styles.creditTitle}></div>
        <div className={styles.creditName}></div>
        <div className={styles.creditTitle}></div>
        <div className={styles.creditName}></div>
        <div className={styles.creditTitle}></div>
        <div className={styles.creditName}></div>
      </div>
    </div>
  );
}

export default Commercials;