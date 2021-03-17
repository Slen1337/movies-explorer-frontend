import React from "react";

export default function NotFound() {
  return (
    <section className="not-found">
      <h1 className="not-found__text">404</h1>
      <p className="not-found__description">Страница не найдена</p>
      <a href="/" className="not-found__back">
        Назад
      </a>
    </section>
  );
}
