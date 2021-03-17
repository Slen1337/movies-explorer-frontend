import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Promo from "../Portfolio/Promo/Promo";
import AboutProject from "../Portfolio/AboutProject/AboutProject";
import Techs from "../Portfolio/Techs/Techs";
import AboutMe from "../Portfolio/AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

export default function Main({ loggedIn, windowWidth }) {
  return (
    <>
      <Header loggedIn={loggedIn} windowWidth={windowWidth} />
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
