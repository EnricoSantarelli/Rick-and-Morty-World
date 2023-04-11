"use client";
import { CharacterContext } from "@/context/character_provider";
import React, { useContext } from "react";

export default function UsersPage() {
  const { characters } = useContext(CharacterContext);

  return <h1>Create character</h1>;
}
