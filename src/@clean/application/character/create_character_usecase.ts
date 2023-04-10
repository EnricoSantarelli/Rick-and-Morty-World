import { Character } from "@/@clean/domain/entities/character";
import { CharacterLocalStorageRepository } from "@/@clean/infra/repositories/character_local_storage_repository";

export class CreateCharacterUsecase {
constructor(private repo: CharacterLocalStorageRepository) {}

  execute(character: Character): Character {
    this.repo.createCharacter(character);
    return character;
  } 
}