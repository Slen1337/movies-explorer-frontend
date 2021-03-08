import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderMain(props) {
  return (
    <>
      <div className={`header__content ${props.mod}`}>
        <nav className={`header__border`}>
          <ul className={`header__list ${props.navListMod}`}>
            {props.children}
            <li
              className={`header__item header__item_type_movies ${props.navListItemMod}`}
            >
              <NavLink
                to="/movies"
                className={`header__link ${props.navLinkMod}`}
                activeClassName="header__link_active"
              >
                Фильмы
              </NavLink>
            </li>
            <li
              className={`header__item header__item_type_save ${props.navListItemMod}`}
            >
              <NavLink
                to="/savedmovies"
                className={`header__link ${props.navLinkMod}`}
                activeClassName="burger-menu__nav-link_active"
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
        </nav>
        <ul
          className={`header__item header__item_type_profile ${props.navLinkProfile}`}
        >
          <NavLink
            to="/patchProfile"
            className="header__link header__link_type_profile"
          >
            Аккаунт
          </NavLink>
          <div className="header__link header__link_type_logo"></div>
        </ul>
      </div>
    </>
  );
}
