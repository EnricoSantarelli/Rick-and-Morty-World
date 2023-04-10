"use client";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { Character } from "@/@clean/domain/entities/character";
import { container, Registry } from "@/@clean/infra/container_registry";
import { GetAllCharactersUsecase } from "@/@clean/application/character/get_all_characters_usecase";
import { CreateCharacterUsecase } from "@/@clean/application/character/create_character_usecase";
import { STATUS } from "@/@clean/domain/enums/status_enum";
import { GENDER } from "@/@clean/domain/enums/gender_enum";

export type CharacterContextProvider = {
  characters: Character[];
  getAllCharacters: () => void;
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

const defaultContext: CharacterContextProvider = {
  characters: [],
  getAllCharacters: async () => {},
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
      setCharacters(characters);
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
