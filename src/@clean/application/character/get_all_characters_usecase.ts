import { Character } from "@/@clean/domain/entities/character";
import { CharacterLocalStorageRepository } from "@/@clean/infra/repositories/character_local_storage_repository";

export class GetAllCharactersUsecase {
    constructor(private repo: CharacterLocalStorageRepository) {}

    execute(): Character[] {
        return this.repo.getAllCharacters();
    }
}