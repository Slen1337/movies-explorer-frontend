import React from "react";
import Logo from "../../images/logo.png";
import { useHistory } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function Header({ loggedIn, windowWidth }) {
  const history = useHistory();

  function handleLogoClick() {
    history.push("/");
  }

  return (
    <header className="header">
      <div className="header__content">
        <img
          className="header__logo"
          src={Logo}
          alt="Лого"
          onClick={handleLogoClick}
        />
        <NavBar loggedIn={loggedIn} windowWidth={windowWidth} />
      </div>
    </header>
  );
}
