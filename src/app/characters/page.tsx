"use client";
import React, { useContext } from "react";
import { CharacterContext } from "@/context/character_provider";

export default function CharactersPage() {
  const { characters } = useContext(CharacterContext);

  return (
    <h1>Characters</h1>
  );
}
