export interface Person {
    name: string,
    age: number, 
    gender: Gender
}

export enum Gender {
    MALE = "male",
    FEMALE = "female",
    UNDEFINED = "undefined"
}