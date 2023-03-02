import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./LoginPage.module.css";

function LoginPage({ setAuth }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    if (login === "admin" && password === "admin") {
      setAuth(true);
      // navigate("/admin");
    }
  };
  return (
    <form onSubmit={submit} className={css.wallregistration}>
      <h1>Вход</h1>
      <input
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        type="text"
        name="login"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
      />
      <div className={css.lpfooter}>
        <input type="radio" />
        Запомнить меня
        <button type="submit">Вход</button>
      </div>
      <hr />
      <div className={css.elpfooter}>
        <p>Забыли пароль?</p>
        <button>Регистрация</button>
      </div>
    </form>
  );
}

export default LoginPage;
