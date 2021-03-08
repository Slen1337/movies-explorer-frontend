import React from "react";
import HeaderBox from "../Header/HeaderBox/HeaderBox";

export default function AboutProject() {
  return (
    <section id="project" className="about-project box">
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
            У каждого этапа были мягкий и жёсткий дедлайны, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__box">
        <div className="about-project__timeline about-project__backend">
          <p className="about-project__timeline-title">1 неделя</p>
          <p className="about-project__timeline-subtitle">Back-end</p>
        </div>
        <div className="about-project__timeline about-project__frontend">
          <p className="about-project__timeline-title about-project__timeline-title_color-fix">
            4 недели
          </p>
          <p className="about-project__timeline-subtitle">Front-end</p>
        </div>
      </div>
    </section>
  );
}
    