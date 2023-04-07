import { Gender } from "./constants";
var people = [{ name: "Aneta", age: 31, gender: Gender.female }, { name: "Bob", age: 25, gender: Gender.male }];
var filterByProperty = function (people, property, value) {
    var filteredResult = [];
    if (property === "age") {
        var parsedValue_1 = parseInt(value);
        filteredResult = people.filter(function (person) { return person.age === parsedValue_1; });
    }
    else if (property === "gender") {
        filteredResult = people.filter(function (person) { return person.gender === value; });
    }
    return filteredResult;
};
var betterFilter = function (people, property, value) {
    var filteredResult = people.filter(function (person) { return property === "age"
        ? person.age === parseInt(value) : person.gender === value; });
    return filteredResult;
};
console.log(filterByProperty(people, "age", "31"));
console.log(filterByProperty(people, "gender", "male"));
console.log("--------------------");
console.log(betterFilter(people, "age", "31"));
console.log(betterFilter(people, "gender", "male"));
