import { Character } from "@/@clean/domain/entities/character";
import { GENDER } from "@/@clean/domain/enums/gender_enum";
import { STATUS } from "@/@clean/domain/enums/status_enum";

test('Test character entity', () => {
    const character = new Character(
    {id: 1, name: "Pickle Rick", status: STATUS.ALIVE, species: "Human", type: "Just a human pickle", gender: GENDER.MALE, origin: {"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"}, image: "https://ibb.co/2ZkhWkcg"
    });

    expect(character).toBeInstanceOf(Character);
});

test('Test character entity with negative id', () => {
    expect(() => { new Character(
        {id: -1, name: "Pickle Rick", status: STATUS.ALIVE, species: "Human", type: "Just a human pickle", gender: GENDER.MALE, origin: {"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"}, image: "https://ibb.co/2ZkhWkcg"
        })}).toThrowError("Invalid id");
});

test('Test character entity with invalid name length', () => {
    expect(() => { new Character(
        {id: 1, name: "P", status: STATUS.ALIVE, species: "Human", type: "Just a human pickle", gender: GENDER.MALE, origin: {"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"}, image: "https://ibb.co/2ZkhWkcg"
        })}).toThrowError("Invalid name");
});

test('Test character entity with invalid species length', () => {
    expect(() => { new Character(
        {id: 1, name: "Pickle Rick", status: STATUS.ALIVE, species: "H", type: "Just a human pickle", gender: GENDER.MALE, origin: {"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"}, image: "https://ibb.co/2ZkhWkcg"
        })}).toThrowError("Invalid species");
});

test('Test character entity with invalid image length', () => {
    expect(() => { new Character(
        {id: 1, name: "Pickle Rick", status: STATUS.ALIVE, species: "Human", type: "Just a human pickle", gender: GENDER.MALE, origin: {"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"}, image: "h"
        })}).toThrowError("Invalid image");
});