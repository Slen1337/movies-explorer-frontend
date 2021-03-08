import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Promo from '../Portfolio/Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import AuthNav from "../NavTab/AuthNav/AuthNav";

export default function Main(){
    return(
        <>
            <Header>
                <AuthNav />
            </Header>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </>
    )
}
