import { Container } from "inversify";
import { http } from "./http";
import { CharacterRepository } from "./repositories/character_repository";
import { CreateCharacterUsecase } from "../application/character/create_character_usecase";
import { GetAllCharactersUsecase } from "../application/character/get_all_characters_usecase";

export const Registry = {
    AxiosAdapter: Symbol.for('AxiosAdapter'),

    CharacterRepository: Symbol.for('CharacterRepository'),

    CreateCharacterUsecase: Symbol.for('CreateCharacterUsecase'),
    GetAllCharactersUsecase: Symbol.for('GetAllCharactersUsecase'),
}

export const container = new Container();

container.bind(Registry.AxiosAdapter).toConstantValue(http);

container.bind(Registry.CharacterRepository).toDynamicValue((context) => {
    return new CharacterRepository(context.container.get(Registry.AxiosAdapter));
})

container.bind(Registry.CreateCharacterUsecase).toDynamicValue((context) => {
    return new CreateCharacterUsecase(context.container.get(Registry.CharacterRepository));
});
container.bind(Registry.GetAllCharactersUsecase).toDynamicValue((context) => {
    return new GetAllCharactersUsecase(context.container.get(Registry.CharacterRepository));
});


