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
import Icon from "../components/Icon";

function Home() {
  return (
    <>
      <Bg />
      <Navbar />
      <Header />
      <Informasi />
      <Story />
      <Gallery />
      <Rsvp />
      <Gifts />
      <Footer />
      <Icon />
      
    </>
  );
}

export default Home;