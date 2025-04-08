import React, { useState, useEffect } from 'react';
import '../styles/Bg.css';
import bg1 from '../assets/bg1.jpg';
import { Link } from 'react-router-dom';

function Bg() {
  const weddingDate = new Date('2025-05-30T18:00:00'); // Set your wedding date and time here
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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
    <h4>Kepada Bapak/Ibu/Saudara/1</h4>
    <h1>Kris Ananda & Neng Restiani</h1>
    <p>Akan melangsungkan resepsi pernikahan dalam:</p>
    <div className="waktu">
    <h2>
        <span>{timeRemaining.days} Hari</span> 
        <span>{timeRemaining.hours} Jam</span>  
        <span>{timeRemaining.minutes} Menit</span>  
        <span>{timeRemaining.seconds} Detik</span>
    </h2>
</div>
    <Link to="/home" className="btn btn-lg mt-4">Lihat undangan</Link>
</main>
    </section>
  );
}

export default Bg;