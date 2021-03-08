import React from 'react';
import HeaderBox from '../Header/HeaderBox/HeaderBox';
import Tech from '../Techs/Tech/Tech';


export default function Techs() {
    const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];
    return(
        <section id="technology" className="technology box">
            <HeaderBox title='Технологии' />
            <h5 className="technology__title">7 технологий</h5>
            <p className="technology__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="technology__list">
               {techs.map((tech, index) => (
                    <Tech key={index} tech={tech} />
               ))}
            </ul>
        </section>
    )
}
