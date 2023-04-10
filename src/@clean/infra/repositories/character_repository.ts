import { Character } from "@/@clean/domain/entities/character";
import { ICharacterRepository } from "@/@clean/domain/repositories/character_repository_interface";
import { AxiosInstance } from "axios";

export class CharacterRepository implements ICharacterRepository {
    constructor(private readonly http: AxiosInstance) {}

    getAllCharacters(): Promise<Character[]> {
      return this.http.get('/characters')
        .then((response) => {
          const characters = response.data.results;
          return characters;
        })
    }

    createCharacter(character: Character): Character {
        return character;
    }
}