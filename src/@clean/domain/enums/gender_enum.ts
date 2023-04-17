export enum GENDER {
  FEMALE = "FEMALE",
  MALE = "MALE",
  GENDERLESS = "GENDERLESS",
  UNKNOWN = "UNKNOWN",
}

export function toGenderEnum(value: string): GENDER {
  switch (value) {
      case "FEMALE":
          return GENDER.FEMALE;
      case "MALE":
          return GENDER.MALE;
      case "GENDERLESS":
          return GENDER.GENDERLESS;
      case "UNKNOWN":
        return GENDER.UNKNOWN;
      default:
          throw new Error("Invalid gender");
  }
}
