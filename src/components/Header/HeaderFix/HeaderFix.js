import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderFix(props) {
  return (
    <NavLink to={props.path} className={`header__link ${props.className}`}>
      {props.title}
      {props.children}
    </NavLink>
  );
}
