import { GetCharactersUsecase } from "@/@clean/application/character/get_all_characters_usecase";
import { Character } from "@/@clean/domain/entities/character";
import { CharacterRepository } from "@/@clean/infra/repositories/character_repository";
import axios from "axios";

test('Test get characters usecase', () => {
    const http = axios.create({
        baseURL: 'https://rickandmortyapi.com/api',
      });
    const repo = new CharacterRepository(http);
    const usecase = new GetCharactersUsecase(repo);

    const characters = usecase.execute();

    expect(characters).toBeInstanceOf(Promise<Character[]> );
});