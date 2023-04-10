"use client";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { Character } from "@/@clean/domain/entities/character";
import { container, Registry } from "@/@clean/infra/container_registry";
import { GetAllCharactersUsecase } from "@/@clean/application/character/get_all_characters_usecase";
import { CreateCharacterUsecase } from "@/@clean/application/character/create_character_usecase";

export type CharacterContextProvider = {
  characters: Character[];
  getAllCharacters: () => void;
  createCharacter: (character: Character) => void;
};

const defaultContext: CharacterContextProvider = {
  characters: [],
  getAllCharacters: async () => {},
  createCharacter: (character: Character) => {},
};

export const CharacterContext = createContext(defaultContext);

const getAllCharactersUsecase = container.get<GetAllCharactersUsecase>(
  Registry.GetAllCharactersUsecase
);
const createCharacterUsecase = container.get<CreateCharacterUsecase>(
  Registry.CreateCharacterUsecase
);

export function CharacterProvider({ children }: PropsWithChildren) {
  const [characters, setCharacters] = useState<Character[]>([]);

  function getAllCharacters() {
    getAllCharactersUsecase.execute().then((characters) => {
      console.log(characters);
      setCharacters(characters);
    });
  }

  function createCharacter(character: Character) {
    createCharacterUsecase.execute(character);
    setCharacters([...characters, character]);
  }

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <CharacterContext.Provider
      value={{ characters, getAllCharacters, createCharacter }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
