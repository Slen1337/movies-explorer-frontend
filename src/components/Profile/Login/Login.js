import React from "react";
import Greetings from "../../Form/Greetings/Greetings";
import Form from "../../Form/Form";

export default function Login({ onLogin, isLoading }) {
  return (
    <main className="form-login">
      <Greetings title="Рады видеть!" />
      <Form
        submitButtonText={isLoading ? "Вход..." : "Войти"}
        loginText="Ещё не зарегистрированы?"
        formName="login"
        loginLink="Регистрация"
        onLogin={onLogin}
      />
    </main>
  );
}
