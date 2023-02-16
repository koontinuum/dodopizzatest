import React from "react";
import Card from "../../components/Card/Card";
import SliderCard from "../../components/SliderCard/SliderCard";
import Title from "../../components/Title/Title";
import css from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={css.wrapper + " container"}>
      <main>
        <SliderCard />
      </main>
      <section>
        <Title title="Пицца" />
      </section>
      <Card />
      <section>
        <Title position="center" title="Напитки" />
      </section>
    </div>
  );
}

export default HomePage;
