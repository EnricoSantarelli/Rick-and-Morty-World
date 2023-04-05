import { GENDER } from "../enums/gender_enum";
import { STATUS } from "../enums/status_enum";

export type CharacterProps = {
    id: number;
    name: string;
    status: STATUS;
    species: string;
    type: string;
    gender: GENDER;
    origin: string;
    image: string;
}

export class Character {
    constructor(public props: CharacterProps) {

        //constructor of the entity calling all validation functions

        if (!Character.validateId(props.id)) {
            throw new Error("Invalid id");
        }
        this.props.id = props.id

        if (!Character.validateName(props.name)) {
            throw new Error("Invalid name");
        }
        this.props.name = props.name

        if (!Character.validateStatus(props.status)) {
            throw new Error("Invalid status");
        }
        this.props.status = props.status

        if (!Character.validateSpecies(props.species)) {
            throw new Error("Invalid species");
        }
        this.props.species = props.species

        if (!Character.validateType(props.type)) {
            throw new Error("Invalid type");
        }
        this.props.type = props.type

        if (!Character.validateGender(props.gender)) {
            throw new Error("Invalid gender");
        }
        this.props.gender = props.gender 

        if (!Character.validateOrigin(props.origin)) {
            throw new Error("Invalid origin");
        }
        this.props.origin = props.origin

        if (!Character.validateImage(props.image)) {
            throw new Error("Invalid image");
        }

        this.props.image = props.image
    }

    //getters of the properties

    get id() {
        return this.props.id;
    }

    get name() {
        return this.props.name;
    }

    get status() {
        return this.props.status;
    }

    get species() {
        return this.props.species;
    }

    get type() {
        return this.props.type;
    }

    get gender() {
        return this.props.gender
    }

    get origin() {
        return this.props.origin;
    }

    get image() {
        return this.props.image;
    }

    //setters of the properties

    set id(id: number) {
        if (!Character.validateId(id)) {
            throw new Error("Invalid id");
        }
        this.props.id = id;
    }

    set name(name: string) {
        if (!Character.validateName(name)) {
            throw new Error("Invalid name");
        }
    }

    set status(status: STATUS) {
        if (!Character.validateStatus(status)) {
            throw new Error("Invalid status");
        }
        this.props.status = status;
    }

    set species(species: string) {
        if (!Character.validateSpecies(species)) {
            throw new Error("Invalid species");
        }
        this.props.species = species;
    }

    set type(type: string) {
        if (!Character.validateType(type)) {
            throw new Error("Invalid type");
        }
    }

    set gender(gender: GENDER){
        if (!Character.validateGender(gender)) {
            throw new Error("Invalid gender");
        }
    }

    set origin(origin: string) {
        if (!Character.validateOrigin(origin)) {
            throw new Error("Invalid origin");
        }
    }

    set image(image: string) {
        if (!Character.validateImage(image)) {
            throw new Error("Invalid image");
        }
    }
    
    //validations of the properties

    static validateId(id: number) {
        if (id == null){
            return false;
        }
        else if(id < 0){
            return false;
        }
        else if(typeof(id) != "number"){
            return false;
        }
        return true
    }

    static validateName(name: string) {
        if (name == null){
            return false;
        }
        else if(name.length < 2){
            return false;
        }
        else if(typeof(name) != "string"){
            return false;
        }
        return true
    }

    static validateStatus(status: STATUS) {
        if (status == null){
            return false;
        }
        else if(Object.values(STATUS).includes(status) == false){
            return false;
        }
        return true
    }

    static validateSpecies(species: string) {
        if (species == null){
            return false;
        }
        else if(species.length < 2){
            return false;
        }
        else if(typeof(species) != "string"){
            return false;
        }
        return true
    }

    static validateType(type: string) {
        if (type == null){
            return false;
        }
        else if(type.length < 2){
            return false;
        }
        else if(typeof(type) != "string"){
            return false;
        }
        return true
    }

    static validateGender(gender: GENDER){
        if (gender == null){
            return false;
        }
        else if(Object.values(GENDER).includes(gender) == false){
            return false;
        }
        return true
    }

    static validateOrigin(origin: string) {
        if (origin == null){
            return false;
        }
        else if(origin.length < 2){
            return false;
        }
        else if(typeof(origin) != "string"){
            return false;
        }
        return true
    }

    static validateImage(image: string) {
        if (image == null){
            return false;
        }
        else if(image.length < 2){
            return false;
        }
        else if(typeof(image) != "string"){
            return false;
        }
        return true
    }
      
}