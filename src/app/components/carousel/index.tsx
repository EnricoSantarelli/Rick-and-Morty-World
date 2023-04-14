import React, { useContext } from "react";
import { CharacterContext } from "@/context/character_provider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./carousel.module.scss";

export default function Carousel() {
  const { characters } = useContext(CharacterContext);
  var settings = {
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    rows: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 427,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className={styles.carousel}>
      {characters.map((character) => (
        <div key={character.id} className={styles.carousel_base}>
          <div className={styles.carousel_card}>
            <h1>{character.name}</h1>
          </div>
        </div>
      ))}
    </Slider>
  );
}
