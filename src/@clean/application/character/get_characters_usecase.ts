import { Character } from "@/@clean/domain/entities/character";
import { CharacterRepository } from "@/@clean/infra/repositories/character_repository";

export class GetCharactersUsecase {
    constructor(private repo: CharacterRepository) {}

    async execute(): Promise<Character[]> {
        return this.repo.getCharacters();
    }
}