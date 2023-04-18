"use client";
import React, { useContext } from "react";
import { CharacterContext } from "@/contexts/character_provider";

export default function BattlePage() {
  const { characters } = useContext(CharacterContext);

  return <h1>Battle</h1>;
}
