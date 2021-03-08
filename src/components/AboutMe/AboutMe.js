import React from "react";
import ava from "../../images/Jacques.png";
import HeaderBox from "../Header/HeaderBox/HeaderBox";

export default function AboutMe() {
  return (
    <section id="student" className="about-student aboutMe">
      <HeaderBox title="Студент" />
      <div className="mine">
        <div className="mine__info">
          <h2 className="mine__name">Жак</h2>
          <h3 className="mine__who">
            Cоциальный инженер и футуролог, 97 лет
          </h3>
          <p className="mine__description">
            Я родился и жил в Бруклине, Нью-Йорк, США. Начал работать в компании
            Douglas Aircraft в 1939 году, представив альтернативные разработки
            летающих крыльев, самолётов в форме диска, незамерзающего
            электростатического оборудования. Недавно начал кодить. С 1995 года
            работал на проекте «Венера». 26 лет самостоятельного обучения
            программированию не дали нужных плодов, так как концепция городов
            будущего отнимает много времени. С 2017 года я взял отпуск, а сейчас
            наконец-то записался на курс яндекс.практикума, чтобы идти в ногу со
            временем и технологиями.
          </p>
          <div>
            <a className="mine__link" href="https://www.facebook.com/">
              Facebook
            </a>
            <a className="mine__link" href="https://github.com/slen1337">
              Github
            </a>
          </div>
        </div>
        <div className="mine__pic-box">
          <img className="mine__photo" src={ava} alt="фото" />
        </div>
      </div>
    </section>
  );
}
