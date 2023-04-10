"use client";
import React, { useContext } from "react";
import { CharacterContext } from "@/context/character_provider";

export default function UsersPage() {
  const { characters } = useContext(CharacterContext);

  return (
    <div>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <p>{`Personagem: ${character.name}`}</p>
          </div>
        );
      })}
    </div>
  );
}
