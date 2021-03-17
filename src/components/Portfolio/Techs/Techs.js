import React from "react";
import HeaderBox from "../../Header/HeaderBox/HeaderBox";

export default function Techs({}) {
  return (
    <section id="technology" className="technology">
      <div className="technology__box">
        <HeaderBox title="Технологии" />
        <div className="technology__content">
          <h2 className="technology__title">7 технологий</h2>
          <p className="technology__text">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className="technology__list">
            <li className="technology__list-item">
              <p className="technology__list-text">HTML</p>
            </li>
            <li className="technology__list-item">
              <p className="technology__list-text">CSS</p>
            </li>
            <li className="technology__list-item">
              <p className="technology__list-text">JS</p>
            </li>
            <li className="technology__list-item">
              <p className="technology__list-text">React</p>
            </li>
            <li className="technology__list-item">
              <p className="technology__list-text">Git</p>
            </li>
            <li className="technology__list-item">
              <p className="technology__list-text">Express.js</p>
            </li>
            <li className="technology__list-item">
              <p className="technology__list-text">MongoDB</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
