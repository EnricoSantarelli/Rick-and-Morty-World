import { GetCharactersUsecase } from "@/@clean/application/character/get_all_characters_usecase";
import { Character } from "@/@clean/domain/entities/character";
import { GENDER } from "@/@clean/domain/enums/gender_enum";
import { STATUS } from "@/@clean/domain/enums/status_enum";
import { CharacterRepository } from "@/@clean/infra/repositories/character_repository";
import axios from "axios";

test('Test get characters', () => {
    const http = axios.create({
        baseURL: 'https://rickandmortyapi.com/api',
      });
    const repo = new CharacterRepository(http);

    const characters = repo.getCharacters();

    expect(characters).toBeInstanceOf(Promise<Character[]>);
});

test('Test create character', () => {
    const http = axios.create({
        baseURL: 'https://rickandmortyapi.com/api',
      });
    const repo = new CharacterRepository(http);

    const character = repo.createCharacter(1, "Pickle Rick", STATUS.ALIVE, "Human", "Just a human pickle", GENDER.MALE, "Earth", "https://ibb.co/2ZkhWkcg");

    expect(character).toBeInstanceOf(Character);
});