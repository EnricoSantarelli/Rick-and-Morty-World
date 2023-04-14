import React, { useContext } from "react";
import { CharacterContext } from "@/contexts/character_provider";
import styles from "./carousel.module.scss";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

export default function Carousel() {
  const { characters } = useContext(CharacterContext);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      slidesPerView={"auto"}
      spaceBetween={50}
      grid={{ rows: 2, fill: "column" }}
      centeredSlides={true}
      className={styles.carousel}
    >
      {characters.map((character) => (
        <SwiperSlide key={character.id} className={styles.carousel_card}>
          <h1>{character.name}</h1>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
