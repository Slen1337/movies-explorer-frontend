import React from "react";
import HeaderBox from "../../Header/HeaderBox/HeaderBox";

export default function AboutProject({}) {
  return (
    <section id="project" className="about-project">
      <HeaderBox title="О проекте" />
      <div className="about-project__box">
        <div className="about-project__description">
          <h3 className="about-project__description-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__description">
          <h3 className="about-project__description-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__description-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <ul className="about-project__list">
        <li className="about-project__timeline about-project__backend">
          <p className="about-project__timeline-title about-project__timeline-title-fix">
            1 неделя
          </p>
        </li>
        <li className="about-project__timeline about-project__frontend">
          <p className="about-project__timeline-title">4 недели</p>
        </li>
        <li className="about-project__timeline">
          <p className="about-project__timeline-title about-project__timeline-fix">
            Back-end
          </p>
        </li>
        <li className="about-project__timeline">
          <p className="about-project__timeline-title about-project__timeline-fix">
            Front-end
          </p>
        </li>
      </ul>
    </section>
  );
}
