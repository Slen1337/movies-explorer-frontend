import React from "react";

export default function MoreButton({ onMoreClick, isButtonActive }) {
  return (
    isButtonActive && (
      <section className="more">
        <button className="more__button" onClick={onMoreClick}>
          Ещё
        </button>
      </section>
    )
  );
}
