import React from "react";

export default function Footer() {
  return (
    <footer className="footer box">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__box">
        <div className="footer__copyright">&copy;2021</div>
        <ul className="footer__list">
          <li className="footer__item">
            <a
              className="footer__item-link"
              href="https://praktikum.yandex.ru/"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__item-link" href="https://github.com/slen1337">
              Github
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__item-link" href="https://www.facebook.com/">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
