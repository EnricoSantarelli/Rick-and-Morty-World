import { Character } from "@/@clean/domain/entities/character";
import { GENDER } from "@/@clean/domain/enums/gender_enum";
import { STATUS } from "@/@clean/domain/enums/status_enum";
import { CharacterRepository } from "@/@clean/infra/repositories/character_repository";

export class CreateCharacterUsecase {
  constructor(private repo: CharacterRepository) {}

  execute(newId: number, newName: string, newStatus: STATUS, newSpecies: string, newType: string, newGender: GENDER, newOrigin: string, newImage: string): Character {
    return this.repo.createCharacter(newId, newName, newStatus, newSpecies, newType, newGender, newOrigin, newImage);
  } 
}