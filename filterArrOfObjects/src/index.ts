import { Person, Gender } from "./constants";

const people = [{name: "Jill", age: 30, gender: Gender.female}, {name: "Bob", age: 25, gender: Gender.male}, {name: "John", age: 35, gender: Gender.male}]

const filterByProperty1 = (people: Person[], property: string, value: string) => {
    let filteredResult = [];
    if (property === "age") {
        const parsedValue = parseInt(value);
        filteredResult = people.filter(person => person.age === parsedValue);
    } else if (property === "gender") {
        filteredResult = people.filter(person => person.gender === value);
    }
    return filteredResult;
}

const filterByProperty2 = (people: Person[], property: string, value: string) => {
    const filteredResult = people.filter(person => property === "age"
    ? person.age === parseInt(value) : person.gender === value);
    return filteredResult;
}

const filterByProperty3 = (people: Person[], property: string, value: string | number) => {
    return people.filter((person) => person[property] === value);
}


const filterByProperty4 = (people: Person[], property: string, value: string | number): Person[] => {
    return people.filter(person => person[property as keyof Person] === value);
}

