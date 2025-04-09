import React from "react";
import Bg from "../components/bg";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Informasi from "../components/Informasi";
import Story from "../components/Story";
import Gallery from "../components/Gallery";
import Rsvp from "../components/Rsvp";
import Gifts from "../components/Gifts";
import Footer from "../components/Footer";
// import Audio from "../components/Audio";

function Home() {
  return (
    <>
      <Bg />
      <Navbar />
      <Header style={{ marginTop: '20px' }} /> {/* Adjust margin as needed */}
      <Informasi />
      <Story />
      <Gallery />
      <Rsvp />
      <Gifts />
      <Footer />
      {/* <Audio /> */}
      
    </>
  );
}

export default Home;