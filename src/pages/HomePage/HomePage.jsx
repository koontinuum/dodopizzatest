import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import SliderCard from "../../components/SliderCard/SliderCard";
import Title from "../../components/Title/Title";
import css from "./HomePage.module.css";

function HomePage(props) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("https://63e5fd8683c0e85a868a7f54.mockapi.io/card")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className={css.wrapper + " container"}>
      <main>
        <SliderCard />
      </main>
      <section>
        <Title title="Пицца" />
        <div className={css.cardsWrapper}>
          {cards.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </section>
      <section>
        <Title position="center" title="Напитки" />
      </section>
    </div>
  );
}

export default HomePage;
