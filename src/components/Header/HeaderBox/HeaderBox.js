import React from "react";

export default function HeaderBox({ title }) {
  return (
    <div className="header__box">
      <h2 className="header__box_title">{title}</h2>
    </div>
  );
}
