import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthNav() {
    return (
        <div className='header__panel'>
            <Link to="/signup" className="header__link header__link_type_signup">Регистрация</Link>
            <Link to="/signin" className="header__link header__link_type_signin">Войти</Link>
        </div>
    );
}
