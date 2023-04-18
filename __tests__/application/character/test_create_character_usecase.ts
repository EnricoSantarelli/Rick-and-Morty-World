import { CreateCharacterUsecase } from "@/@clean/application/character/create_character_usecase";
import { Character } from "@/@clean/domain/entities/character";
import { GENDER } from "@/@clean/domain/enums/gender_enum";
import { STATUS } from "@/@clean/domain/enums/status_enum";
import { CharacterRepository } from "@/@clean/infra/repositories/character_repository";
import axios from "axios";

test('Test create character usecase', () => {
    const http = axios.create({
        baseURL: 'https://rickandmortyapi.com/api',
      });
    const repo = new CharacterRepository(http);
    const usecase = new CreateCharacterUsecase(repo);

    const character = usecase.execute(1, "Pickle Rick", STATUS.ALIVE, "Human", "Just a human pickle", GENDER.MALE, {"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"}, "https://ibb.co/2ZkhWkcg");

    expect(character).toBeInstanceOf(Character);
});