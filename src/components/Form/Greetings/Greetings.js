import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../../images/logo.png";

export default function Greetings({ title }) {
  const history = useHistory();

  function handleLogoClick() {
    history.push("/");
  }

  return (
    <section className="greetings__menu">
      <img
        className="greetings__menu_logo"
        src={Logo}
        alt="Лого"
        onClick={handleLogoClick}
      />
      <h1 className="greetings__menu_title">{title}</h1>
    </section>
  );
}
