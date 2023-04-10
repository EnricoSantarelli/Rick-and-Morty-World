import { Character } from "@/@clean/domain/entities/character";
import { CharacterRepository } from "@/@clean/infra/repositories/character_repository";

export class CreateCharacterUsecase {
constructor(private repo: CharacterRepository) {}

  execute(character: Character): Character {
    this.repo.createCharacter(character);
    return character;
  } 
}