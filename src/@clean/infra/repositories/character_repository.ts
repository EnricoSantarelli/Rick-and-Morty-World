import { Character, Origin } from "@/@clean/domain/entities/character";
import { GENDER } from "@/@clean/domain/enums/gender_enum";
import { STATUS } from "@/@clean/domain/enums/status_enum";
import { ICharacterRepository } from "@/@clean/domain/repositories/character_repository_interface";
import { http } from "../http";
import { AxiosInstance } from "axios";

export class CharacterRepository implements ICharacterRepository {
    constructor(private readonly http: AxiosInstance) {}

    async getCharacters(url: string = '/character'): Promise<Character[]> {
      const response = await http.get(url);
      const characters = response.data.results;
    
      if (response.data.info.next !== null) {
        const nextPageCharacters = await this.getCharacters(response.data.info.next);
        return characters.concat(nextPageCharacters);
      }
    
      return characters;
    }
    createCharacter(newId: number, newName: string, newStatus: STATUS, newSpecies: string, newType: string, newGender: GENDER, newOrigin: Origin, newImage: string): Character {
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