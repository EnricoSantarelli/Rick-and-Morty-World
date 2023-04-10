import { Character } from "@/@clean/domain/entities/character";
import { ICharacterRepository } from "@/@clean/domain/repositories/character_repository_interface";

export class CharacterLocalStorageRepository implements ICharacterRepository {
    private readonly localStorageKey = "characters";

    getAllCharacters(): Character[] {
        const characters = JSON.parse(localStorage.getItem(this.localStorageKey) || "[]");
        return characters;     
    }

    createCharacter(character: Character): Character {
        localStorage.setItem(this.localStorageKey, JSON.stringify(character))
        return character;
    }
}