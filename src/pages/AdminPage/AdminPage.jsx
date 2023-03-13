import React from "react";
import css from "./AdminPages.module.css";
import Card from "../../components/Card/Card";
import { useState } from "react";
import { useEffect } from "react";
import Title from "../../components/Title/Title";
import UnderHeader from "../../components/UnderHeader/UnderHeader";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPizzas } from "../../slices/MainSlice";
import { useSelector } from "react-redux";

function AdminPages(props) {
  const dispatch = useDispatch();

  const { error, isLoading, pizzasData, drinksData } = useSelector(
    (state) => state.main
  );
  useEffect(() => {
    dispatch(fetchPizzas());
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
        {pizzasData.map((item) => (
          <Card key={item.id} {...item} isAdmin={true} />
        ))}
      </section>
      <Title title="Панель продуктов:" position="center" />
      <section className="d-flex">
        <Link to="/create-product" className={css.getPizza}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1404/1404945.png"
            alt="Добавить продукт"
          />
        </Link>
        {drinksData.map((item) => (
          <Card key={item.id} {...item} isAdmin={true} />
        ))}
      </section>
    </div>
  );
}

export default AdminPages;
