import React from 'react';
import Narrative from './narrative/Narrative';
import Commercials from './commercials/Commercials';
import MusicVideos from './musicVideos/MusicVideos';

import styles from './styles/HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Narrative />
      <Commercials/>
      <div className={styles.divider}>
      <MusicVideos />
      </div>
    </div>
  );
};

export default HomePage;