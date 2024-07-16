import { Link } from 'react-router-dom';
import aboutImg from "../images/About/aboutImg.webp";
import styles from './styles/About.module.css';

const About = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1>ABOUT</h1>
      </div>
      <div className={styles.photoGrid}>
        <img src={aboutImg} alt="Arseny Bogunov" />
      </div>
      <div className={styles.descriptionGrid}>
      <p className={styles.paragraph}>
      Hi, my name is <Link to="/narrative">Arseny Bogunov</Link>, and I'm Director of Photography based in Warsaw. My passion for cinematography and creativity has led me to work on various genres of film.</p>

      <p className={styles.paragraph}>I was fortunate to learn directly from my mentor, a seasoned cinematographer, who imparted his knowledge and experience to me. I gained practical experience working as a 1AC and as a steadicam assistant.  </p>

      <p className={styles.paragraph}>Precisely capturing the director’s vision in every frame is what I strive for in my work. I meticulously approach framing, lighting, and visual aesthetics. In my work, it's not just about creating visually stunning images; I delve deep into the dramaturgy of every frame, justifying my choices of lighting, camera movements, and lenses.</p>

      <p className={styles.paragraph}>My portfolio includes work for brands such as <span className ={styles.bold}>Apple, Audi, Wargaming, McDonald’s, Bolt, A1, Lays, Sony Music, Insportline, Brave Factory, and Closer.</span></p>

      <p className={styles.paragraph}>In addition to film, I organize an electronic music and art festival – <a 
    href="https://www.instagram.com/spherafest/" 
    target="_blank" 
    rel="noopener noreferrer"
  ><span className={styles.underline}>sphera°</span></a>. Here I combine my cinematographic skills with artistic expression, creating a unique combination of visuals and sounds.</p>

        <button className={styles.buttonStyle}>
        <a href="mailto:bogunov.dop@gmail.com" className={` ${styles.buttonText}`}>
          <span>bogunov</span><span className={styles.dot}>.</span><span>dop@gmail</span><span className={styles.dot}>.</span>com
        </a>
 
          </button>
 
      </div>
      {/* New Email Link */}

    </div>
  );
};

export default About;
