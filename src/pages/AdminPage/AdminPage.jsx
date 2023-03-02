import React from "react";
import css from "./AdminPages.module.css";
import Card from "../../components/Card/Card";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Title from "../../components/Title/Title";
import UnderHeader from "../../components/UnderHeader/UnderHeader";
import { Link } from "react-router-dom";
import Api from "../../api/Api";

function AdminPages(props) {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState("");

  const getPizzas = async () => {
    const resp = await Api.getPizzas();
    if (resp.status === 200) {
      setPizzas(resp.data);
    } else {
      setError("Ошибка сервера 404");
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  if (error) return <h1>{error}</h1>;
  return (
    <div className="container">
      <UnderHeader />
      <Title title="Панель продуктов:" position="center" />
      <section className="d-flex">
        <Link to="/create-product" className={css.getPizza}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1404/1404945.png"
            alt="Добавить продукт"
          />
        </Link>
        {pizzas.map((item) => (
          <Card key={item.id} {...item} isAdmin={true} />
        ))}
      </section>
    </div>
  );
}

export default AdminPages;
