import React from "react";
import Greetings from "../../Form/Greetings/Greetings";
import Form from "../../Form/Form";

export default function Register({ onRegister, isLoading }) {
  return (
    <main className="register">
      <Greetings title="Добро пожаловать!" />
      <Form
        submitButtonText={isLoading ? "Регистрация..." : "Зарегистрироваться"}
        loginText="Уже зарегистрированы?"
        formName="register"
        loginLink="Войти"
        onRegister={onRegister}
      />
    </main>
  );
}
