"use client";
import React, { useContext } from "react";
import { CharacterContext } from "@/context/character_provider";

export default function UsersPage() {
  const { characters } = useContext(CharacterContext);

  return (
    <div>
      <p>{characters.length}</p>
    </div>
  );
}
