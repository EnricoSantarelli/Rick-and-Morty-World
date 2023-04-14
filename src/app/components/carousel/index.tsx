import React, { useContext } from "react";
import { CharacterContext } from "@/contexts/character_provider";
import styles from "./carousel.module.scss";
import CarouselComponent from "better-react-carousel";

export default function Carousel() {
  const { characters } = useContext(CharacterContext);

  return (
    <CarouselComponent
      cols={5}
      rows={2}
      gap={10}
      loop
      autoplay={3000}
      responsiveLayout={[
        {
          breakpoint: 769,
          cols: 2,
          rows: 3,
        },
        {
          breakpoint: 427,
          cols: 2,
          rows: 3,
        },
      ]}
    >
      {characters.map((character) => (
        <CarouselComponent.Item key={character.id}>
          <div className={styles.carousel_card}>
            <h1>{character.name}</h1>
          </div>
        </CarouselComponent.Item>
      ))}
    </CarouselComponent>
  );
}
