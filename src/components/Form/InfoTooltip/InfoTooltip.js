import React from "react";
import success from "../../../images/niceIcon.jpeg";
import fail from "../../../images/errIcon.png";

export default function InfoTooltip({
  isOpen,
  onClose,
  isolatePopup,
  status,
  infoMessage,
}) {
  return (
    <div
      className={`popup ${isOpen && "popup_opened"}`}
      id="popup__info"
      onClick={onClose}
    >
      <div className="popup__container" onClick={isolatePopup}>
        <button
          className="popup__button-close"
          id="info__button-close"
          type="button"
          onClick={onClose}
        />
        {status ? (
          <img src={success} alt="Успешно" className="popup__status" />
        ) : (
          <img src={fail} alt="Ошибка" className="popup__status" />
        )}
        <h2 className="popup__status-title">{infoMessage}</h2>
      </div>
    </div>
  );
}
