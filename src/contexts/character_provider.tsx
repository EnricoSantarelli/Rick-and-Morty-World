"use client";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { Character } from "@/@clean/domain/entities/character";
import { container, Registry } from "@/@clean/infra/container_registry";
import { CreateCharacterUsecase } from "@/@clean/application/character/create_character_usecase";
import { STATUS } from "@/@clean/domain/enums/status_enum";
import { GENDER } from "@/@clean/domain/enums/gender_enum";
import { GetCharactersUsecase } from "@/@clean/application/character/get_characters_usecase";

export type CharacterContextType = {
  characters: Character[];
  getCharacters: () => void;
  createCharacter: (
    newId: number,
    newName: string,
    newStatus: STATUS,
    newSpecies: string,
    newType: string,
    newGender: GENDER,
    newOrigin: string,
    newImage: string
  ) => void;
};

const defaultContext: CharacterContextType = {
  characters: [],
  getCharacters: () => {},
  createCharacter: (
    newId: number,
    newName: string,
    newStatus: STATUS,
    newSpecies: string,
    newType: string,
    newGender: GENDER,
    newOrigin: string,
    newImage: string
  ) => {},
};

export const CharacterContext = createContext(defaultContext);

const getCharactersUsecase = container.get<GetCharactersUsecase>(
  Registry.GetCharactersUsecase
);
const createCharacterUsecase = container.get<CreateCharacterUsecase>(
  Registry.CreateCharacterUsecase
);

const getInitialState = () => {
  var characters = null;
  if (typeof window !== "undefined") {
    characters = localStorage.getItem("characters");
  }
  return characters ? JSON.parse(characters) : [];
};

export function CharacterProvider({ children }: PropsWithChildren) {
  const [characters, setCharacters] = useState<Character[]>(getInitialState);

  function getCharacters() {
    getCharactersUsecase.execute().then((characters) => {
      setCharacters(() => {
        if (typeof window !== "undefined") {
          localStorage.setItem("characters", JSON.stringify(characters));
        }
        return characters;
      });
    });
  }

  function createCharacter(
    newId: number,
    newName: string,
    newStatus: STATUS,
    newSpecies: string,
    newType: string,
    newGender: GENDER,
    newOrigin: string,
    newImage: string
  ) {
    const character = createCharacterUsecase.execute(
      newId,
      newName,
      newStatus,
      newSpecies,
      newType,
      newGender,
      newOrigin,
      newImage
    );
    setCharacters((characters) => {
      return [...characters, character];
    });
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <CharacterContext.Provider
      value={{ characters, getCharacters, createCharacter }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
