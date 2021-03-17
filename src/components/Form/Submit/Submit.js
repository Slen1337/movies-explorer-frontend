import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Submit({
  submitButtonText,
  formName,
  loginText,
  loginLink,
  isValid,
  isActive,
}) {
  const location = useLocation().pathname;

  return (
    <section className="submit">
      {location === "/profile" ? (
        <button
          className={`submit__button ${
            (!isValid || !isActive) && "submit__button_disabled"
          }`}
          type="submit"
          form={formName}
          disabled={(!isValid || !isActive) && true}
        >
          {submitButtonText}
        </button>
      ) : (
        <button
          className={`submit__button ${!isValid && "submit__button_disabled"}`}
          type="submit"
          form={formName}
          disabled={!isValid && true}
        >
          {submitButtonText}
        </button>
      )}
      <p className="submit__message">
        {loginText}&ensp;
        <Link
          to={location === "/signup" ? "/signin" : "/signup"}
          className="submit__link"
        >
          {loginLink}
        </Link>
      </p>
    </section>
  );
}
