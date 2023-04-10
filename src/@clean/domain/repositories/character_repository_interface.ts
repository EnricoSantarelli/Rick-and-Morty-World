import { Character } from "../entities/character";

export interface ICharacterRepository {
    getAllCharacters(): Character[];
    createCharacter(character: Character): Character;
}