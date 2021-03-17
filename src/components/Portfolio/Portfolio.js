import React from "react";

export default function Portfolio({}) {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__item-link" href="https://github.com/Slen1337/how-to-learn" target="_blank">
            Статичный сайт
          </a>
          <a className="portfolio__item-link" href="https://github.com/Slen1337/how-to-learn" target="_blank">
            &#8599;
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__item-link" href="https://slen1337.github.io/ru-travel" target="_blank">
            Адаптивный сайт
          </a>
          <a className="portfolio__item-link" href="https://slen1337.github.io/ru-travel" target="_blank">
            &#8599;
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__item-link" href="https://slen1337.students.nomoredomains.monster" target="_blank">
            Одностраничное приложение
          </a>
          <a className="portfolio__item-link" href="https://slen1337.students.nomoredomains.monster" target="_blank">
            &#8599;
          </a>
        </li>
      </ul>
    </section>
  );
}
