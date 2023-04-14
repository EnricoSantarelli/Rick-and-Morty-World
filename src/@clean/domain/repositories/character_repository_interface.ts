import { Character } from "../entities/character";
import { GENDER } from "../enums/gender_enum";
import { STATUS } from "../enums/status_enum";

export interface ICharacterRepository {
    getCharacters(url: string): Promise<Character[]>;
    createCharacter(newId: number, newName: string, newStatus: STATUS, newSpecies: string, newType: string, newGender: GENDER, newOrigin: string, newImage: string): Character;
}