import { Character } from "@/@clean/domain/entities/character";
import { GENDER } from "@/@clean/domain/enums/gender_enum";
import { STATUS } from "@/@clean/domain/enums/status_enum";
import { ICharacterRepository } from "@/@clean/domain/repositories/character_repository_interface";
import { AxiosInstance } from "axios";

export class CharacterRepository implements ICharacterRepository {
    constructor(private readonly http: AxiosInstance) {}

    async getAllCharacters(): Promise<Character[]> {
      return this.http.get('/character')
        .then((response) => {
          const characters = response.data.results;
          return characters;
        })
    }

    createCharacter(newId: number, newName: string, newStatus: STATUS, newSpecies: string, newType: string, newGender: GENDER, newOrigin: string, newImage: string): Character {
      return new Character({
        id: newId,
        name: newName,
        status: newStatus,
        species: newSpecies,
        type: newType,
        gender: newGender,
        origin: newOrigin,
        image: newImage
      })
    }

    
}