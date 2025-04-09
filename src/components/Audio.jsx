import React, { useRef, useState } from 'react';
import '../styles/Audio.css'; // Import CSS
import Audio from '../assets/audio/kda.mp3'; // Pastikan path ini benar

function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Mulai dengan false

  // Fungsi untuk memutar audio
  const playAudio = () => {
    audioRef.current.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
    setIsPlaying(true);
  };

  // Fungsi untuk menjeda audio
  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  // Fungsi untuk toggle play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={Audio} loop />
      <button onClick={togglePlayPause} className="play-pause-button">
        {isPlaying ? '⏸️' : '▶️'} {/* Ikon untuk pause dan play */}
      </button>
    </div>
  );
}

export default AudioPlayer;