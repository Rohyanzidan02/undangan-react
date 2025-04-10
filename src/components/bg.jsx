import React, { useState, useEffect, useRef } from 'react';
import '../styles/Bg.css';
import bg1 from '../assets/bg1.jpg';
import Audio from '../assets/audio/kda.mp3';
import { Fade } from 'react-awesome-reveal';

function Bg() {
  const weddingDate = new Date('2025-05-30T18:00:00'); // Set your wedding date and time here
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [guestName, setGuestName] = useState('');
  const [pronoun, setPronoun] = useState('Bapak/Ibu/Saudara/i');
  const audioRef = useRef(null); // Create a ref for the audio element

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  // Scroll control functions
  const rootElement = document.querySelector(":root");

  function disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function () {
      window.scroll(scrollTop, scrollLeft);
    }

    rootElement.style.scrollBehavior = 'auto';
  }

  function enableScroll() {
    window.onscroll = function () { }
    rootElement.style.scrollBehavior = 'smooth';
  }

  useEffect(() => {
    disableScroll(); // Disable scroll when component mounts
    return () => enableScroll(); // Enable scroll when component unmounts
  }, []);

  const handleScrollToHome = () => {
    enableScroll(); // Enable scrolling
    const homeSection = document.getElementById('home'); // Change to 'home'
    if (homeSection) {
      audioRef.current.play(); // Play the audio when the button is clicked
      homeSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the home section
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('n') || '';
    const pronounFromUrl = urlParams.get('p') || 'Bapak/Ibu/Saudara/i';
    
    setGuestName(name);
    setPronoun(pronounFromUrl);
    
    // Set the name in RSVP input if needed
    const rsvpInput = document.querySelector('#nama');
    if (rsvpInput) {
      rsvpInput.value = name;
    }
  }, []);

  return (
    <section
      id="hero"
      className="hero w-100 h-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <main>
        <h4>
          Kepada <span>{`${pronoun} ${guestName},`}</span>
        </h4>
        <h1>
          <span>Kris Ananda</span>
          <span>&</span>
          <span>Neng Restiani</span>
        </h1>
        <p>Akan melangsungkan resepsi pernikahan dalam:</p>
        <div className="waktu">
          <h2>
            <span>{timeRemaining.days} Hari</span>
            <span>{timeRemaining.hours} Jam</span>
            <span>{timeRemaining.minutes} Menit</span>
            <span>{timeRemaining.seconds} Detik</span>
          </h2>
        </div>
        <button className="btn3 btn-lg mt-4" onClick={handleScrollToHome}>
          Lihat undangan
        </button>
        
        {/* Audio Element */}
        <audio ref={audioRef} src={Audio} preload="auto" />
      </main>
    </section>
  );
}

export default Bg;