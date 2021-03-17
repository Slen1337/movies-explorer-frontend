import React from "react";
import { Link } from "react-router-dom";

export default function HeaderFilms({}) {
  return (
    <ul className="films__menu">
      <li className="films__menu-item">
        <Link to="/movies" className="films__link">
          Фильмы
        </Link>
      </li>
      <li className="films__menu-item">
        <Link to="/saved-movies" className="films__link">
          Сохранённые фильмы
        </Link>
      </li>
    </ul>
  );
}
