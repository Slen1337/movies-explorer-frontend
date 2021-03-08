import React from "react";

export default function NavTab() {
  return (
    <ul className="main__section">
      <li className="section__item">
        <a className="section__link" href="#project">
          О проекте
        </a>
      </li>
      <li className="section__item">
        <a className="section__link" href="#technology">
          Технологии
        </a>
      </li>
      <li className="section__item">
        <a to="/" className="section__link" href="#student">
          Студент
        </a>
      </li>
    </ul>
  );
}
