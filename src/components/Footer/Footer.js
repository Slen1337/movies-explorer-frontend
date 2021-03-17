import React from "react";

export default function Footer({}) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__content">
          <p className="footer__copyright">&copy; 2021</p>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a
                className="footer__link"
                href="https://praktikum.yandex.ru"
                target="_blank"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__list-item">
              <a
                className="footer__link"
                href="https://github.com"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li className="footer__list-item">
              <a
                className="footer__link"
                href="https://facebook.com"
                target="_blank"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

