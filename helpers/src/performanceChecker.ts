import { areObjectsEqual } from "./objectEqualityChecker"
import { obj1, obj2 } from "./dummyData"

// Checks the time needed for function execution when called multiple times
const testRun = (func, o1, o2, iterations) => {
    const start = Date.now();
    for (let i=0; i<iterations; i++) {
        func(o1, o2);
    }
    const end = Date.now();
    console.log(`${iterations} in ${end-start} miliseconds`);
}

const areObjectsEqualBad = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);
const areObjectsEqualGood = (obj1, obj2) => areObjectsEqual(obj1, obj2);

// testRun(areObjectsEqualBad, obj1.from, obj1.to, 10000);
// testRun(objectEqual, obj1.from, obj1.to, 10000);
console.log(areObjectsEqualBad(obj1, obj2), areObjectsEqualGood(obj1, obj2));


