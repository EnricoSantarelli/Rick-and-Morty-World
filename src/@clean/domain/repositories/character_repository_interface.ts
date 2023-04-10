import { Character } from "../entities/character";

export interface ICharacterRepository {
    getAllCharacters(): Promise<Character[]>;
    createCharacter(character: Character): Character;
}