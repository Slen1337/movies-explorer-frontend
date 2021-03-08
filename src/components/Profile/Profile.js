import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Form from '../Form/Form';
export default function Profile(){
  const userName = 'Jacques';

  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <section className="profile">
        <h2 className="profile__title">Привет, {userName}!</h2>
        <Form name="profile" submitButtonText="Редактировать" className="form-profile" classNameButton="profile-form__button" >
            <div className="form__input-box">
              <label className="form__label_loggedIn" htmlFor="name">Имя</label>
              <input className="form__input_loggedIn" id="name" defaultValue="Jacques" required />
            </div>
            <div className="form__input-box form__input-box_border-fix">
              <label className="form__label_loggedIn" htmlFor="email">Почта</label>
              <input type="email" className="form__input_loggedIn" id="email" defaultValue="jac@ya.ru" required />
            </div>
        </Form>
        <Link to="/signin" className="profile__exit">Выйти из аккаунта</Link>
      </section>
    </>
  );
};
