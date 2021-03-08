import React from "react";
import { NavLink } from "react-router-dom";
import HeaderMain from "../../Header/HeaderMain/HeaderMain";

export default function Burger() {
  return (
    <>
      <div className="burger">
        <input className="burger__checkbox" type="checkbox" id="checkbox" />
        <label className="burger__label" htmlFor="checkbox">
          <span className="burger__button" />
        </label>

        <div className="burger__nav-box">
          <HeaderMain
            mod="burger__nav"
            navListMod="burger__nav-list"
            navListItemMod="burger__nav-list-item"
            navLinkMod="burger__nav-link"
            navLinkProfile="burger__nav-link_profile"
          >
            <li className="header__item burger__nav-list-item">
              <NavLink
                exact
                to="/"
                className="header__link burger__nav-link"
                activeClassName="burger__nav-link_active"
              >
                Главная
              </NavLink>
            </li>
          </HeaderMain>
        </div>
      </div>
    </>
  );
}

