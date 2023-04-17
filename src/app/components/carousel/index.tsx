import React, { useContext } from "react";
import { CharacterContext } from "@/contexts/character_provider";
import styles from "./carousel.module.scss";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GENDER } from "@/@clean/domain/enums/gender_enum";
import { STATUS } from "@/@clean/domain/enums/status_enum";

export default function Carousel() {
  const { characters } = useContext(CharacterContext);

  return (
    <Swiper
      className={styles.carousel}
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      loop
      centeredSlides={true}
      breakpoints={{
        769: {
          slidesPerView: 3,
        },
        1025: {
          slidesPerView: 4,
        },
      }}
    >
      {characters.map((character) => (
        <SwiperSlide key={character.id} className={styles.carousel__card}>
          <Image
            src={character.image}
            alt="${character.name} image"
            width={150}
            height={150}
            className={styles.carousel__image}
            priority
          />
          <div className={styles.carousel__attributes}>
            <h1 className={styles.carousel__name}>{character.name}</h1>
            <div className={styles.carousel__div}>
              <div className={styles.carousel__gender}>
                <h2 className={styles.carousel__title}>Gender</h2>
              </div>
              <div className={styles.carousel__species}>
                <h2 className={styles.carousel__title}>Specie</h2>
              </div>
            </div>
            <div className={styles.carousel__origin}>
              <h2 className={styles.carousel__title}>Origin</h2>
            </div>
            <div className={styles.carousel__type}>
              <h2 className={styles.carousel__title}>Type</h2>
            </div>
            <div className={styles.carousel__status}>
              <div
                className={
                  character.status === "ALIVE"
                    ? styles.carousel__alive
                    : character.status === "DEAD"
                    ? styles.carousel__dead
                    : styles.carousel__unknown
                }
              />
              <h2 className={styles.carousel__title}>Status</h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
