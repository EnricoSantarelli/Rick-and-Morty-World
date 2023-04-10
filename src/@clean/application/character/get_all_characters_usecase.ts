import { Character } from "@/@clean/domain/entities/character";
import { CharacterRepository } from "@/@clean/infra/repositories/character_repository";

export class GetAllCharactersUsecase {
    constructor(private repo: CharacterRepository) {}

    async execute(): Promise<Character[]> {
        return this.repo.getAllCharacters();
    }
}