import { Person, Gender } from "./constants";

const people = [{name: "Aneta", age: 31, gender: Gender.female}, {name: "Bob", age: 25, gender: Gender.male}]

const filterByProperty = (people: Person[], property: string, value: string) => {
    let filteredResult = [];
    if (property === "age") {
        const parsedValue = parseInt(value);
        filteredResult = people.filter(person => person.age === parsedValue);
    } else if (property === "gender") {
        filteredResult = people.filter(person => person.gender === value);
    }
    return filteredResult;
}

console.log(filterByProperty(people, "age", "31"));
console.log(filterByProperty(people, "gender", "male"));