import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import SliderCard from "../../components/SliderCard/SliderCard";
import Title from "../../components/Title/Title";
import UnderSlider from "../../components/UnderSlider/UnderSlider";
import css from "./HomePage.module.css";
import Header from "../../components/Header/Header";
import UnderHeader from "../../components/UnderHeader/UnderHeader";
import Drinks from "../../components/Drinks/Drinks";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "../../slices/MainSlice";

function HomePage() {
  const { error, isLoading, pizzasData, drinksData } = useSelector(
    (state) => state.main
  );
  console.log(pizzasData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);
  return (
    <>
      <Header />
      <UnderHeader />
      <div className={css.wrapper + " container"}>
        <main>
          <SliderCard />
        </main>
        <Title title="Часто заказывают" size="24px" margin="20px" />
        <main className={css.underSliders}>
          <UnderSlider
            img="https://dodopizza-a.akamaihd.net/static/Img/Products/f502b32926af4951aa5e3802c4c8e91a_146x146.webp"
            name="Пепперони"
            pay="от 445 сом"
          />
          <UnderSlider
            img="https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/fe70ef7c8468472d8d07fdd2fa4874c6_146x146.webp"
            name="2 пиццы"
            pay="1095 сом"
          />
          <UnderSlider
            img="https://dodopizza-a.akamaihd.net/static/Img/Products/aa24adaceff241b0a2eb292b7c677526_146x146.webp"
            name="Мексиканская"
            pay="от 445 сом"
          />
          <UnderSlider
            img="https://dodopizza-a.akamaihd.net/static/Img/Products/0bd7315279e34250b85f45c2526c1b65_146x146.webp"
            name="Достер"
            pay="179 сом"
          />
          <UnderSlider
            img="https://dodopizza-a.akamaihd.net/static/Img/Products/a1ddf6a09d0b4442b2bc52db4ca66ac7_146x146.webp"
            name="Рулетики с брусинкой"
            pay="169 сом"
          />
        </main>
        <div className={css.minitext}>
          <img
            src="https://dodopizza-a.akamaihd.net/site-static/dist/f30f1ab8cd7a7a54476d.svg"
            alt=""
          />
          <h1>
            Без свинины
            <p>Мы готовим из цыпленка и говядины</p>
          </h1>
        </div>
        <section>
          <Title title="Пицца" />
          <div className={css.cardsWrapper}>
            {pizzasData.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </section>
        <section>
          <Title position="center" title="Напитки" />
          <div className={css.cardsWrapper}>
            {drinksData.map((item) => (
              <Drinks key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
