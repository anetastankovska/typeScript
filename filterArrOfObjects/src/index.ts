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

const betterFilter = (people: Person[], property: string, value: string) => {
    const filteredResult = people.filter(person => property === "age"
    ? person.age === parseInt(value) : person.gender === value);
    return filteredResult;
}

const shortestFilter = (people: Person[], property: string, value: string | number): Person[] => {
    return people.filter(person => person[property as keyof Person] === value);
}


console.log(filterByProperty(people, "age", "31"));
console.log(filterByProperty(people, "gender", "male"));
console.log("--------------------")
console.log(betterFilter(people, "age", "31"));
console.log(betterFilter(people, "gender", "male"));
console.log("--------------------")
console.log(shortestFilter(people, "age", "31"));
console.log(shortestFilter(people, "gender", "male"));
