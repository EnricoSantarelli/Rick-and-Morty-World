import React, { useContext } from "react";
import { CharacterContext } from "@/contexts/character_provider";
import styles from "./carousel.module.scss";
import { Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  const { characters } = useContext(CharacterContext);

  return (
    <Swiper>
      {characters.map((character) => (
        <div key={character.id} className={styles.carousel_card}>
          <h1>{character.name}</h1>
        </div>
      ))}
    </Swiper>
  );
}
