export interface Person {
    name: string,
    age: number, 
    gender: Gender
}

export enum Gender {
    male = "male",
    female = "female",
    undefined = "undefined"
}