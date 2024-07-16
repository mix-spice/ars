import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Reset.css'; 
import './App.css'; 
import './fonts/myFonts.css'; // Import custom fonts first

import HomePage from './pages/HomePage'; 
import Narrative from './pages/narrative/Narrative';
import About from './pages/About';
import TakeAction from './pages/narrative/TakeAction';
import Space from './pages/narrative/Space';
import GrowMotion from './pages/narrative/GrowMotion';
import Life from './pages/narrative/Life';
import Animals from './pages/narrative/Animals';
import Arka from './pages/narrative/Arka';
import Commercials from './pages/commercials/Commercials';
import Sphera from './pages/commercials/Sphera';
import Insportsline from './pages/commercials/Insportsline';
import Dogs from './pages/commercials/Dogs';
import Dills from './pages/commercials/Dills';
import Bolt from './pages/commercials/Bolt';
import Dairy from './pages/commercials/Dairy';
import Career from './pages/commercials/Career';
import MusicVideos from './pages/musicVideos/MusicVideos';
import SpheraMusic from './pages/musicVideos/SpheraMusic';
import Vektor from './pages/musicVideos/Vektor';
import Nasteisha from './pages/musicVideos/Nasteisha';
import Mefedron from './pages/musicVideos/Mefedron';
import Georgia from './pages/musicVideos/Georgia';
import Dance from './pages/musicVideos/Dance';
import PhotoGallery from './pages/PhotoGallery';
import Reel from './pages/Reel';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
<Router>
      {loading ? (
        <Preloader onLoaded={() => setLoading(false)} />
      ) : (
        <>
          <ScrollToTop />
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="narrative/*" element={<Narrative />} />
              <Route path="about" element={<About />} />
              <Route path="narrative/take-action" element={<TakeAction />} />
              <Route path="narrative/space" element={<Space />} />
              <Route path="narrative/grow-motion" element={<GrowMotion />} />
              <Route path="narrative/life" element={<Life />} />
              <Route path="narrative/animals" element={<Animals />} />
              <Route path="narrative/arka" element={<Arka />} />
              <Route path="commercials/*" element={<Commercials />} />
              <Route path="commercials/sphera" element={<Sphera />} />
              <Route path="commercials/insportsline" element={<Insportsline />} />
              <Route path="commercials/dogs" element={<Dogs />} />
              <Route path="commercials/dills" element={<Dills />} />
              <Route path="commercials/bolt" element={<Bolt />} />
              <Route path="commercials/dairy" element={<Dairy />} />
              <Route path="commercials/career" element={<Career />} />
              <Route path="music-video" element={<MusicVideos />} />
              <Route path="music-videos/spheraMusic" element={<SpheraMusic />} />
              <Route path="music-videos/dance" element={<Dance />} />
              <Route path="music-videos/nasteisha" element={<Nasteisha />} />
              <Route path="music-videos/pohoda" element={<Mefedron />} />
              <Route path="music-videos/georgia" element={<Georgia />} />
              <Route path="music-videos/vektor" element={<Vektor />} />
              <Route path="photo" element={<PhotoGallery />} />
              <Route path="reel" element={<Reel />} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
