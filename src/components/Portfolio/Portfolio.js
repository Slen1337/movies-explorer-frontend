import React from "react";

export default function Portfolio() {
  return (
    <div className="portfolio box">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            className="portfolio__item-link"
            href="https://github.com/Slen1337/how-to-learn"
            target="/blank"
          >
            Статичный сайт
          </a>
          <a
            className="portfolio__pointer"
            href="https://github.com/Slen1337/how-to-learn"
            target="/blank"
          ></a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__item-link"
            href="https://slen1337.github.io/ru-travel/"
            target="/blank"
          >
            Адаптивный сайт
          </a>
          <a
            className="portfolio__pointer"
            href="https://slen1337.github.io/ru-travel/"
            target="/blank"
          ></a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__item-link"
            href="https://slen1337.students.nomoredomains.monster/"
            target="/blank"
          >
            Одностраничное приложение
          </a>
          <a
            className="portfolio__pointer"
            href="https://slen1337.students.nomoredomains.monster/"
            target="/blank"
          ></a>
        </li>
      </ul>
    </div>
  );
}
