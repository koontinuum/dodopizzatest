import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import SliderCard from "../../components/SliderCard/SliderCard";
import Title from "../../components/Title/Title";
import UnderSlider from "../../components/UnderSlider/UnderSlider";
import css from "./HomePage.module.css";
import axios from "axios";
import Header from "../../components/Header/Header";
import UnderHeader from "../../components/UnderHeader/UnderHeader";
import Api from "../../api/Api";
import Drinks from "../../components/Drinks/Drinks";

function HomePage(props) {
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
  return (
    <>
      <Header />
      <UnderHeader />
      <div className={css.wrapper + " container"}>
        <main>
          <SliderCard />
        </main>
        <Title title="Часто заказывают" />
        <main className={css.underSliders}>
          <UnderSlider />
          <UnderSlider />
          <UnderSlider />
          <UnderSlider />
          <UnderSlider />
        </main>
        <section>
          <Title title="Пицца" />
          <div className={css.cardsWrapper}>
            {pizzas.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </section>
        <section>
          <Title position="center" title="Напитки" />
          <div className={css.cardsWrapper}>
            {pizzas.map((item) => (
              <Drinks key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
