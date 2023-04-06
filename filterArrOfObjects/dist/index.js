import { Gender } from "./constants";
var people = [{ name: "Aneta", age: "31", gender: Gender.female }, { name: "Bob", age: "25", gender: Gender.male }];
var filterByProperty = function (people, property, value) {
    var filteredResult = people.filter(function (person) { return person[property] === value; });
    return filteredResult;
};
console.log(filterByProperty(people, "31", "female"));
